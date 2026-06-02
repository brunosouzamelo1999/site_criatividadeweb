# Design System Strategy: Velocity Brutalism

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"Velocity Brutalism."** In the world of high-performance sports headwear, movement isn't just a state—it's an aesthetic. This system rejects the soft, "safe" interfaces of generic e-commerce in favor of a high-energy, editorial experience that feels as sharp and intentional as the products themselves.

We break the "template" look through **Kinetic Asymmetry**. Elements should feel like they are in mid-sprint: large-scale typography overlapping raw-cut imagery, containers that bleed off the grid, and a total absence of rounded corners. By utilizing extreme contrast and tonal layering, we create a digital environment that conveys precision, technical superiority, and athletic intensity.

## 2. Colors & Surface Logic
This palette is engineered for impact. It relies on a "High-Chroma on Noir" foundation to ensure every interactive element feels like a performance metric.

### The Palette
- **The Core:** `background` (#131313) and `primary` (#ffffff). This is our high-contrast engine.
- **The Accelerants:** `primary_container` (#c3f400 - Vibrant Lime) for energy and `secondary_container` (#0356ff - Athletic Blue) for performance-grade reliability.
- **The Neutrals:** A sophisticated range of `surface-container` tokens to define depth without lines.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders to define sections or containers. Boundaries must be established through background color shifts. For example, a `surface-container-low` (#1b1b1b) section should sit directly against a `surface` (#131313) background. This creates a seamless, "machined" look rather than a "boxed-in" layout.

### Surface Hierarchy & Nesting
Treat the UI as a series of technical layers.
- **Base Layer:** `surface` (#131313).
- **Secondary Sectioning:** `surface-container-low` (#1b1b1b).
- **Interactive Cards:** `surface-container-high` (#2a2a2a) or `surface-container-highest` (#353535).
- **The Glass & Gradient Rule:** For hero sections or floating navigation, use `surface-variant` (#353535) with a 60% opacity and a 20px backdrop-blur. To add "soul," apply a subtle linear gradient from `primary_container` (#c3f400) to `primary_fixed_dim` (#abd600) on primary CTAs.

## 3. Typography: The Editorial Voice
Typography is not just for reading; it is a structural element. We pair the technical, wide-set geometry of **Space Grotesk** with the functional clarity of **Manrope**.

- **Display & Headlines (Space Grotesk):** Use `display-lg` and `headline-lg` to anchor pages. These should be set with tight letter-spacing (-2%) to feel aggressive and bold. Don't be afraid to let a `display-lg` heading overlap a product image.
- **Body & Titles (Manrope):** `body-lg` is your workhorse. It provides a clean, neutral counter-balance to the loud headlines.
- **Labels (Inter):** Use `label-md` for technical specs and micro-copy. These should often be all-caps with increased letter-spacing (+5%) to mimic industrial labeling.

## 4. Elevation & Depth
In this design system, "0px roundedness" is a law, not a suggestion. Every element must be sharp.

- **The Layering Principle:** Depth is achieved through Tonal Layering. To elevate a card, do not use a shadow. Instead, place a `surface-container-highest` card on a `surface-container-low` background. The contrast in value creates the "lift."
- **Ambient Shadows:** Only use shadows for floating elements like Modals or Tooltips. Use a large 32px blur, 4% opacity, using the `on_surface` color as the shadow tint. It should feel like a subtle atmospheric glow, not a drop shadow.
- **The "Ghost Border" Fallback:** If a container requires further definition (e.g., an input field), use the `outline-variant` token at **15% opacity**. High-contrast, 100% opaque borders are strictly forbidden as they clutter the visual energy.

## 5. Components

### Buttons
- **Primary:** `primary_container` (#c3f400) background with `on_primary_fixed` (#161e00) text. Sharp 0px corners.
- **Secondary:** `secondary_container` (#0356ff) background with `on_secondary` (#ffffff) text.
- **Tertiary:** Transparent background with a "Ghost Border" and `primary` text.
- **Interaction:** On hover, buttons should shift 4px up and to the right, leaving a "ghost" outline behind to simulate kinetic movement.

### Cards & Lists
- **Rule:** No dividers. Use vertical white space from the spacing scale (multiples of 8px) or a subtle shift to `surface-container-lowest` (#0e0e0e) for list items.
- **Imagery:** Product images should use `hard-light` blending modes when sitting on dark surfaces to make the colors pop.

### Input Fields
- **Style:** Underline only or "Ghost Bordered" boxes. Use `surface-container-highest` for the field background to distinguish from the page surface. Error states must use `error` (#ffb4ab) with no rounded corners.

### Custom Component: The "Performance HUD"
Since this is a sports brand, create HUD-style (Heads Up Display) overlays for product features. Use small `label-sm` text (Inter) combined with thin 1px lines (using `outline` at 20% opacity) to point to specific technical details on a headwear piece.

## 6. Do's and Don'ts

### Do:
- **Do** embrace white space. "High energy" comes from the contrast between massive type and empty areas.
- **Do** use intentional asymmetry. Offset images from the grid to create a sense of motion.
- **Do** use `primary_container` (Lime) sparingly as a "laser pointer" to guide the user's eye to the most important action.

### Don't:
- **Don't** use border-radius. Ever. 0px is the standard across all components, including buttons and cards.
- **Don't** use standard "Grey" shadows. They muddy the deep blacks of our high-end aesthetic.
- **Don't** use dividers to separate content. If the layout feels cluttered, increase the spacing scale or change the `surface-container` tier.
- **Don't** center-align long blocks of text. Stick to left-aligned editorial layouts for a premium feel.