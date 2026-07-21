# HexSentinel Official Design Language

This document serves as the single source of truth for the visual grammar of the HexSentinel Portfolio. Every UI component, page layout, and interaction must strictly adhere to the standards outlined below to ensure absolute consistency across the application.

---

## 1. Visual Principles
- **Minimalism**: Favor negative space over borders. Content is king.
- **Precision**: Strict adherence to the 8-point baseline grid. Pixel-perfect alignment.
- **Clarity**: High contrast ratios. Muted backgrounds to elevate primary actions.
- **Purposeful Animation**: Motion should provide tactile feedback and direct attention, never distract.
- **Premium Aesthetics**: Subtle glassmorphism, precise box-shadows, and curated gradients.

---

## 2. Design Tokens

### 2.1 Colors
Mapped directly into Tailwind via `app/globals.css`.
- **Background**: `#FAFAFA` (Light) / `#0A0A0A` (Dark)
- **Surface**: `#FFFFFF` (Light) / `#121212` (Dark)
- **Primary (Electric Indigo)**: `#4F46E5`
- **Accent (Cyan)**: `#06B6D4`
- **Success (Emerald)**: `#10B981`
- **Warning (Amber)**: `#F59E0B`
- **Error (Rose)**: `#EF4444`
- **Muted**: `#F4F4F5` (Light) / `#27272A` (Dark)
- **Border**: `#E4E4E7` (Light) / `#27272A` (Dark)

### 2.2 Typography
Font Family: **Inter** (sans-serif, native system fallbacks).
- **Display**: 4rem / 64px, Tracking: -0.05em, Weight: 800 (ExtraBold)
- **H1**: 3rem / 48px, Tracking: -0.025em, Weight: 700 (Bold)
- **H2**: 2.25rem / 36px, Tracking: -0.025em, Weight: 600 (SemiBold)
- **H3**: 1.875rem / 30px, Tracking: normal, Weight: 600 (SemiBold)
- **H4**: 1.5rem / 24px, Tracking: normal, Weight: 500 (Medium)
- **Body**: 1rem / 16px, Line Height: 1.75 (Relaxed), Weight: 400 (Regular)
- **Small**: 0.875rem / 14px, Weight: 400 (Regular)
- **Caption**: 0.75rem / 12px, Tracking: 0.05em, Weight: 500 (Medium)
- **Code**: `monospace` family, 0.875rem.

### 2.3 Spacing System (8-Point Grid)
Locked into `constants/index.ts` and standard Tailwind classes:
- **Base Unit**: `0.25rem` (4px).
- **Component Padding**: `p-4` (16px) standard, `p-6` (24px) for prominent cards.
- **Gap Scale**: `gap-2` (8px) for tight clustering, `gap-6` (24px) for grid items.
- **Section Spacing**: `py-24` (96px) vertically between major page segments.

### 2.4 Border Radius
- **sm**: 0.125rem (Tags, badges)
- **md**: 0.375rem (Inputs, buttons)
- **lg**: 0.5rem (Standard Cards)
- **xl**: 0.75rem (Featured Cards, Modals)
- **full**: 9999px (Avatars, pills, circular icon buttons)

### 2.5 Elevation System (Shadows)
- **Flat**: None. Rely on subtle borders (`border-border`).
- **Low** (`shadow-low`): Micro-interactions, dropdowns.
- **Medium** (`shadow-medium`): Interactive cards on hover.
- **High** (`shadow-high`): Modals, Drawers.
- **Floating** (`shadow-floating`): Navbars, fixed action buttons.

### 2.6 Glassmorphism
Utility class: `.glass`
- **Background**: `bg-background/70`
- **Blur**: `backdrop-blur-md` (12px)
- **Border**: `border border-white/10` (Dark: `border-white/5`)
- **Usage**: Sticky navbars, featured hero overlays, premium interactive cards.

---

## 3. Grid & Layout System

### Responsive Breakpoints
- **Mobile (`<640px`)**: 4-column grid, fluid width, `px-4` container padding.
- **Tablet (`sm: 640px` - `1024px`)**: 8-column grid, fluid width, `px-8` container padding.
- **Desktop (`lg: 1024px+`)**: 12-column grid.
- **Max Width**: `max-w-7xl` (1280px) to prevent ultrawide stretching.

---

## 4. Iconography
Library: **Lucide React**
- **Default Size**: 20px (1.25rem)
- **Stroke Width**: `1.5` (Elegant, lightweight appearance)
- **Button Icons**: Size 16px, always spaced with `gap-2` from the text.
- **Action Icons**: Standalone icon buttons must have `p-2` padding to ensure a 44x44px minimum touch target for accessibility.

---

## 5. Component Standards

### 5.1 Buttons
All buttons use `class-variance-authority` (CVA).
- **Primary**: Solid Indigo (`bg-primary`), white text. High emphasis.
- **Secondary**: Light gray (`bg-secondary`), dark text. Medium emphasis.
- **Outline**: Transparent background, 1px border. Low emphasis.
- **Ghost**: Transparent, background appears on hover. Lowest emphasis.
- **States**: `hover:opacity-90`, `active:scale-95`, `disabled:opacity-50 cursor-not-allowed`.

### 5.2 Cards
- **Default**: Solid background (`bg-card`), 1px border (`border-border`), `border-radius: lg`.
- **Interactive**: Lifts by `-4px` on hover and applies `shadow-medium`. Cursor is a pointer.
- **Padding**: Exact `p-6` for internal content.

### 5.3 Forms
- **Inputs**: 40px height (`h-10`), `rounded-md`, transparent background, 1px border.
- **Focus**: `ring-2 ring-primary ring-offset-2`. Complete elimination of default browser outlines.
- **Error**: Border turns `border-error`, ring turns `ring-error`. ARIA attributes are automatically bound.

---

## 6. Motion Language
Centralized in `lib/motion/`.
- **Hover Scale**: Element scales to `1.05`, or lifts vertically by `-5px`. Spring physics (`stiffness: 400`, `damping: 25`).
- **Page Transitions**: Simple `FadeIn` (duration `0.3s`, ease-out). Avoid aggressive lateral sliding for full pages.
- **Section Reveals**: `SlideUp` with `50px` initial offset. Triggers once (`viewport={{ once: true }}`) at 10% margin offset.
- **Reduced Motion**: All animations MUST respect `useReducedMotion()`. If enabled, translate transforms fall back to `0px` offsets (opacity fades only).

---

## 7. Accessibility (A11y) Standards
- **Contrast**: Text must meet WCAG AA standards (4.5:1 ratio). Muted text uses carefully calibrated grays against the background.
- **Focus Rings**: All interactive elements must show a high-contrast focus ring when navigated via keyboard (`focus-visible`).
- **Trapping**: Modals and Drawers must lock keyboard focus inside the overlay while open.
- **Semantic HTML**: Buttons use `<button>`, not `<div>`. Forms use `<label htmlFor="...">`.
