import { existsSync, writeFileSync } from 'node:fs';

// Older visual-editor launchers still use Astro's former CLI entry point.
// Astro 7 moved it to bin/astro.mjs; keep both entry points available after install.
const cli = new URL('../node_modules/astro/bin/astro.mjs', import.meta.url);
const legacyCli = new URL('../node_modules/astro/astro.js', import.meta.url);
if (existsSync(cli)) {
  writeFileSync(legacyCli, "import './bin/astro.mjs';\n");
}
