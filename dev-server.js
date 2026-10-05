const http = require('http');
const fs = require('fs');
const path = require('path');

const DEFAULT_PORT = parseInt(process.env.PORT || '3000', 10);
const ROOT = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.otf': 'font/otf',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.ogg': 'video/ogg',
  '.pdf': 'application/pdf',
  '.txt': 'text/plain; charset=utf-8',
};

const LIVE_RELOAD_SCRIPT = `
<!-- Live Reload Script -->
<script>
  (function() {
    let es = new EventSource('/livereload');
    es.onmessage = function(e) {
      if (e.data === 'reload') {
        console.log('[live-reload] Reloading...');
        location.reload();
      }
    };
  })();
</script>
`;

const clients = new Set();

function broadcastReload() {
  for (const res of clients) {
    res.write('data: reload\n\n');
  }
}

// Watch directory for changes (debounced)
let reloadTimer = null;
try {
  fs.watch(ROOT, { recursive: true }, (eventType, filename) => {
    if (!filename) return;
    if (filename.startsWith('.') || filename.includes('node_modules') || filename === 'package.json' || filename === 'dev-server.js') return;
    const ext = path.extname(filename).toLowerCase();
    if (['.html', '.css', '.js', '.avif', '.png', '.jpg', '.svg'].includes(ext)) {
      clearTimeout(reloadTimer);
      reloadTimer = setTimeout(() => {
        console.log(`  🔄 [live-reload] File changed: ${filename}`);
        broadcastReload();
      }, 100);
    }
  });
} catch (err) {
  console.warn('File watcher warning:', err.message);
}

function serveFile(req, res, filePath, stat) {
  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  // Handle Range Requests for videos/media
  const range = req.headers.range;
  if (range && (ext === '.mp4' || ext === '.webm' || ext === '.ogg')) {
    const totalSize = stat.size;
    const parts = range.replace(/bytes=/, '').split('-');
    const start = parseInt(parts[0], 10);
    const end = parts[1] ? parseInt(parts[1], 10) : totalSize - 1;

    if (start >= totalSize || end >= totalSize) {
      res.writeHead(416, { 'Content-Range': `bytes */${totalSize}` });
      return res.end();
    }

    const chunksize = end - start + 1;
    const stream = fs.createReadStream(filePath, { start, end });
    res.writeHead(206, {
      'Content-Range': `bytes ${start}-${end}/${totalSize}`,
      'Accept-Ranges': 'bytes',
      'Content-Length': chunksize,
      'Content-Type': contentType,
    });
    return stream.pipe(res);
  }

  // Handle HTML with live-reload injection
  if (ext === '.html') {
    fs.readFile(filePath, 'utf8', (err, content) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        return res.end('500 Internal Server Error');
      }
      let html = content;
      if (html.includes('</body>')) {
        html = html.replace('</body>', `${LIVE_RELOAD_SCRIPT}\n</body>`);
      } else if (html.includes('</html>')) {
        html = html.replace('</html>', `${LIVE_RELOAD_SCRIPT}\n</html>`);
      } else {
        html += LIVE_RELOAD_SCRIPT;
      }
      res.writeHead(200, {
        'Content-Type': contentType,
        'Cache-Control': 'no-cache, no-store, must-revalidate',
      });
      res.end(html);
    });
    return;
  }

  // Static assets
  res.writeHead(200, {
    'Content-Type': contentType,
    'Content-Length': stat.size,
    'Accept-Ranges': 'bytes',
    'Cache-Control': 'no-cache',
  });
  fs.createReadStream(filePath).pipe(res);
}

function handleRequest(req, res) {
  const parsedUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  let pathname = decodeURIComponent(parsedUrl.pathname);

  // Live Reload SSE endpoint
  if (pathname === '/livereload') {
    res.writeHead(200, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
      'Access-Control-Allow-Origin': '*',
    });
    res.write(': connected\n\n');
    clients.add(res);
    req.on('close', () => {
      clients.delete(res);
    });
    return;
  }

  // Prevent directory traversal
  let safePath = path.normalize(pathname).replace(/^(\.\.[\/\\])+/, '');
  let filePath = path.join(ROOT, safePath);

  fs.stat(filePath, (err, stat) => {
    if (!err && stat.isDirectory()) {
      filePath = path.join(filePath, 'index.html');
      fs.stat(filePath, (err2, stat2) => {
        if (!err2 && stat2.isFile()) {
          serveFile(req, res, filePath, stat2);
        } else {
          try404(res);
        }
      });
      return;
    }

    if (!err && stat.isFile()) {
      return serveFile(req, res, filePath, stat);
    }

    // Try appending .html (clean URLs support)
    const htmlPath = filePath + '.html';
    fs.stat(htmlPath, (err2, stat2) => {
      if (!err2 && stat2.isFile()) {
        return serveFile(req, res, htmlPath, stat2);
      }

      try404(res);
    });
  });
}

function try404(res) {
  const notFoundPage = path.join(ROOT, '404.html');
  fs.stat(notFoundPage, (err, stat) => {
    if (!err && stat.isFile()) {
      fs.readFile(notFoundPage, 'utf8', (readErr, content) => {
        if (!readErr) {
          res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
          return res.end(content);
        }
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
      });
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
    }
  });
}

function startServer(port) {
  const server = http.createServer(handleRequest);

  server.once('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      startServer(port + 1);
    } else {
      console.error('Server error:', err);
    }
  });

  server.listen(port, () => {
    console.log('\n  🚀 Motion The Agency Dev Server is running!');
    console.log(`  ➜  Local: http://localhost:${port}/`);
    console.log('  ➜  Live reload enabled\n');
  });
}

startServer(DEFAULT_PORT);
