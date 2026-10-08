import { defineConfig } from 'astro/config';
import meno from 'meno-astro/integration';

export default defineConfig({
  site: 'https://www.motiontheagency.com',
  integrations: [meno()],
  trailingSlash: 'never',
  build: { format: 'file' },
  compressHTML: false,
  vite: {
    plugins: [{
      name: 'visual-editor-css-compatibility',
      enforce: 'pre',
      configureServer(server) {
        const stylesheet = decodeURIComponent(new URL('./public/css/meno-legacy.css', import.meta.url).pathname);
        server.watcher.add(stylesheet);
        server.watcher.on('change', async (file) => {
          if (file !== stylesheet) return;
          server.moduleGraph.invalidateAll();
          for (const module of server.moduleGraph.idToModuleMap.values()) {
            if (module.id?.includes('virtual:meno-utilities.css')) {
              server.moduleGraph.invalidateModule(module);
              await server.reloadModule(module);
            }
          }
          server.ws.send({ type: 'full-reload' });
        });
      },
      async transform(source, id) {
        if (id.includes('virtual:meno-utilities.css')) {
          // Keep authorable CSS after generated defaults in Astro's dev graph
          // and bundled output. Stacki writes to this file; equal-specificity
          // edits must not be hidden by a later generated utility rule.
          const { readFile } = await import('node:fs/promises');
          const stylesheet = new URL('./public/css/meno-legacy.css', import.meta.url);
          this.addWatchFile(decodeURIComponent(stylesheet.pathname));
          const authorStyles = (await readFile(stylesheet, 'utf8'))
            .replace(/url\((['"]?)\.\.\//g, 'url($1/');
          return source + '\n' + authorStyles;
        }
        // Stacki's component preview imports the shared theme. Astro's dev
        // style graph can consequently load its document reset on site pages.
        // Keep that reset restricted to the component preview's stage.
        if (!id.includes('/node_modules/.avb/preview.astro?astro&type=style')) return;
        return source.replace(/html\s*,\s*body\s*\{/g,
          'html:has(#avb-stage), body:has(#avb-stage) {');
      }
    }]
  }
});
