import { defineConfig } from 'astro/config';
import meno from 'meno-astro/integration';

export default defineConfig({
  site: 'https://www.motiontheagency.com',
  integrations: [meno()],
  trailingSlash: 'never',
  build: { format: 'file' },
  compressHTML: false
});
