// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.motiontheagency.com',
  // Webflow-style clean URLs without trailing slashes: /about-us -> dist/about-us.html
  trailingSlash: 'never',
  build: { format: 'file' },
  // Keep Webflow markup whitespace intact (inline-block layouts are whitespace-sensitive).
  compressHTML: false,
});
