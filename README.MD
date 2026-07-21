
# Static Sites Vite Starter 🚀

> A professional, modular starter kit for building high-performance static websites with Vite, automated asset optimization, reusable UI modules, and a scalable project architecture.

---

# ✨ Features

- ⚡ **Vite 7+** with fast HMR and optimized production builds.
- 🧩 **Component-based HTML** using `vite-plugin-html-inject`.
- 🎨 **Modern SCSS architecture** with PostCSS and Autoprefixer.
- 🖼 **Automatic image optimization**
  - Converts `.jpg` and `.png` to **WebP**
  - Preserves original files
- 🔤 **Automatic font conversion**
  - Converts `.ttf` to `.woff2`
  - Supports nested folders
- 🎯 **SVG Sprite generation**
- 📦 **Lazy Inline SVG system**
- 🌙 **FOUC-free dark/light theme switcher**
- ♿ Accessibility helpers
  - Focus trapping
  - Body scroll locking
  - Keyboard navigation
  - ARIA support
- 🚀 One-command GitHub Pages deployment.

---

# 🛠 Included Modules

### Lazy SVG Loader

Loads inline SVGs from HTML templates without duplicating markup.

**Usage**

```html
<div
  data-svg-receiver
  data-svg-id="icon-phone">
</div>
```

---

### Burger Menu

Accessible mobile navigation with:

- body scroll locking
- focus trap
- Escape closing
- backdrop closing

---

### Modal

Reusable modal system featuring:

- data attribute triggers
- focus management
- Escape support
- backdrop click closing

---

### Custom Select

Accessible dropdown component supporting:

- keyboard navigation
- single-open mode
- dynamic options

---

### Tabs

Accessible tabs with automatic ARIA attributes.

---

### Sliders

Ready-to-use Swiper integration.

---

### Maps

Supports:

- Mapbox GL JS
- iframe-based maps

---

### Preloader

Automatically hides after page load.

---

### Scroll To Top Button

Smooth scrolling back to the top.

---

### Theme Switcher

Supports:

- system theme
- localStorage persistence
- zero flash on load

---

# 📦 Tech Stack

## Core

- Vite
- JavaScript (ES Modules)
- Sass (SCSS)
- PostCSS
- Autoprefixer

## Libraries

- GSAP
- Swiper
- Mapbox GL JS
- Plyr

---

# 📁 Project Structure

```text
.
├── prebuild.js
├── vite.config.js
├── package.json
└── src
    ├── assets
    │   ├── fonts
    │   │   ├── raw
    │   │   └── woff2
    │   ├── img
    │   │   ├── raw
    │   │   └── webp
    │   └── icons
    ├── html
    │   ├── partials
    │   └── inline-icons
    ├── js
    │   ├── app.js
    │   ├── modules
    │   └── services
    └── scss
        ├── tools
        ├── base
        ├── components
        ├── layouts
        └── sections
```

---

# 🎨 SCSS Structure

| Folder | Purpose |
|---------|---------|
| `tools/` | Variables, mixins and functions |
| `base/` | Reset, typography, root variables |
| `components/` | Reusable UI components |
| `layouts/` | Header, footer and layout styles |
| `sections/` | Page-specific blocks |

---

# 🚀 Installation

Clone the repository.

```bash
git clone https://github.com/andrewdreamer13/static-sites-vite-starter.git
cd static-sites-vite-starter
```

(Optional) Start with a clean Git history.

```bash
rm -rf .git
git init
```

Install dependencies.

```bash
npm install
```

Update the project name inside **package.json**.

---

# 💻 Development

Start the development server.

```bash
npm run dev
```

Build for production.

```bash
npm run build
```

Preview the production build.

```bash
npm run preview
```

Deploy to GitHub Pages.

```bash
npm run deploy
```

---

# ⚙️ npm Scripts

| Command | Description |
|----------|-------------|
| `npm run dev` | Runs prebuild tasks and starts Vite |
| `npm run build` | Creates a production build |
| `npm run preview` | Serves the production build locally |
| `npm run predeploy` | Builds the project for GitHub Pages |
| `npm run deploy` | Deploys `dist/` to GitHub Pages |

---

# 📄 License

Feel free to use this starter for personal and commercial projects.
