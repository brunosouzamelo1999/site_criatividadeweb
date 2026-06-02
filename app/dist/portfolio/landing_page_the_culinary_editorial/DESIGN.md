```markdown
# Design System Document: The Culinary Editorial

This design system is a bespoke framework crafted for a high-end food delivery experience. It moves away from the "utility-first" look of standard apps, favoring a "Culinary Editorial" aesthetic—combining the bold impact of a luxury food magazine with the seamless conversion of modern digital commerce.

## 1. Overview & Creative North Star

**Creative North Star: "The Digital Maître D’"**
The interface should feel like an invitation to a premium dining experience. We achieve this by breaking the rigid, boxy layouts of traditional web design through **intentional asymmetry, organic layering, and immersive imagery.**

Instead of a flat grid, this system treats the UI as a curated table setting. We use "High-Contrast Typography Scales" (pairing massive headlines with refined, spacious body text) and "Overlapping Compositional Elements" (where food photography breaks out of its containers) to create a sense of motion and appetite.

## 2. Colors

The palette is designed to trigger physiological hunger cues while maintaining a "Charcoal & Gold" luxury baseline.

### Color Strategy
- **Primary (`#b80b17`):** Use for high-intent actions. This is our "Saffron Red"—it should feel expensive, not alarming.
- **Secondary (`#904800`):** Our "Burnt Umber." Used for secondary navigation and anchors to provide warmth without the urgency of red.
- **Tertiary (`#795500`):** "Golden Glaze." Used for accents, star ratings, and "Limited Offer" highlights.

### The "No-Line" Rule
**Explicit Instruction:** Prohibit the use of 1px solid borders to define sections. Boundaries must be defined solely through background color shifts. For example, a `surface-container-low` section should sit against a `background` section to create a natural, soft-edge transition.

### Surface Hierarchy & Nesting
Treat the UI as physical layers of fine paper.
*   **Base:** `surface` (#f9f6f5) – The foundation.
*   **In-Page Sections:** `surface-container-low` (#f3f0ef) – Subtle depth for secondary content.
*   **Elevated Cards:** `surface-container-lowest` (#ffffff) – Used for the highest contrast against the warm off-white background.

### The "Glass & Gradient" Rule
To avoid a flat, "template" feel, use **Glassmorphism** for floating elements like navigation bars or "Add to Cart" modals.
*   **Formula:** `surface` at 80% opacity + `backdrop-blur: 20px`.
*   **Signature Textures:** Use a subtle linear gradient from `primary` (#b80b17) to `primary-container` (#ff766b) on main CTAs to give them a "simmering" depth.

## 3. Typography

The typography strategy leverages **Plus Jakarta Sans** for its geometric confidence and **Be Vietnam Pro** for its sleek, technical readability.

*   **Display (Plus Jakarta Sans):** These are your "Hero" moments. Use `display-lg` (3.5rem) with tight letter-spacing (-0.02em) to create a bold, editorial impact.
*   **Headlines (Plus Jakarta Sans):** Use `headline-lg` for section headers. Ensure they have enough breathing room (at least 48px of top margin).
*   **Body (Be Vietnam Pro):** Our workhorse. `body-lg` (1rem) is the standard for descriptions. The high x-height ensures legibility even when layered over photography.
*   **Labels (Be Vietnam Pro):** Small, all-caps, and slightly tracked out (+0.05em) for a sophisticated "Menu" feel.

## 4. Elevation & Depth

We eschew "Standard Material" shadows in favor of **Tonal Layering.**

*   **The Layering Principle:** Depth is achieved by stacking tiers. A `surface-container-lowest` card placed on a `surface-container-low` background provides a soft, "natural lift" that feels premium and tactile.
*   **Ambient Shadows:** If a floating element (like a floating action button) is required, use a shadow color tinted with our brand: `rgba(47, 46, 46, 0.06)` with a blur of `40px` and a `y-offset` of `12px`.
*   **The Ghost Border:** For accessibility on white-on-white elements, use the `outline-variant` token at **15% opacity**. Never use a 100% opaque border.

## 5. Components

### Buttons (Rounded Scale: `full`)
*   **Primary:** Gradient of `primary` to `primary-container`. White text (`on-primary`). 
*   **Secondary:** `secondary-container` background with `on-secondary-container` text.
*   **Tertiary:** No background. `primary` text with a subtle underline on hover.

### Food Cards
*   **Style:** No dividers. Use `xl` (3rem) corner radius for the top of the card and `DEFAULT` (1rem) for the bottom to create a unique, "organic" silhouette.
*   **Imagery:** Use high-quality photography that bleeds off the edge of the card.

### Inputs
*   **Style:** `surface-container-high` backgrounds with no borders. On focus, transition to a `ghost border` of the `primary` color.

### Floating Cart Component
*   Use a **Glassmorphism** effect (`surface` + blur) to sit above the content, ensuring the vibrant food photography is still visible beneath the interface.

## 6. Do’s and Don’ts

### Do:
*   **Do** use asymmetrical layouts. Let a photo of a dish sit 20px higher than the text next to it.
*   **Do** use massive amounts of white space (use the `xl` spacing tokens).
*   **Do** use `primary` sparingly as a "flavor" accent to draw the eye to conversion points.

### Don’t:
*   **Don’t** use black (`#000000`). Use `inverse_surface` (#0e0e0e) or `on_background` (#2f2e2e) for a softer, more premium charcoal feel.
*   **Don’t** use standard divider lines. If content needs to be separated, use a 40px gap or a change in surface color.
*   **Don’t** use sharp corners. Everything in the "Culinary Editorial" is rounded, soft, and inviting, mirroring the organic nature of food.

### Accessibility Note:
Ensure that while we use tonal layering, the contrast between `on-surface` and `surface` always meets WCAG AA standards. Use the `outline-variant` ghost border if a container's edge is indistinguishable from the background on lower-quality displays.```