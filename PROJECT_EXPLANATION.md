# Project Overview: Personal Portfolio Website

This file provides a comprehensive explanation of the portfolio project to help any developer or AI agent quickly understand its architecture, tech stack, and structure.

## 1. Tech Stack & Dependencies

This is a modern React application set up using Vite.
- **Framework:** React 18
- **Build Tool:** Vite (fast HMR and optimized builds)
- **Styling:** Tailwind CSS (v4) for utility-first styling.
- **Routing:** React Router v7 (`react-router-dom`) for single-page application navigation.
- **Animations:** 
  - GSAP (`gsap` and `@gsap/react`) for complex, timeline-based, and scroll-triggered animations (`ScrollTrigger`).
  - Lenis (`lenis`) for smooth scrolling effects.
- **Icons:** `lucide-react` and `react-icons`.

## 2. Project Structure

The codebase is organized cleanly within the `src` directory:

```text
port-folio/
├── public/                 # Static assets (favicon, etc.)
├── src/
│   ├── assets/             # Images and other media
│   ├── components/         # Reusable UI components
│   │   ├── home/           # Sections specifically for the Home page
│   │   │   ├── Hero.jsx, Marquee.jsx, Services.jsx, LogoLoop.jsx, Projects.jsx, Testimonials.jsx, About.jsx, CTA.jsx
│   │   ├── Footer.jsx
│   │   ├── Loader.jsx      # Initial loading screen component
│   │   ├── Navbar.jsx      # Top navigation bar
│   │   ├── ThemeCustomizer.jsx # UI to change theme settings
│   │   ├── ThemeToggle.jsx     # Dark/Light mode toggle
│   │   └── WhatsAppWidget.jsx  # Floating WhatsApp chat widget
│   ├── context/
│   │   └── AppReadyContext.jsx # Context to broadcast when the initial loader finishes
│   ├── pages/
│   │   └── Home.jsx        # The main landing page assembling all sections
│   ├── routes/
│   │   └── AppRoutes.jsx   # Defines the app routing (mapping / to Home.jsx)
│   ├── App.jsx             # Root component handling layout, loader, and providers
│   ├── App.css             # Global CSS variables or overrides
│   ├── index.css           # Tailwind base, components, and utilities imports
│   └── main.jsx            # React entry point
├── package.json            # Project metadata and dependencies
├── tailwind.config.js      # Tailwind configuration (if any specific themes/colors)
└── vite.config.js          # Vite bundler configuration
```

## 3. Architecture & Data Flow

### The Entry Point (`main.jsx` & `App.jsx`)
- `main.jsx` mounts the `<App />` component wrapped in `StrictMode`.
- `App.jsx` acts as the orchestrator. It manages a startup loading sequence:
  - It shows a `<Loader />` component initially.
  - After 2.5 seconds, the loader starts fading out.
  - At 3.0 seconds, the loader is removed, and the `AppReadyContext` provides a `true` value.
  - This `true` value signals all child components (especially GSAP animations) that they can safely start their entry animations.
  - It also includes global persistent UI elements like `Navbar`, `ThemeCustomizer`, and `WhatsAppWidget`.

### Routing (`AppRoutes.jsx`)
- Extremely simple routing. Both `/` and `/home` paths map to the `Home` page component. 
- It uses `BrowserRouter` which is wrapped around the application in `App.jsx`.

### The Home Page (`Home.jsx`)
- This is a single, scrolling landing page that acts as the core of the portfolio.
- It sequentially mounts multiple section components imported from `src/components/home/`:
  1. **Hero**: The top banner introducing the user.
  2. **Marquee**: A scrolling text or image banner.
  3. **Services**: What the person offers.
  4. **LogoLoop**: Likely an infinite carousel of client or tech logos.
  5. **Projects**: Portfolio work display.
  6. **Testimonials**: Client feedback.
  7. **About**: Personal information.
  8. **CTA**: Call to Action section.
  9. **Footer**: Bottom information and links.
- `Home.jsx` also uses `useGSAP` to refresh `ScrollTrigger` instances, ensuring that dynamic heights or loaded content don't break scroll-based animations.

### Context & State Management
- State management is minimal and local.
- `AppReadyContext` is the only global context, used purely to synchronize the start of animations across the app so they don't fire while the initial loader is still covering the screen.

### Styling & Theming
- The app uses Tailwind CSS heavily for layout and responsive design.
- There is a custom theme implementation evidenced by `ThemeCustomizer.jsx` and `ThemeToggle.jsx`, suggesting the user can switch between dark/light modes and potentially change primary accent colors.

## 4. How to Extend the Project
- **Adding a new section to the home page**: Create a new component in `src/components/home/`, then import and place it in the sequence within `src/pages/Home.jsx`.
- **Adding a new page**: Create a component in `src/pages/`, then add a new `<Route>` in `src/routes/AppRoutes.jsx`.
- **Adjusting Animations**: Locate the specific component (e.g., `Hero.jsx`) and modify the `useGSAP` hook block. GSAP animations are localized to the components they animate.

## 5. Development Commands
- Start dev server: `npm run dev`
- Build for production: `npm run build`
- Run linter: `npm run lint`
- Preview production build: `npm run preview`
