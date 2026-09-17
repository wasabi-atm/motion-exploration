# Motion The Agency — Design System & Guidelines (`design.md`)

> **Brand**: Motion The Agency  
> **Aesthetic**: Premium Dark-Mode / Cyber-Minimalist Motion & 3D Creative Agency  
> **Design Philosophy**: High-contrast, dark obsidian canvas with luminous neon accents, rotating conic glows, interactive mouse-tracking spotlight cards, and fluid typography.

---

## 1. Visual Identity & Brand Concept

Motion The Agency's visual identity balances sleek SaaS aesthetics (inspired by Linear, Raycast, and Framer) with high-energy creative motion design. The interface relies on deep cosmic dark backgrounds that let vibrant video assets, 3D renders, and glowing gradients take center stage.

### Key Pillars
- **Dark Void Canvas**: Near-black midnight purple foundation creates contrast and focus on video showreels.
- **Luminous Energy**: Focused electric magenta, neon violet, and cyan gradients communicate motion, creativity, and speed.
- **Precision Glassmorphism**: Thin semi-transparent borders (`rgba(255, 255, 255, 0.1)`), blurred backdrops, and pill-shaped floating navigation.
- **Dynamic Physics & Lighting**: Conic-gradient rotating borders and mouse-following spotlight gradients on card grids.

---

## 2. Color Palette & Tokens

### 2.1 Backgrounds & Surfaces
| Token | Hex / Value | Description |
|---|---|---|
| `--bg-base` | `#080610` | Main site body background (midnight obsidian) |
| `--bg-surface-1` | `#0a0814` | Secondary surface / subtle contrast containers |
| `--bg-surface-2` | `#0f0b1d` | Card base surface |
| `--bg-surface-card` | `#140d24` | Elevated card & feature blocks |
| `--bg-glass` | `rgba(255, 255, 255, 0.05)` | Glassmorphic overlays |
| `--border-subtle` | `rgba(255, 255, 255, 0.10)` | Default card and button borders |
| `--border-hover` | `rgba(255, 255, 255, 0.25)` | Hover state borders |

### 2.2 Accent Colors & Gradients
| Name | Hex / Gradient | Role |
|---|---|---|
| **Motion Pink / Magenta** | `#ff008e` (`--pink`) | Core primary brand accent, hero highlights, primary CTA |
| **Pink Gradient** | `linear-gradient(90deg, #ff008e, #ff4dcb)` | Active glowing wrappers, primary highlight badges |
| **Electric Violet** | `#581de3` → `#726eff` | Secondary actions, fixed-price card glows |
| **Subscription Purple** | `linear-gradient(90deg, #741ab2, #9b35e2)` | Recurring subscription pricing highlights |
| **Creative Credits Pink** | `linear-gradient(90deg, #ff008e, #ff4dcb)` | On-demand credits tier styling |
| **Cyan Glow** | `linear-gradient(#726eff, #581de3)` | Tech/services highlights |

### 2.3 Text & Foreground Colors
| Token | Value | Role |
|---|---|---|
| `--text-primary` | `#ffffff` | Headings, hero titles, primary buttons |
| `--text-secondary` | `rgba(255, 255, 255, 0.80)` | Body paragraphs, service descriptions |
| `--text-muted` | `rgba(255, 255, 255, 0.60)` | Subheaders, meta information, captions |
| `--text-dim` | `rgba(255, 255, 255, 0.40)` | Inactive items, footer copyright |
| `--untitled-gray900` | `#101828` | Form controls and contrast elements |
| `--untitled-gray500` | `#667085` | Subtle neutral text |

---

## 3. Typography System

### 3.1 Typefaces
- **Primary Typeface**: `Switzer` (Weights: 400 Regular, 500 Medium, 600 Semibold, 700 Bold / Extrabold)
  - Clean, high-legibility geometric neo-grotesque sans-serif.
  - Fallback: `sans-serif`
- **Secondary / Utility Typefaces**:
  - `Inter` (Data tables, forms, technical UI)
  - `Poppins` & `Work Sans` (Specialty blog/case study accents)

### 3.2 Fluid Type Scaling
The site incorporates responsive viewport-scaled root typography:
```css
* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
}
html { font-size: calc(0.625rem + 0.4166vw); }
@media screen and (max-width: 1920px) { html { font-size: calc(0.625rem + 0.4166vw); } }
@media screen and (max-width: 1440px) { html { font-size: calc(0.8126rem + 0.2081vw); } }
@media screen and (max-width: 479px)  { html { font-size: calc(0.7494rem + 0.8368vw); } }
```

### 3.3 Text Hierarchy & Styles
- **Eyebrow / Category Tag (`.text-caps`)**:
  - `font-size: 12px - 14px; text-transform: uppercase; letter-spacing: 0.08em; font-weight: 600; color: rgba(255, 255, 255, 0.7);`
- **Hero Title (`.h1`)**:
  - Large display heading, tight line-height (110–120%), featuring two-tone coloring:
  - Base white text with `.span-pink-2` (`#ff008e` or magenta gradient).
- **Section Heading (`.h2`)**:
  - 36px – 48px responsive, bold, leading with pink highlighted first phrases.
- **Subsection Heading (`.h3`, `.h4`, `.h5`)**:
  - 20px – 28px, semibold to bold.
- **Body (`.text-16-150`)**:
  - `font-size: 16px; line-height: 150%; color: rgba(255, 255, 255, 0.8);`

---

## 4. Components & Layout Patterns

### 4.1 Floating Capsule Navigation (`.navbar.capsule`)
- Floating pill structure (`border-radius: 999px`) pinned to the top.
- Backdrop blur glass effect over dark background.
- Left logo, center interactive mega-dropdowns (`For whom`, `Services`, `Our work`, `Resources`, `Pricing`), right CTA group.
- Sticky notification banner (`.nav-banner`) above the capsule highlighting:
  - `14-Day Money Back Policy`
  - `Fast Turnaround Solution`
  - `Global Clients - USA, UK, AUS + more`

### 4.2 Signature Glowing Buttons (`.glowing-wrapper-button`)
Buttons feature a dynamic dual-layer glowing structure:
1. **Outer Wrapper (`.glowing-wrapper`)**:
   - `border-radius: 62.5rem; position: relative; overflow: hidden;`
   - Conic rotating gradient borders (`borderTurn 2.5s infinite linear`):
   ```css
   @keyframes borderTurnWithTranslate {
     0%   { transform: translate(-50%, -50%) rotate(0deg); }
     100% { transform: translate(-50%, -50%) rotate(360deg); }
   }
   ```
   - Masked with `-webkit-mask-composite: xor` / `mask-composite: exclude` to yield a razor-sharp 1px rotating perimeter beam.
2. **Inner Button (`.glowing-wrapper-button`)**:
   - Pill radius, `backdrop-filter: blur(12px)`.
   - Subtle radial sheen on hover (`:after` pseudo-element with radial gradient).
   - Variants:
     - **Primary Gradient**: Magenta/pink or purple gradient fill (`gradient`).
     - **Glass Secondary**: Transparent dark fill with 1px luminous border.
     - **Small / Compact**: For navbar actions and card footers.

### 4.3 Mouse-Tracking Spotlight Cards (`#cards .card`)
Card grids (such as Services and Case Studies) feature dynamic interactive cursor tracking:
- JavaScript captures mouse coordinates:
  ```javascript
  document.getElementById("cards").onmousemove = (e) => {
    for (const card of document.getElementsByClassName("card")) {
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
      card.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
    }
  };
  ```
- CSS renders a radial illumination circle that follows the cursor:
  ```css
  .card::before {
    background: radial-gradient(800px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.06), transparent 40%);
  }
  .card::after {
    background: radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.4), transparent 40%);
  }
  ```

### 4.4 Concentric Orbital Logo Cloud (`.section-experience`)
- Three nested concentric rotating rings (`.circle-1`, `.circle-2`, `.circle-3`).
- Floating client logos (HackerRank, ClickUp, Apollo.io, Attio, Venly, Verifone, vidIQ) orbiting a central badge.
- Subtle radial purple tint (`.circle-tint`) centered behind the orbital system.

### 4.5 Before / After Interactive Media Slider
- Implemented with `@flowbase-co/boosters-before-after-slider`.
- Allows users to drag between "Raw footage / 2D wireframe" vs "Finished 3D rendered motion graphics".

### 4.6 Pricing Cards & AI Consultation Launcher
Three distinct pricing tiers:
1. **Fixed-Price Projects**: `#581de3` to `#726eff` glow. For one-off deliverables with guaranteed scope.
2. **Design Subscription**: `#741ab2` to `#9b35e2` glow. Ongoing dedicated creative bandwidth.
3. **Creative Credits**: `#ff008e` to `#ff4dcb` glow. Flexible on-demand credits for high-growth teams.
- **AI Prompt Integrations**: Interactive buttons linking to ChatGPT, Claude, Perplexity, Gemini, and Grok with comprehensive pre-filled prompts helping prospective clients select the right plan.

---

## 5. Spacing & Grid System

- **Max Container Widths**:
  - Main page container: `1280px` (`.container-1280`)
  - Banner container: `1282px` (`.container-1282`)
  - Content / reading container: `940px` (`.w-layout-blockcontainer`)
  - Text column constraints: `620px` (`.div-center-620`)
- **Spacing Scale**:
  - `4px`, `8px`, `12px`, `16px`, `20px`, `24px`, `32px`, `40px`, `60px`, `76px`, `80px`, `120px`
- **Grid Patterns**:
  - 12-column responsive layout for bento grids and feature comparisons.
  - 2-column hero with text on the left and Lottie/video illustration on the right.

---

## 6. Motion & Animation Guidelines

- **Duration & Easing**:
  - Micro-interactions (hovers, button sheens): `300ms ease-in-out`
  - Modal / dropdown transitions: `200ms ease`
  - Conic border rotation: `2.5s infinite linear`
  - Subtle opacity fades: `500ms - 1000ms`
- **Motion Assets**:
  - Webflow IX2 scroll triggers (staggered fade-up for cards).
  - Lottie JSON animations (`Homepage---Hero-Illustration-v2.json`) rendered via canvas/SVG.
  - HTML5 looping muted background videos (`.mp4`, `.webm`) with poster fallbacks.

---

## 7. Media & Asset Guidelines

- **Modern Formats**: `.avif` and `.webp` preferred for photographs and UI mockups. `.svg` for icons and logos.
- **Video Delivery**: H.264 `.mp4` paired with `.webm` transcode and high-res poster `.jpg`.
- **Favicon & Webclip**: High-res `.png` icon with transparent background.
