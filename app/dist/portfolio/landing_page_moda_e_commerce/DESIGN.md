# Design System: High-End Editorial E-Commerce

## 1. Overview & Creative North Star: "The Digital Atelier"
This design system is built upon the concept of **The Digital Atelier**. We are moving away from the "template" look of standard e-commerce to create a digital space that feels like a curated gallery or a high-end physical boutique. 

The core philosophy is **reductionist elegance**. We break the rigid, boxed-in constraints of the web by using intentional asymmetry, overlapping elements, and expansive white space. The interface should feel "quiet" to allow the product photography—the "Art"—to speak at full volume. By utilizing the 0px roundedness scale, we embrace a "Sharp Minimalist" aesthetic that communicates precision, luxury, and architectural confidence.

---

## 2. Colors: Tonal Depth & The Accent
Our palette is rooted in a sophisticated grayscale, punctuated by a muted gold (`secondary: #D4AF37`) and a deep forest green (`tertiary: #2F4F4F`). The system operates in **Dark Mode** to further enhance the perception of luxury and depth.

### The "No-Line" Rule
**Borders are prohibited for sectioning.** To separate a hero section from a product grid, do not use a 1px line. Instead, transition the background from `surface` (#1A1A1A) to `surface-container-low` (#1F1F1F). This creates a "soft" boundary that feels more organic and premium.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers of fine paper.
- **Base Layer:** `surface` (#1A1A1A)
- **Nested Content:** Use `surface-container-lowest` (#121212) for product cards to make them appear to "float" slightly above the slightly darker base.
- **Persistent Elements:** Use `surface-bright` (#333333) for navigation bars that require maximum clarity.

### The "Glass & Gradient" Rule
For floating elements like "Quick Add" modals or mobile navigation overlays, use **Glassmorphism**:
- Background: `surface-container-highest` (#242424) at 80% opacity.
- Effect: 20px Backdrop Blur.
- This ensures the product imagery remains visible underneath, maintaining a sense of depth and continuity.

### Signature Textures
Main CTAs (Primary Buttons) should not be flat. Apply a subtle linear gradient from `primary` (#1A1A1A) to a slightly darker shade (e.g., #151515) at a 135-degree angle. This adds a "weighted" feel to the button, suggesting a physical, tactile quality.

---

## 3. Typography: Editorial Authority
We utilize a high-contrast scale to create an editorial rhythm.

*   **Display & Headlines (Epilogue):** This is our "Voice." Epilogue’s geometric precision provides a modern, architectural feel. Use `display-lg` for hero statements with tight letter-spacing (-0.02em) to command attention.
*   **Body & Labels (Manrope):** Our "Function." Manrope offers exceptional readability at small sizes. Use `body-md` for product descriptions and `label-sm` for technical specs or utility links.

**The Typographic Signature:** To achieve the "Atelier" look, occasionally pair a `display-sm` heading with a `label-md` uppercase sub-header with 0.2em letter spacing. This mimic’s high-fashion magazine layouts.

---

## 4. Elevation & Depth: Tonal Layering
Since we have a **0px roundedness policy**, traditional "shadow-heavy" material design will look incongruent. We achieve depth through **Tonal Layering**.

*   **The Layering Principle:** Place a `surface-container-lowest` card on a `surface-container` background. The subtle shift in hex value creates enough contrast for the eye to perceive a physical lift without the clutter of a shadow.
*   **Ambient Shadows:** If a shadow is required (e.g., a dropdown menu), use a "Soft Ambient" approach:
    - Shadow color: `on_surface` (#F8F8F8) at 4% opacity.
    - Blur: 40px.
    - Offset: Y = 10px.
*   **The "Ghost Border" Fallback:** For input fields or essential containers, use `outline-variant` (#4C4C4C) at 20% opacity. It should be barely visible—a "whisper" of a boundary.

---

## 5. Components: Precision Elements

### Buttons
*   **Primary:** Background: `primary` (#1A1A1A), Text: `on_primary` (#F8F8F8). 0px radius. Heavy padding (16px top/bottom, 40px left/right).
*   **Secondary (The Accent):** Background: `secondary` (#D4AF37), Text: `on_secondary` (#000000). Use sparingly for "Buy Now" or "Limited Edition" tags.
*   **Tertiary:** Ghost style. No background, `on_surface` text with a 1px underline that expands on hover.

### Input Fields
*   **Style:** Minimalist underline only. Use `outline` (#4C4C4C) for the bottom border. 
*   **Focus State:** The border transitions to `primary` (#1A1A1A) with a 2px thickness. 
*   **Error State:** Text and underline transition to `error` (#9F403D).

### Cards & Product Grids
*   **Rule:** Forbid divider lines between products. 
*   **Layout:** Use a "Masonry-Lite" approach where image aspect ratios vary slightly (e.g., 4:5 for portraits, 1:1 for detail shots) to break the "standard grid" feel. 
*   **Spacing:** A `spacing` level of `2` indicates a **Normal** density, which should be applied consistently across component internal padding and element separation, offering a balanced feel between density and airiness. While not explicitly "spacious" (level 3), this normal spacing still allows products to breathe without feeling cramped.
*   **Gutter:** Between items, use a generous 32px or 48px gutter to emphasize the "luxury of space," aligning with the normal spacing intent of the system.

### Navigation (The Curator Bar)
*   A slim, high-transparency bar using `surface` with backdrop blur. 
*   Links in `label-md`, all caps, with active states indicated by a color shift to `secondary` (Gold).

---

## 6. Do’s and Don’ts

### Do:
*   **Embrace Asymmetry:** Align text to the left while the primary image is centered or slightly offset to the right.
*   **Use Micro-Interactions:** When hovering over a product card, the image should subtly scale (1.05x) over a 0.6s ease-out transition.
*   **Prioritize Hierarchy:** Use `display-lg` sparingly. If everything is bold, nothing is bold.

### Don’t:
*   **Don't Use Rounded Corners:** This design system is strictly 0px. Any rounding breaks the architectural integrity.
*   **Don't Use High-Contrast Borders:** Never use a 100% opaque border. It creates a "cheap" or "cartoonish" look.
*   **Don't Crowd the Content:** Leverage the `spacing: 2` (Normal) to ensure content breathes appropriately.
*   **Don't Use "Pure" White:** Use `on_background` (#F8F8F8) for text; it is softer and more legible than #FFFFFF in a dark context.