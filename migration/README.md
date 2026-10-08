# Meno compatibility migration

This project uses the Meno Astro dialect and `meno-astro` 0.1.54. Open the project folder in Meno, then reopen the page so the editor reloads its structure.

- All 86 pages use the runtime BaseLayout and a plain `const meta` declaration.
- Navigation and footer have authoritative `resolveProps` declarations and accept instance styles.
- Static element styling uses utility classes, including arbitrary CSS values. The original Webflow class names remain for interaction scripts and contextual selectors.
- Theme colors live in `src/styles/theme.css`, which every page imports.
- Breakpoints preserve the export's 991px, 767px, and 479px widths. The additional `landscape` breakpoint uses the runtime's configured breakpoint support.
- Scripts and embedded styles use editable Embed nodes; page and shared head/footer code live in custom-code metadata.
- `public/css/meno-legacy.css` preserves global resets, fonts, contextual selectors, special media queries, and dynamic Webflow states. These advanced CSS rules remain code-based rather than individual visual style controls.
- Original stylesheets are archived as `.css.txt` under `migration/reference/`. Stacki scans every CSS file, even files the site does not load; keeping the old exports under `public/css/` caused the style panel to write to an unused stylesheet. The archive includes the user’s existing edits. The active stylesheet remains `public/css/meno-legacy.css`; this cleanup does not change the site’s rendered CSS. The previous document layout is archived in `migration/reference/WebflowBaseLayout.astro` outside the editable source tree.
- The install hook supplies Astro 7's former CLI entry point for older editor launchers without forcing a dependency rebuild on every startup.

Validation: the production build generates all 86 pages with no Meno parse warnings. Comparing original and migrated HTML preserves all page body text, headings, links, images, and form actions. Three previously empty document titles now default to “Motion The Agency.” Stacki Desktop scrolling was verified live. A temporary paragraph font-size edit saved through the sidebar and updated visibly without restarting; clearing the field restored the original styling. Drag-and-drop, Meno editing, and Webflow interactions are not yet verified. Stacki 0.1.37 Canvas clips each breakpoint frame at 125% of its device viewport height; that app limit cannot be fixed in project CSS.

The Astro compatibility plugin restricts Stacki’s component-preview document reset to its own stage, preventing a leaked scroll lock on normal pages. It also appends the active author stylesheet after Meno utilities so Stacki edits are not overridden, and refreshes the preview on stylesheet writes.
