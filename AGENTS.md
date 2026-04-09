<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# BrightSmiles

Dental/smile-related web application built with:
- **Next.js 16.2.3** (App Router, TypeScript)
- **React 19.2.4**
- **Tailwind CSS 4.2.2** (CSS-first config, `@tailwindcss/postcss`)

## Project Structure

```
app/            App Router pages and layouts
  layout.tsx    Root layout
  page.tsx      Home page
  globals.css   Tailwind import + custom theme
public/         Static assets
```

## Commands

- `npm run dev` — Start dev server
- `npm run build` — Production build
- `npm run start` — Start production server
- `npm run lint` — ESLint

## Key Rules

1. **Read Next.js docs first**: Before writing Next.js code, check `node_modules/next/dist/docs/` for the v16 guide. APIs may differ from training data.
2. **Tailwind v4 only**: No `tailwind.config.js`. Use `@theme` in CSS. See Tailwind section below for full v3→v4 reference.
3. **No `@tailwind` directives**: Use `@import "tailwindcss"` only.
4. **TypeScript**: All code must be TypeScript (`.ts`/`.tsx`).
5. **Path alias**: `@/*` maps to project root.

# Tailwind CSS v4 — Key Differences from v3

This project uses **Tailwind CSS v4.2.2**. v4 is a ground-up rewrite. Do NOT use v3 patterns.

## Setup (NOT like v3)

- **No `tailwind.config.js`** — configuration is CSS-first via `@theme` in CSS.
- **No `@tailwind base/components/utilities`** — use `@import "tailwindcss"` (one line).
- **PostCSS plugin** is `@tailwindcss/postcss`, NOT `tailwindcss`.
- **No `autoprefixer`** — bundled automatically.
- **No `content` array** — automatic content detection, respects `.gitignore`.
- **Sass/Less/Stylus incompatible** — cannot be used alongside v4.

## CSS-First Configuration (`@theme`)

All design tokens are defined in CSS, not JS:

```css
@import "tailwindcss";

@theme {
  --color-brand: #3f3cbb;
  --font-display: "Satoshi", sans-serif;
  --breakpoint-3xl: 120rem;
  --spacing-18: 4.5rem;
}
```

Theme variables become CSS custom properties AND generate utility classes automatically. Use `--color-*: initial;` to clear defaults before defining your own.

## Renamed/Shifted Utilities (IMPORTANT)

Shadow, blur, radius scales shifted down by one:

| v3 | v4 |
|---|---|
| `shadow-sm` | `shadow-xs` |
| `shadow` (bare) | `shadow-sm` |
| `rounded-sm` | `rounded-xs` |
| `rounded` (bare) | `rounded-sm` |
| `blur-sm` | `blur-xs` |
| `blur` (bare) | `blur-sm` |
| `outline-none` | `outline-hidden` (use for a11y-safe invisible outline) |

## Removed Utilities

All `*-opacity-*` utilities are removed. Use slash syntax instead:

- ~~`bg-opacity-50`~~ → `bg-black/50`
- ~~`text-opacity-75`~~ → `text-black/75`
- ~~`flex-shrink`~~ → `shrink`
- ~~`flex-grow`~~ → `grow`
- ~~`overflow-ellipsis`~~ → `text-ellipsis`

## Syntax Changes

- **Important modifier**: `bg-red-500!` (NOT `!bg-red-500`)
- **CSS variables in utilities**: `bg-(--brand-color)` (NOT `bg-[--brand-color]`)
- **Variant stacking**: left-to-right now: `*:first:pt-0` (NOT `first:*:pt-0`)
- **Gradients**: `bg-linear-to-r` (alias `bg-gradient-to-r` still works)

## Default Behavior Changes

- **Border color**: defaults to `currentColor` (was `gray-200`)
- **Ring**: defaults to `1px currentColor` (was `3px blue-500`)
- **Placeholder**: current text color at 50% opacity (was `gray-400`)
- **`hover:` variant**: wrapped in `@media (hover: hover)` — no effect on touch devices
- **`hidden` attribute**: now takes precedence over `block`, `flex`, `grid`
- **Colors**: all defaults use OKLCH color space

## Plugin System

- `@utility` replaces `addUtilities()` in CSS
- `@layer base {}` replaces `addBase()`
- `@layer components {}` replaces `addComponents()`
- `@custom-variant` replaces `addVariant()`
- For legacy JS plugins: `@plugin "@tailwindcss/typography";`

## New Features (v4+)

- **Container queries** built-in: `@sm:`, `@md:`, `@lg:` variants
- **3D transforms**: `rotate-x-*`, `rotate-y-*`, `perspective-*`
- **`@source` directive**: explicit content paths, `@source not` for exclusions
- **`@source inline()`**: replaces `safelist`
- **Text shadows** (v4.1): `text-shadow-2xs` through `text-shadow-lg`
- **Masks** (v4.1)
- **New color palettes** (v4.2): `mauve`, `olive`, `mist`, `taupe`
- **Logical properties** (v4.2): `pbs-*`, `pbe-*`, `mbs-*`, `mbe-*`

## `theme()` Function

Deprecated — use CSS variables directly: `var(--color-blue-500)`. For media queries (where CSS vars don't work), use `theme(--breakpoint-xl)`.

## Browser Requirements

Safari 16.4+, Chrome 111+, Firefox 128+.
