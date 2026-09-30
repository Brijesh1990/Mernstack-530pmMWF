# Design System Strategy: The Culinary Manuscript

## 1. Overview & Creative North Star
**The Creative North Star: "The Modern Heirloom"**

This design system moves away from the "template" restaurant look to create a digital experience that feels like a curated, high-end editorial piece. We are blending the precision of modern UI with the soul of traditional Indian hospitality.

To achieve this, the system rejects rigid, boxed-in layouts in favor of **Intentional Asymmetry**. We treat the screen as a canvas where high-quality food photography and elegant typography breathe together. By overlapping text elements onto image containers and utilizing wide margins, we create an atmosphere of luxury and space—mimicking the experience of a fine-dining table setting.

## 2. Color & Tonal Depth
The palette is a sophisticated interpretation of Indian heritage: Maroons (Primary), Saffrons (Secondary), and Golds (Tertiary) set against a backdrop of rich Creams (Surface).

### The "No-Line" Rule
To maintain a premium, seamless aesthetic, **1px solid borders for sectioning are strictly prohibited.** Boundaries must be defined solely through background color shifts. For example, a featured menu section should use `surface-container-low` to sit subtly against the `background` color.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers—like stacked sheets of fine handmade paper.
*   **The Base:** Use `surface` (#fdf9f4) for the main canvas.
*   **The Inset:** Use `surface-container-low` for large content blocks.
*   **The Lift:** Use `surface-container-highest` or `surface-container-lowest` for cards and interactive elements to create natural depth without relying on heavy shadows.

### Signature Textures & Glassmorphism
*   **Glassmorphism:** For floating navigation bars or "Quick Reserve" buttons, use semi-transparent `surface` colors with a `backdrop-filter: blur(20px)`. This allows the vibrant food imagery to bleed through the UI, softening the edges of the experience.
*   **The Saffron Glow:** Use subtle gradients transitioning from `secondary` (#8c4f00) to `secondary_container` (#fead5c) for primary CTAs to provide a "lit from within" quality that flat colors cannot achieve.

## 3. Typography: The Editorial Voice
We employ a high-contrast pairing that bridges the gap between the ancestral and the contemporary.

*   **The Display & Headline (Newsreader):** A sophisticated serif that brings the weight of tradition. Use `display-lg` for hero headlines and `headline-md` for menu categories. These should often be set in `primary` (#8d1219) to anchor the page.
*   **The Functional (Plus Jakarta Sans):** A clean, geometric sans-serif used for utility. Use `body-lg` for descriptions and `label-md` for price points. This ensures that even with a traditional aesthetic, the interface remains hyper-readable and modern.
*   **Editorial Styling:** Encourage the use of "hanging initials" or oversized `display` type that overlaps image containers to break the grid and create a custom-designed feel.

## 4. Elevation & Depth
Depth in this system is achieved through **Tonal Layering** rather than structural lines.

*   **The Layering Principle:** Place a `surface_container_lowest` (#ffffff) card on a `surface_container_low` (#f7f3ee) background. This creates a "soft lift" that feels architectural rather than digital.
*   **Ambient Shadows:** If a floating element (like a modal) requires a shadow, use an extra-diffused blur (30px+) at 4-6% opacity. The shadow color must be a tinted version of `on-surface` (#1c1c19) to mimic natural light hitting an organic surface.
*   **The Ghost Border Fallback:** If a boundary is required for accessibility, use the `outline_variant` (#e1bfbc) at **15% opacity**. Never use 100% opaque borders.

## 5. Components & UI Elements

### Buttons
*   **Primary:** `primary` (#8d1219) background with `on_primary` (#ffffff) text. Use `lg` (0.5rem) roundedness for a modern, tailored look.
*   **Secondary (The Gold Standard):** `secondary_container` (#fead5c) background with `on_secondary_container` (#734000) text.
*   **Tertiary:** Ghost style using `plusJakartaSans` in `primary` color with no container, used for low-emphasis actions like "View More."

### Cards & Menu Items
*   **Forbid Divider Lines:** Never use horizontal rules between menu items. Instead, use vertical white space (32px or 48px) and a shift to `title-md` for dish names to create separation.
*   **Image Integration:** Food visuals should never be perfectly centered. Use asymmetrical aspect ratios (e.g., 4:5 or 2:3) to make the layout feel like a high-end food magazine.

### Input Fields
*   **Text Inputs:** Use `surface_container_high` with a "Ghost Border" of `outline_variant` at 20%. Labels should be `label-md` in `on_surface_variant`. Focus states should transition the border to `secondary` (Gold) to signify the "warmth" of the interaction.

### Chips & Tags (Dietary Indicators)
*   **Style:** Small, pill-shaped (`full` roundedness) using `tertiary_fixed` (#ffe088) with `on_tertiary_fixed` (#241a00) for high-contrast legibility.

## 6. Do’s and Don’ts

### Do:
*   **Do** allow typography to overlap images slightly to create a sense of depth and custom composition.
*   **Do** use "Cream on Cream" layering (`surface` vs `surface-container-low`) for a subtle, premium feel.
*   **Do** prioritize high-resolution photography with warm, natural lighting.

### Don’t:
*   **Don't** use black (#000000). Use `on_surface` (#1c1c19) for all "black" text to maintain the warmth of the palette.
*   **Don't** use standard 1px borders or heavy drop shadows. They make the design feel "cheap" and "app-like" rather than "experience-like."
*   **Don't** crowd the interface. If a section feels full, add more white space. Luxury is defined by the space you *don't* fill.