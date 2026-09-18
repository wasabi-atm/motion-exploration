import fs from "fs";
import path from "path";

export interface ProcessedPage {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  bodyHtml: string;
}

/**
 * Remove the legacy nav-banner and old navbar from Webflow HTML
 */
function stripLegacyNav(html: string): string {
  const match = html.match(/<div[^>]*class="[^"]*nav-banner[^"]*"[^>]*>/i);
  if (!match || match.index === undefined) return html;

  let depth = 0;
  const start = match.index;
  const tagRegex = /<\/?div\b[^>]*>/gi;
  tagRegex.lastIndex = start;
  let m: RegExpExecArray | null;
  let end = -1;

  while ((m = tagRegex.exec(html)) !== null) {
    if (m[0].startsWith("</")) {
      depth--;
      if (depth === 0) {
        end = m.index + m[0].length;
        break;
      }
    } else if (!m[0].endsWith("/>")) {
      depth++;
    }
  }

  if (end !== -1) {
    return html.slice(0, start) + html.slice(end);
  }

  return html;
}

/**
 * Normalize asset URLs and internal links
 */
function normalizeContent(html: string): string {
  let output = html;

  // 1. Remove duplicate scripts already loaded by RootLayout
  output = output.replace(/<script[^>]*src="[^"]*jquery[^"]*"[^>]*><\/script>/gi, "");
  output = output.replace(/<script[^>]*src="[^"]*webflow[^"]*"[^>]*><\/script>/gi, "");

  // 2. Normalize asset paths to root-relative
  // src="images/ or href="images/
  output = output.replace(/(src|href)=["']images\/([^"']*)["']/gi, '$1="/images/$2"');
  // src="css/ or href="css/
  output = output.replace(/(src|href)=["']css\/([^"']*)["']/gi, '$1="/css/$2"');
  // src="js/ or href="js/
  output = output.replace(/(src|href)=["']js\/([^"']*)["']/gi, '$1="/js/$2"');

  // srcset="images/... 500w, images/... 800w"
  output = output.replace(/srcset=["']([^"']*)["']/gi, (_match, p1: string) => {
    const fixed = p1.replace(/(^|[\s,])images\//g, "$1/images/");
    return `srcset="${fixed}"`;
  });

  // 3. Clean internal .html links to clean modern routes
  // index.html -> /
  output = output.replace(/href=["']\/?index\.html["']/gi, 'href="/"');

  // relative links: href="about-us.html" -> href="/about-us"
  // href="for-whom/startup.html" -> href="/for-whom/startup"
  // href="/services/ui-animation.html" -> href="/services/ui-animation"
  output = output.replace(
    /href=["'](?!https?:\/\/|mailto:|tel:|#|\/\/)([^"']*?)\.html(["'])/gi,
    (_match, p1: string) => {
      const cleanPath = p1.startsWith("/") ? p1 : "/" + p1;
      return `href="${cleanPath}"`;
    }
  );

  return output;
}

/**
 * Fetch and process page content for a given slug array
 */
export function getPageContent(slug: string[]): ProcessedPage | null {
  const relPath = slug.join("/");
  const primaryPath = path.join(process.cwd(), "src/content/pages", `${relPath}.html`);
  const fallbackPath = path.join(process.cwd(), "public", `${relPath}.html`);
  const indexDirPrimary = path.join(process.cwd(), "src/content/pages", relPath, "index.html");
  const indexDirFallback = path.join(process.cwd(), "public", relPath, "index.html");

  let targetFile: string | null = null;
  if (fs.existsSync(primaryPath)) targetFile = primaryPath;
  else if (fs.existsSync(fallbackPath)) targetFile = fallbackPath;
  else if (fs.existsSync(indexDirPrimary)) targetFile = indexDirPrimary;
  else if (fs.existsSync(indexDirFallback)) targetFile = indexDirFallback;

  if (!targetFile) return null;

  const rawHtml = fs.readFileSync(targetFile, "utf-8");

  // Extract Metadata
  const titleMatch = rawHtml.match(/<title>([^<]*)<\/title>/i);
  const fallbackTitle = slug[slug.length - 1]
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase()) + " | Motion The Agency";
  const title = titleMatch && titleMatch[1].trim() ? titleMatch[1].trim() : fallbackTitle;

  const descMatch =
    rawHtml.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/i) ||
    rawHtml.match(/<meta[^>]*content=["']([^"']*)["'][^>]*name=["']description["']/i);
  const description = descMatch ? descMatch[1].trim() : "";

  const ogTitleMatch = rawHtml.match(/<meta[^>]*property=["']og:title["'][^>]*content=["']([^"']*)["']/i);
  const ogDescMatch = rawHtml.match(/<meta[^>]*property=["']og:description["'][^>]*content=["']([^"']*)["']/i);
  const ogImgMatch = rawHtml.match(/<meta[^>]*property=["']og:image["'][^>]*content=["']([^"']*)["']/i);

  // Extract body inner content
  const bodyMatch = rawHtml.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  let bodyHtml = bodyMatch ? bodyMatch[1] : rawHtml;

  // Strip legacy navbar
  bodyHtml = stripLegacyNav(bodyHtml);

  // Normalize assets and links
  bodyHtml = normalizeContent(bodyHtml);

  return {
    title,
    description,
    ogTitle: ogTitleMatch ? ogTitleMatch[1] : undefined,
    ogDescription: ogDescMatch ? ogDescMatch[1] : undefined,
    ogImage: ogImgMatch ? ogImgMatch[1] : undefined,
    bodyHtml,
  };
}

/**
 * Get all available slugs for static generation
 */
export function getAllPageSlugs(): { slug: string[] }[] {
  const contentDir = path.join(process.cwd(), "src/content/pages");
  const fallbackDir = path.join(process.cwd(), "public");

  const baseDir = fs.existsSync(contentDir) ? contentDir : fallbackDir;
  const slugs: { slug: string[] }[] = [];

  function traverse(dir: string, base: string = "") {
    if (!fs.existsSync(dir)) return;
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.isDirectory()) {
        if (entry.name === "css" || entry.name === "js" || entry.name === "images" || entry.name === "videos" || entry.name === "documents") continue;
        traverse(path.join(dir, entry.name), path.join(base, entry.name));
      } else if (entry.isFile() && entry.name.endsWith(".html")) {
        const fileRel = path.join(base, entry.name);
        if (fileRel === "index.html" || fileRel === "404.html" || fileRel === "401.html") continue;
        // Skip for-whom root because it has a dedicated custom page at src/app/for-whom/page.tsx
        if (fileRel === "for-whom.html") continue;

        const slugArray = fileRel.replace(/\.html$/, "").split(path.sep);
        slugs.push({ slug: slugArray });
      }
    }
  }

  traverse(baseDir);
  return slugs;
}
