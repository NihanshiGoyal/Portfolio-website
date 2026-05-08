# Implementation Plan - David Heckhoff Portfolio Clone

## 1. Overview
Build a high-performance, minimalist portfolio clone inspired by `next.david-hckh.com`. The application features cinematic scrollytelling using canvas-based image sequences, smooth scrolling with Lenis, and premium typography.

## 2. Technology Stack
- **Framework:** React 18+ (Vite)
- **Animation:** Framer Motion (`motion/react`)
- **Smooth Scroll:** Lenis
- **Styling:** Tailwind CSS
- **Icons:** Lucide React

## 3. Visual & UX Direction
- **Aesthetic:** Minimalist Corporate Luxury
- **Palette:**
  - Background: `#F5F1EA` (Primary), `#ECE7DE` (Secondary)
  - Text: `#1F1F1F` (High contrast)
  - Accent: `#FF8A00` (Orange), `#243B7A` (Navy Blue)
- **Typography:** Inter (Sans-serif) with wide letter-spacing (`tracking-wider`).

## 4. Components Architecture

### 4.1 `SmoothScroll.tsx` (Provider)
- Initializes Lenis for global smooth scrolling.
- Updates scroll animations on frame changes.

### 4.2 `HeroScroll.tsx` (Scrollytelling)
- Canvas-based rendering.
- Sticky container (~400vh scroll height).
- Logic:
  - Preload images from `/public/sequence-1/*.webp`.
  - Use `useScroll` from Framer Motion to map scroll progress to frame index.
  - Draw current frame to canvas using `drawImage`.

### 4.3 `PlaneMorph.tsx` (Secondary Sequence)
- Similar logic to HeroScroll but using `/public/sequence-2/`.
- Higher interaction threshold.

### 4.4 `Globe.tsx` (Footer)
- High-quality video loop of a globe.
- Full-bleed background with content overlay.

### 4.5 `NavBar.tsx` & `Layout.tsx`
- Minimalist nav with blur effects.
- Page transition wrappers.

## 5. Performance Optimizations
- **`useImagePreloader` Hook:**
  - Pre-fetches all frames before displaying the canvas.
  - Shows a progress-based loading screen.
- **Canvas Throttling:**
  - Ensure `requestAnimationFrame` is used for drawing.
  - Optimize `drawImage` calls for high-DPI displays.

## 6. Content Plan
- Professional, creative technologist copy focusing on WebGL, Three.js, and high-performance frontend.

## 7. Implementation Steps
1. Initial environment setup & assets structure.
2. Build UI Components (Nav, Footer).
3. Implement `useImagePreloader`.
4. Build `HeroScroll` canvas engine.
5. Implement smooth scrolling with Lenis.
6. Refine animations and polish.
