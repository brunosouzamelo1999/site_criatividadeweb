```markdown
# Design System Strategy: The Curated Hearth

## 1. Overview & Creative North Star: "The Curated Hearth"
This design system moves away from the cold, transactional nature of traditional e-commerce. Our Creative North Star is **The Curated Hearth**—an experience that feels as warm as a boutique gift shop and as intentional as a high-end editorial magazine. 

We reject the "standard" boxy grid. Instead, we embrace a **Dynamic Asymmetric Layout**. This system uses overlapping elements, oversized editorial typography, and "breathing" white space to guide the user. The goal is to make the act of shopping feel like an act of giving: thoughtful, personalized, and premium. We achieve "Trust" not through rigid lines, but through flawless execution of depth, color harmony, and typographic authority.

---

## 2. Colors: Tonal Depth & The "No-Line" Rule
The palette is rooted in warmth, using `primary` (Coral) for energy, `secondary` (Soft Yellow) for optimism, and `tertiary` (Deep Purple) for creative sophistication.

### The "No-Line" Rule
**Strict Mandate:** Designers are prohibited from using 1px solid borders to define sections or containers. 
*   **Boundary Definition:** Transition between sections using background shifts (e.g., moving from `surface` to `surface-container-low`).
*   **The Glass & Gradient Rule:** To elevate CTAs and hero moments, use subtle linear gradients (e.g., `primary` to `primary-container`). This adds "soul" and dimension that flat hex codes cannot provide.
*   **Signature Textures:** Floating elements (like customization menus) must use **Glassmorphism**. Apply a semi-transparent `surface-container-lowest` with a `backdrop-filter: blur(20px)` to create a frosted glass effect that feels integrated into the warm background.

---

## 3. Typography: The Editorial Voice
We utilize a dual-font strategy to balance character with readability.

*   **Display & Headlines (Plus Jakarta Sans):** This is our "Editorial" voice. Use `display-lg` for hero sections with tight letter-spacing (-0.02em). It’s approachable yet carries the weight of a premium brand.
*   **Body & UI (Manrope):** Chosen for its modern, geometric clarity. `body-lg` is your workhorse for product descriptions, ensuring that even dense information feels "friendly" and easy to digest.
*   **Hierarchy as Navigation:** Use extreme scale contrast. A `display-md` headline next to a `label-md` metadata tag creates an intentional "High-Low" aesthetic that feels designed, not just "placed."

---

## 4. Elevation & Depth: Tonal Layering
In this system, depth is biological, not mechanical. We avoid the "floating card" look of 2010-era design.

*   **The Layering Principle:** Stack containers using the `surface-container` tiers. 
    *   *Base:* `surface`
    *   *Section:* `surface-container-low`
    *   *Card:* `surface-container-lowest` (This creates a soft, "lifted" effect through color alone).
*   **Ambient Shadows:** For elements that *must* float (Modals, Hovered Cards), use the `on-surface` color for the shadow at 5% opacity, with a 40px–60px blur. This mimics natural light falling on paper.
*   **The Ghost Border:** If a border is required for accessibility, use `outline-variant` at 15% opacity. Never use 100% opaque lines.

---

## 5. Components: Intentional Primitives

### Buttons & CTAs
*   **Primary:** A pill-shaped (`full` roundedness) button using a gradient of `primary` to `primary-dim`. Text is `on-primary`.
*   **Secondary:** `secondary-container` background with `on-secondary-container` text. This is for "Add to Cart" or secondary actions.
*   **Tertiary:** No background. Use `title-sm` typography with a `primary` underline that expands on hover.

### Product Grids & Cards
*   **Rule:** Forbid divider lines. Use `surface-container-lowest` for the card background and `md` (0.75rem) rounded corners. 
*   **Asymmetry:** In product grids, stagger the aspect ratios of images (e.g., a 4:5 image next to a 1:1 image) to mimic a scrapbook or gallery wall.

### Customization Badges
*   **Styling:** Use `tertiary-container` for badges like "Hand-Engraved" or "Custom Color." Use `label-md` in `on-tertiary-container`. Badges should use `full` roundedness to feel like physical stickers or stamps.

### Input Fields
*   **State:** Use `surface-container-high` for the field background. On focus, transition the background to `surface-container-lowest` and add a 2px "Ghost Border" using the `primary` color at 40% opacity.

---

## 6. Do’s and Don’ts

### Do:
*   **Do** use overlapping elements. Let a product image bleed over the edge of a `surface-container`.
*   **Do** use `display-lg` typography for emotional hooks ("Gifts as unique as they are").
*   **Do** leverage the `tertiary` (Deep Purple) for small, high-contrast accents like notification dots or price points to draw the eye.

### Don't:
*   **Don't** use pure black (#000) for text. Always use `on-surface` (#51270d) to maintain the warm, organic feel.
*   **Don't** use standard "drop shadows." If a card doesn't feel separated enough, increase the background color contrast between the card and the section.
*   **Don't** use sharp corners. Every element should have at least a `sm` (0.25rem) radius to stay "friendly."

---

## 7. Signature Customization UI
For a personalized gift store, the "Customization Engine" is the heart of the app.
*   **The "Work Surface":** Place the product preview on a `surface-container-highest` circular pedestal. 
*   **Floating Controls:** Use Glassmorphism panels for the customization controls (color pickers, text inputs) so the user never loses sight of the product they are creating.
*   **Success States:** When a customization is saved, use a micro-interaction with `secondary-fixed` (Soft Yellow) sparkles to provide a "playful" reward.```