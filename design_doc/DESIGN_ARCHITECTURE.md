# SPYIT — Design Architecture & Design System Documentation

> **Version:** 1.0.0  
> **Target Application:** SPYIT Fresh Fruit Dynamic Soda Web Experience  
> **Document Purpose:** Complete architectural design manual, UI/UX system, kinetic typography guide, and component blueprint for extending or creating new pages within the SPYIT ecosystem.

---

## Table of Contents

1. [Executive Summary & Brand Philosophy](#1-executive-summary--brand-philosophy)
2. [Design Tokens & Brand Foundations](#2-design-tokens--brand-foundations)
   - [2.1 Color Matrix & Flavor Themes](#21-color-matrix--flavor-themes)
   - [2.2 Typography Hierarchy & Font Scales](#22-typography-hierarchy--font-scales)
   - [2.3 Iconography & Visual Assets](#23-iconography--visual-assets)
   - [2.4 Elevation, Shadows & Glassmorphism](#24-elevation-shadows--glassmorphism)
   - [2.5 Geometry, Radius & Wavy Contours](#25-geometry-radius--wavy-contours)
3. [Motion, Physics & Animation System](#3-motion-physics--animation-system)
   - [3.1 Easing Curves & Timing Standards](#31-easing-curves--timing-standards)
   - [3.2 Kinetic Wave Typography](#32-kinetic-wave-typography)
   - [3.3 Parallax Fruit Slices & Floating Physics](#33-parallax-fruit-slices--floating-physics)
   - [3.4 Dynamic Hover & State Transitions](#34-dynamic-hover--state-transitions)
4. [Layout & Grid Architecture](#4-layout--grid-architecture)
   - [4.1 Breakpoints & Viewport Constraints](#41-breakpoints--viewport-constraints)
   - [4.2 Spacing & Padding Math](#42-spacing--padding-math)
5. [Component Architecture & Section Blueprints](#5-component-architecture--section-blueprints)
   - [5.1 Navigation Header (`Header.tsx`)](#51-navigation-header)
   - [5.2 Hero Carousel Stage (`HeroSlider.tsx`)](#52-hero-carousel-stage)
   - [5.3 Chillout Infinite Can Track (`ChilloutSection.tsx`)](#53-chillout-infinite-can-track)
   - [5.4 Flavors Showcase Grid (`FlavoursGrid.tsx`)](#54-flavors-showcase-grid)
   - [5.5 Video Commercial & Nutrition Capsule (`VideoShowcase.tsx`)](#55-video-commercial--nutrition-capsule)
   - [5.6 Wavy Kinetic Marquee (`WavyMarquee.tsx`)](#56-wavy-kinetic-marquee)
   - [5.7 Vitality Ingredients Breakdown (`IngredientsSection.tsx`)](#57-vitality-ingredients-breakdown)
   - [5.8 Secret Behind Every Sip Stage (`SecretSection.tsx`)](#58-secret-behind-every-sip-stage)
   - [5.9 Testimonials Section (`TestimonialsSection.tsx`)](#59-testimonials-section)
   - [5.10 Categorized FAQ Accordion (`FAQSection.tsx`)](#510-categorized-faq-accordion)
   - [5.11 Double-Wave Animated Footer (`FooterSection.tsx`)](#511-double-wave-animated-footer)
   - [5.12 Order & Quick Dispatch Modal (`OrderModal.tsx`)](#512-order--quick-dispatch-modal)
6. [Data Schema & State Management](#6-data-schema--state-management)
7. [Step-by-Step Blueprint for Designing New Pages](#7-step-by-step-blueprint-for-designing-new-pages)
8. [Anti-Patterns & Quality Standards](#8-anti-patterns--quality-standards)

---

## 1. Executive Summary & Brand Philosophy

**SPYIT** is an organic, high-vitality dynamic fruit soda brand crafted for modern, active lifestyles. The web design architecture bridges **bold visual dynamism**, **tactile physics**, and **organic liquid vibrancy**.

### Core Pillars
- **Immersion Through Chromatic Adaptation:** The website adapts its ambient palette dynamically based on the active flavor (Sun Orange, Electric Kiwi, Wild Strawberry, Royal Grape).
- **Tactile Micro-Interactions:** Buttons feature vertical text roll-overs, hover states trigger clean spatial image transformations without visual noise or overlapping ghost artifacts, and floating elements respond with organic float physics.
- **Wave & Liquid Geometry:** Clean, custom SVG curves, wavy character animations, rising carbonation bubbles, and double-wave footer paths replace standard rigid box containers.
- **High-Contrast Readability:** Deep slate text on bright, high-vitality cards and clean white surfaces passes WCAG AA contrast standards.

---

## 2. Design Tokens & Brand Foundations

### 2.1 Color Matrix & Flavor Themes

The visual system revolves around 4 core flavor themes and a clean neutral foundation:

| Flavor / Entity | Background Base (`bgColor`) | Card Accent (`cardBgColor`) | Vibrant Accent (`accentColor`) | Title Text Color | Characteristic Note |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Sun Orange** | `#E35205` / `#EA580C` | `#E35205` | `#FF8A00` | `#E35205` | High citrus punch, energetic, radiant warm hue |
| **Electric Kiwi** | `#5F9E17` / `#65A30D` | `#5F9E17` | `#A3E635` | `#5F9E17` | Zesty, supercharged green, fresh vitality |
| **Wild Strawberry** | `#CE1141` / `#E11D48` | `#CE1141` | `#FB7185` | `#CE1141` | Sweet berry rush, rich crimson, punchy contrast |
| **Royal Grape** | `#6B2D8C` / `#7E22CE` | `#6B2D8C` | `#C084FC` | `#6B2D8C` | Deep royal purple, smooth velvet finish |

#### Neutral & Base Foundation Palette
- **Canvas White:** `#FFFFFF`
- **Off-White Container Fill:** `#F8FAFC` / `#F1F5F9`
- **Body Dark Slate:** `#18181B` / `#0F172A`
- **Secondary Slate:** `#475569` / `#64748B`
- **Glass Tint Light:** `rgba(255, 255, 255, 0.15)` to `rgba(255, 255, 255, 0.95)`
- **Glass Tint Dark:** `rgba(0, 0, 0, 0.20)` to `rgba(0, 0, 0, 0.60)`
- **Border Glass:** `rgba(255, 255, 255, 0.25)`

---

### 2.2 Typography Hierarchy & Font Scales

SPYIT pairs bold, athletic grotesque display typography with clean geometric sans-serif body type:

```
Headings & Display Typography
├── 'Cabinet Grotesk' (Weights: 700, 800, 900) ── Primary Brand & Display Headings
├── 'Anton' & 'Bebas Neue' ────────────────────── Background Watermarks & Numeric Badges
├── 'Fredoka One' ─────────────────────────────── Playful Micro-Callouts
└── 'Satisfy' / 'Alex Brush' ──────────────────── Editorial Cursive Accents & Signatures

Body & Interface Typography
└── 'Cabinet Grotesk' / 'Inter' / 'DM Sans' ───── Baseline Readability (Weights: 400, 500, 600)
```

#### Typographic Scale Guidelines
- **Hero Title Watermark:** `clamp(80px, 14vw, 240px)`, Font: `Cabinet Grotesk` or `Anton`, Tracking: `-0.04em`, Leading: `0.9`
- **Section Super Headings (H2):** `clamp(32px, 4.5vw, 64px)`, Font: `Cabinet Grotesk 900`, Tracking: `-0.03em`, Leading: `1.05`
- **Feature Card Headings (H3):** `clamp(22px, 2.5vw, 32px)`, Font: `Cabinet Grotesk 800`, Leading: `1.15`
- **Body Copy:** `16px`–`18px`, Line Height: `1.6`, Tracking: `normal`, Color: `#475569` (light mode) or `#FFFFFF/80` (dark mode)
- **Tag & Badge Labels:** `11px`–`13px`, Uppercase, Weight: `700`, Tracking: `0.08em`, `whitespace: nowrap`

---

### 2.3 Iconography & Visual Assets

- **Icon Family:** `lucide-react` (Stroke width: `2.0`–`2.5px`).
- **Standard Action Icons:**
  - `ChevronLeft` / `ChevronRight` (Flavor navigation arrows, carousel controls)
  - `Sparkles` (Organic vitality indicators, blend tags)
  - `ShoppingBag` / `ArrowRight` (Order dispatch, CTA actions)
  - `Check` / `CheckCircle2` (Ingredient & nutritional callouts)
  - `Play` (Video modal triggering)
- **3D Render Assets (`/public/images/`):**
  - **Can Graphics:** Orthographic and perspective front-view cans (`orange_can.png`, `kiwi_can.png`, etc.).
  - **Floating Fruit Slices:** Transparent PNG fruit elements (`orange_1.png` through `orange_5.png`, `kiwi_1.png`... etc.).
  - **Ice Cubes:** High-refraction floating ice assets (`ice_cube.png`).
  - **Specialty Ingredients Mockup:** Flat-lay ingredient breakdowns (`ingre_orange.png`).

---

### 2.4 Elevation, Shadows & Glassmorphism

| Elevation Level | CSS Box Shadow Formula | Usage Target |
| :--- | :--- | :--- |
| **Subtle Glass** | `0 4px 20px rgba(0,0,0,0.06), inset 0 1px 1px rgba(255,255,255,0.4)` | Header nav, filter pill buttons |
| **Card Floating** | `0 15px 35px rgba(0,0,0,0.08), 0 5px 15px rgba(0,0,0,0.04)` | Testimonial cards, FAQ capsules |
| **Product 3D Can Drop** | `0 25px 50px rgba(0,0,0,0.35)` | Hero can, FlavoursGrid hover can |
| **Active Glow Button** | `0 12px 30px [FLAVOR_ACCENT_COLOR]40` | Interactive navigation buttons, CTA buttons |

---

### 2.5 Geometry, Radius & Wavy Contours

- **Standard Card Corner Radius:** `24px` to `32px` (`rounded-3xl` / `rounded-[28px]`).
- **Inner Nested Radius Formula:** `R_inner = R_outer - Padding`.
- **Pill & Button Radius:** `9999px` (`rounded-full`).
- **Wave Curves:** Custom SVG paths with cubic bezier waves used on section dividers and card tops to evoke liquid fluid motion.

---

## 3. Motion, Physics & Animation System

### 3.1 Easing Curves & Timing Standards

```css
/* Standard Fluid Easing Curve */
--ease-fluid: cubic-bezier(0.16, 1, 0.3, 1);
--ease-bounce: cubic-bezier(0.34, 1.56, 0.64, 1);
```

- **Flavor Shift Transitions:** `1000ms cubic-bezier(0.16, 1, 0.3, 1)` for background and text transitions.
- **Button Micro-Interactions:** `300ms ease` with `scale(1.05)` on hover, `scale(0.95)` on active press.
- **Header Roll-Over Nav:** `450ms ease-in-out` dual-layer translate Y roll.

---

### 3.2 Kinetic Wave Typography

Used in `WavyMarquee.tsx` for brand expression:
- Every character is wrapped in `.wave-char` with individual animation delays based on string index (`animationDelay: ${index * 0.08}s`).
- **Wave Keyframe:**
```css
@keyframes seaWave {
  0%, 100% { transform: translateY(34px) rotate(-8deg); }
  50% { transform: translateY(-34px) rotate(8deg); }
}
```

---

### 3.3 Parallax Fruit Slices & Floating Physics

Floating fruit pieces in the hero section are scattered with 5 key viewport positions:
- **Slice 1 (Top Right):** Top 10%, Right 10%, slight rotation.
- **Slice 2 (Bottom Left):** Bottom 18%, Left 4%, subtle drop shadow.
- **Slice 3 (Bottom Center):** Bottom 4%, Left 30%, in front of can depth layer.
- **Slice 4 (Left Mid):** Left 6%, Bottom 22%.
- **Slice 5 (Top Left):** Left 10%, Top 12%.

---

### 3.4 Dynamic Hover & State Transitions

#### Clean Image Replacement Standard (FlavoursGrid)
To eliminate ghosting or overlapping images during hover:
1. The **base front-facing can** has an animated exit:
   - Default: `opacity: 1`, `transform: translateY(0) scale(1)`
   - Hovered: `opacity: 0`, `transform: translateY(30px) scale(0.95)`, `pointerEvents: 'none'`
2. The **hover fruit-splash backdrop** has an animated entrance:
   - Default: `opacity: 0`, `transform: scale(0.92) translateY(24px)`, `visibility: 'hidden'`
   - Hovered: `opacity: 1`, `transform: scale(1.04) translateY(0)`, `visibility: 'visible'`
3. Timing: `500ms ease-out` on both layers simultaneously.

---

## 4. Layout & Grid Architecture

### 4.1 Breakpoints & Viewport Constraints

| Breakpoint Tag | Pixel Range | Primary Layout Rule |
| :--- | :--- | :--- |
| **Mobile (`sm`)** | `< 640px` | 1-Column vertical flow, collapsible navigation drawer, touch targets ≥ 48px |
| **Tablet (`md`)** | `640px – 1023px` | 2-Column grids, compact floating cards, optimized can heights |
| **Desktop (`lg`)** | `1024px – 1279px` | 3-Column and 12-Column grid layouts, full hover transitions |
| **Wide Desktop (`xl` / `2xl`)** | `1280px+` | Max container width constraint (`max-w-[1600px]`), expansive negative space |

---

### 4.2 Spacing & Padding Math

- **Section Vertical Rhythm:** `py-20` sm: `py-28` lg: `py-36`.
- **Container Horizontal Gutters:** `px-4` sm: `px-8` lg: `px-12`.
- **Button Padding Ratio:** Horizontal padding = `2x` Vertical padding (e.g., `py-3.5 px-7`).

---

## 5. Component Architecture & Section Blueprints

```
SPYIT Page Component Hierarchy
├── Header (`src/components/Header.tsx`)
├── Main Content Wrapper (`<main>`)
│   ├── 1. HeroSlider (`src/components/HeroSlider.tsx`)
│   ├── 2. ChilloutSection (`src/components/ChilloutSection.tsx`)
│   ├── 3. FlavoursGrid (`src/components/FlavoursGrid.tsx`)
│   ├── 4. VideoShowcase (`src/components/VideoShowcase.tsx`)
│   ├── 5. WavyMarquee (`src/components/WavyMarquee.tsx`)
│   ├── 6. IngredientsSection (`src/components/IngredientsSection.tsx`)
│   ├── 7. SecretSection (`src/components/SecretSection.tsx`)
│   ├── 8. TestimonialsSection (`src/components/TestimonialsSection.tsx`)
│   ├── 9. FAQSection (`src/components/FAQSection.tsx`)
│   └── 10. FooterSection (`src/components/FooterSection.tsx`)
└── Overlay Modals
    └── OrderModal (`src/components/OrderModal.tsx`)
```

---

### 5.1 Navigation Header (`Header.tsx`)
- **Structure:** Sticky or fixed transparent header over hero with dynamic scroll detection (`isScrolled ? bg-white/80 shadow-md text-slate-900 : bg-transparent text-white`).
- **Features:** Logo brand mark, text-roll hover navigation links, "Call for Orders" direct CTA button, and mobile hamburger menu trigger with smooth slide-in drawer.

---

### 5.2 Hero Carousel Stage (`HeroSlider.tsx`)
- **Structure:** 100vh full-bleed viewport container with smooth flavor background transition.
- **Dynamic Elements:**
  - Background huge brand watermark (`SPYIT` / flavor name in `Cabinet Grotesk` or `Anton`).
  - Central 3D can with floating animation.
  - 5 floating fruit slice layers animated with entry/exit transforms.
  - Floating bottom spec card (Sugar, Calories, Volume, Caffeine).
  - Left & Right chevron navigation controls and pagination dots.

---

### 5.3 Chillout Infinite Can Track (`ChilloutSection.tsx`)
- **Structure:** Seamless horizontal loop track (`loopSlider 18s linear infinite`) displaying horizontal floating cans nestled between realistic ice cubes.
- **Interaction:** Hovering pauses animation (`animation-play-state: paused`) and expands the hovered can (`scale(1.08)`). Clicking any can immediately triggers flavor selection and opens the quick checkout modal.

---

### 5.4 Flavors Showcase Grid (`FlavoursGrid.tsx`)
- **Structure:** 4 high-contrast cards in a 4-column responsive grid (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`).
- **Features:**
  - Distinct flavor card background colors (`#E35205`, `#5F9E17`, `#CE1141`, `#6B2D8C`).
  - Top SVG wave divider.
  - Clean hover image swap (Bottom front can fades out smoothly -> Fruit splash art appears).
  - Rising carbonation bubble particles with staggered delays.
  - "Order Can" CTA button with hover expansion.

---

### 5.5 Video Commercial & Nutrition Capsule (`VideoShowcase.tsx`)
- **Structure:** High-energy video preview card with animated play button, dynamic nutrition badges, and interactive video modal popup.

---

### 5.6 Wavy Kinetic Marquee (`WavyMarquee.tsx`)
- **Structure:** Full-width bold text marquee with letter-by-letter sine wave deformation.
- **Styling:** Electric Royal Blue text (`#1A1AEE`), bold italic grotesque font, seamless multi-copy infinite loop.

---

### 5.7 Vitality Ingredients Breakdown (`IngredientsSection.tsx`)
- **Structure:** 3-Column layout (Left 2 callouts, Center Can with interactive flanking navigation arrows, Right 2 callouts).
- **Navigation Controls:**
  - Top flavor pill selectors.
  - Direct left and right circular arrow buttons flanking the central can for instant flavor cycling.
- **Nutritional Spec Grid:** Live reactive macro specs (Calories, Fruit Juice %, Sugar, Natural Caffeine).

---

### 5.8 Secret Behind Every Sip Stage (`SecretSection.tsx`)
- **Structure:** 12-Column grid featuring interactive flavor story on the left and 3D can showcase on the right.
- **Navigation Design:** Dynamic left and right arrow buttons placed at the top of the details card, alongside the blend title badge, featuring live tooltip previews of upcoming flavors.

---

### 5.9 Testimonials Section (`TestimonialsSection.tsx`)
- **Structure:** Wavy scalloped card cards with 5-star ratings, authentic review quotes, and flavor badge associations.

---

### 5.10 Categorized FAQ Accordion (`FAQSection.tsx`)
- **Structure:** Category filter tabs (All, Nutrition & Ingredients, Shipping & Orders, Sustainability) paired with clean smooth-expanding accordion items.

---

### 5.11 Double-Wave Animated Footer (`FooterSection.tsx`)
- **Structure:** Multi-layer animated wave SVG background (`animate-wave-front` and `animate-wave-back`), massive stroke outline watermark, newsletter subscription box, and social links.

---

### 5.12 Order & Quick Dispatch Modal (`OrderModal.tsx`)
- **Structure:** Chilled dispatch dialog allowing instant package size selection (6-Pack, 12-Pack, 24-Case), flavor switcher, price calculator, and mock checkout submission with receipt feedback.

---

## 6. Data Schema & State Management

All dynamic flavor data, specs, ingredients, and FAQs are centrally defined in `src/data.ts` using strict TypeScript interfaces (`src/types.ts`):

```typescript
export interface FlavorData {
  id: string;                    // e.g. 'orange', 'kiwi', 'strawberry', 'grapes'
  name: string;                  // e.g. 'Orange', 'Kiwi', 'Strawberry', 'Grapes'
  subName: string;               // e.g. 'Sun-Kissed Orange'
  tagline: string;               // e.g. 'Zero Sugar • Full Pulp Explosion'
  bgColor: string;               // Hero/Section background HEX
  textColor: string;             // Contrast text color
  accentColor: string;           // Highlight accent color
  titleColor: string;            // Headline text color
  cardBgColor: string;           // Card background color
  canImage: string;              // High-res main can / splash image
  frontImage?: string;           // Bottom-cropped front can
  slices: {                      // 5 Floating fruit slice items
    src: string;
    alt: string;
    className: string;
    divStyle?: CSSProperties;
    imgStyle?: CSSProperties;
  }[];
  description: string;
  tags: string[];
  specs: {
    sugar: string;
    calories: string;
    volume: string;
    caffeine: string;
  };
  secretItems: string[];
}
```

### Global App State (`App.tsx`)
- `activeFlavorIndex` (number: `0`–`3`): Controls active flavor across Hero, Navigation, and Order Modals.
- `isOrderModalOpen` (boolean): Visibility of the dispatch modal.
- `orderModalFlavorId` (string): Selected flavor for direct checkout dispatch.

---

## 7. Step-by-Step Blueprint for Designing New Pages

When designing a new page (e.g., Campaign Landing Page, Product Detail Page, or Sustainability Page), follow these steps to maintain 100% brand fidelity:

### Step 1: Establish Page Header & Theme Sync
1. Import `Header` and `FooterSection`.
2. Connect `onOpenOrder` handler to maintain universal order modal access.

### Step 2: Structure Hero / Section Header
1. Use `Cabinet Grotesk` with `font-black` (Weight 900) for all main headers.
2. Incorporate large, subtle background watermark text (`font-anton` or `font-cabinet` with low opacity or `-webkit-text-stroke`).
3. Add a floating badge pill above the title using `Sparkles` icon and uppercase tracking.

### Step 3: Implement Cards & Content Containers
1. Apply minimum corner radius `rounded-2xl` or `rounded-3xl` (`16px`–`28px`).
2. Add subtle glassmorphism borders (`border border-white/20` on colored backgrounds, or `border border-slate-200/80` on white backgrounds).
3. If using interactive cards, ensure image hover states use **clean replacement** (fading out base graphic before revealing hover art) rather than stacking both.

### Step 4: Add Kinetic Flavor Controls
1. When presenting multiple flavors, provide both **pill tabs** and **circular navigation arrows** (`ChevronLeft` / `ChevronRight`).
2. Always style interactive buttons with hover glow matching the active flavor's accent color (`boxShadow: 0 12px 30px [accentColor]40`).

---

## 8. Anti-Patterns & Quality Standards

- ❌ **No Clashing Gradients:** Do not use arbitrary purple-to-blue gradients or neon cyan. Stick strictly to the 4 defined flavor color hex codes.
- ❌ **No Overlapping Ghost Images:** Never display both default and hover graphics simultaneously; ensure base assets fade out cleanly.
- ❌ **No Monotonous Rigid Grids:** Always break rectilinear layouts with organic SVG waves, floating fruit particles, or kinetic text.
- ❌ **No Silent Click Handlers:** Every CTA button must connect to a functional handler (e.g. opening the order modal, scrolling to target section, or changing active flavor).
- ❌ **No Wrapped Single-Line Badges:** Ensure all tags, pills, and button labels have `whitespace-nowrap` to prevent awkward word breaks.

---

*This document serves as the authoritative design system for all future page generation, UI component expansion, and brand consistency across the SPYIT digital platform.*
