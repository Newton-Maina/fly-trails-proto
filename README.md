# Fly Trails Travels

A premium, interactive web prototype for a bespoke African Safari travel agency.

**Status:** Functional UI Prototype

## Overview

Fly Trails Travels is a high-end travel experience platform designed to showcase authentic African journeys. This prototype focuses on sophisticated user interactions, fluid animations, and a modern "editorial" aesthetic.

## Architecture & Logic

This prototype employs several advanced frontend techniques to achieve its premium feel:

### 1. Sophisticated Animation Engine
Instead of standard transitions, the project uses a custom-built animation system:
- **Intersection Observer:** A robust observer in `App.tsx` monitors scroll position and triggers specific animation classes (`reveal-zoom`, `reveal-left`, `reveal-right`, `reveal-up`) with custom cubic-bezier timing functions for a "snappy" yet elegant entrance.
- **Staggered Motion:** Grid elements and lists use calculated delays to enter the viewport sequentially, creating a choreographed visual flow.

### 2. "Card-Deck" Section Stacking
The layout uses a unique stacking logic:
- Sections are designed with large border-radii (`rounded-t-[5rem]`) and negative margins (`section-overlap`).
- By managing ascending z-indices, each new section appears to slide "on top" of the previous one like a deck of cards, creating depth without traditional parallax.

### 3. Dynamic Background Layers
- **Fixed Cinematic Layers:** The Hero and Reviews sections utilize `background-attachment: fixed` logic to keep high-resolution imagery stationary while content slides over it.
- **Parallax Elements:** Decorative blobs and geometric SVGs use a custom scroll listener to move at different speeds relative to the user's scroll, adding a sense of three-dimensional space.

### 4. Interactive Components
- **Curved Navigation:** The header features a custom SVG background that creates a seamless "cutout" effect against the Hero section, transitioning into a sticky state on scroll.
- **Responsive Navigation:** A dedicated mobile navigation system that shifts from the desktop SVG curve to a minimal, editorial white-space menu with social integration.
- **3D Perspective:** The Africa map in the Reviews section uses 3D transforms (`rotateX`, `rotateY`) to create a slanted, modern look.

## Getting Started

### Prerequisites
- Node.js (v18 or higher)

### Installation
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```

## Design Notes
The project utilizes a palette of Deep Blue (`#0c3154`), Vibrant Orange (`#f29100`), and Crimson (`#e11d48`) set against clean, spacious white and cream backgrounds to evoke a sense of premium adventure.