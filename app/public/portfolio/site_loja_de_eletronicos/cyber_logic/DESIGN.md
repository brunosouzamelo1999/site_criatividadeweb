# Design System Document: The High-Tech Editorial Standard

## 1. Overview & Creative North Star: "The Kinetic Laboratory"
This design system moves away from the generic "blue-and-white" electronics store and toward a **Kinetic Laboratory** aesthetic. It treats high-end technology not as a commodity, but as a curated specimen. The creative direction is rooted in **Precision Layering**—using depth and light rather than lines to define space. 

By utilizing intentional asymmetry (e.g., staggered product grids) and high-contrast typography, we create an editorial experience that feels like a premium digital magazine rather than a spreadsheet of products. The interface should feel "engineered," utilizing the tension between deep blacks, electric blues, and expansive white space.

---

## 2. Colors & Surface Philosophy
The palette is built on high-contrast foundations to evoke a sense of professional-grade equipment.

### The "No-Line" Rule
**Prohibit 1px solid borders for sectioning.** Boundaries are defined strictly through background shifts. If a product grid needs to be separated from a filter sidebar, use `surface-container-low` for the sidebar against a `surface` background. This creates a "molded" look rather than a "boxed" look.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. Use the following logic for depth:
- **Base Layer:** `surface` (#f8f9fa) for the main page background.
- **Mid Layer:** `surface-container-low` (#f3f4f5) for large structural areas (Sidebars, Footer).
- **Hero Layer:** `surface-container-lowest` (#ffffff) for primary content cards or "lifted" interactive elements.
- **High-Tech Accent:** Use `primary` (#003ec7) only for critical interaction points or "glow" effects.

### The "Glass & Gradient" Rule
To achieve a "high-tech" finish, use Glassmorphism for floating navigation bars or quick-view modals. 
- **Recipe:** `surface-container-lowest` at 80% opacity + `backdrop-filter: blur(20px)`.
- **Signature Texture:** Primary CTAs should not be flat. Apply a subtle linear gradient from `primary` (#003ec7) to `primary_container` (#0052ff) at a 135-degree angle to provide a "backlit" hardware feel.

---

## 3. Typography: The Engineering Font Stack
Our typography balances the technical precision of *Space Grotesk* with the human-centric readability of *Manrope*.

*   **Display & Headlines (Space Grotesk):** Used for "Hero" moments and product names. The idiosyncratic terminals of Space Grotesk suggest a futuristic, lab-tested vibe.
*   **Body & Titles (Manrope):** A modern sans-serif that ensures high legibility during long technical spec comparisons.
*   **Labels (Inter):** Reserved for technical data, metadata, and micro-copy, providing a "system-level" feel.

**Editorial Rule:** Use `display-lg` for product titles but pair it with `label-md` in uppercase for categories. The extreme contrast in scale is what separates this system from a template.

---

## 4. Elevation & Depth
We eschew "Standard Material" shadows in favor of **Tonal Layering**.

*   **The Layering Principle:** Instead of a shadow, place a `surface-container-lowest` card on a `surface-container-high` background. The slight shift in hex value creates a sophisticated, "silent" elevation.
*   **Ambient Shadows:** For floating elements (Modals/Popovers), use: `box-shadow: 0 20px 40px rgba(0, 62, 199, 0.06);`. Note the blue tint in the shadow; it mimics light reflecting off a high-tech surface.
*   **The "Ghost Border" Fallback:** If a container sits on a background of the exact same color, use a "Ghost Border": `outline-variant` (#c3c5d9) at **15% opacity**.

---

## 5. Components

### Buttons: The "Engineered" Trigger
- **Primary:** Gradient (`primary` to `primary_container`), `xl` roundedness (0.75rem). No border. White text.
- **Secondary:** `surface-container-high` background. Hover state shifts to `primary_fixed_dim`.
- **States:** On click, use a subtle `primary` glow (outer shadow) rather than a color darken.

### Robust Product Cards
- **Forbid Dividers:** Do not use lines to separate the image from the price. Use `1.5rem` of vertical whitespace.
- **Structure:** Use `surface-container-lowest` as the card base. The product image should "bleed" to the edges or sit on a `surface-container-highest` circular "plinth" within the card.

### Advanced Filters & Search
- **Search Bar:** Large-scale (use `title-md` for input text). Use `surface-container-low` with a 2px `primary` focus ring.
- **Filter Chips:** Use `secondary_container` with `sm` roundedness (0.125rem) to maintain a "technical component" look.

### Secure Checkout Elements
- **Input Fields:** Bottom-border only or "Ghost Border" containers. Use `on_surface_variant` for labels in `label-sm`.
- **Validation:** Use `error` (#ba1a1a) text paired with a `error_container` background fill for the entire input row to ensure zero-miss visibility.

---

## 6. Do’s and Don’ts

### Do:
- **Do** use `display-sm` for price points to make them an editorial feature.
- **Do** use large, sweeping whitespace (64px+) between sections to allow products to "breathe" like gallery pieces.
- **Do** use `primary` for "Status: In Stock" indicators to reinforce the technological "Go" signal.

### Don't:
- **Don't** use 1px black borders. They look "cheap" and "web-1.0."
- **Don't** use standard "Drop Shadows." If it doesn't look like light hitting a surface, don't use it.
- **Don't** use traditional dividers (`<hr>`). Use a 4px height block of `surface-container-highest` if you must separate content, but try whitespace first.
- **Don't** crowd the search bar. In a high-tech system, the search is the "Oracle"—give it the center stage.