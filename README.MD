
# Static Sites Vite Starter 🚀

> A professional, modular starter kit for building high-performance static websites with Vite, automated asset optimization, reusable UI modules, and a scalable project architecture.

---

# ✨ Features

- ⚡ **Vite 7+** with fast HMR and optimized production builds.
- 🧩 **Component-based HTML** using `vite-plugin-html-inject`.
- 🎨 **Modern SCSS architecture** with PostCSS and Autoprefixer.
- 🖼 **Automatic image preparation and optimization**
  - Converts `.jpg`, `.jpeg`, `.png`, and `.webp` images into WebP during prebuild.
  - Preserves original source files.
  - Optimizes supported image formats during production builds.
- 🔤 **Automatic font conversion**
  - Converts `.ttf` to `.woff2`.
  - Supports nested folders.
  - Copies existing WOFF2 files.
- 🎯 **SVG Sprite generation** from project icons.
- 📦 **Lazy Inline SVG system** for loading SVG templates on demand.
- 🌙 **FOUC-free dark/light theme switcher** with system theme detection and localStorage persistence.
- ♿ Accessibility helpers
  - Focus management and trapping.
  - Body scroll locking.
  - Keyboard navigation.
  - ARIA support.
- 🗺 **Lazy-loaded maps** supporting Mapbox GL JS and iframe-based maps.
- 🎬 **Lazy-loaded video content** with Plyr integration.
- 🔍 **SEO automation**
  - Dynamic page metadata and canonical URLs.
  - Automatic `sitemap.xml` generation.
  - Automatic `robots.txt` generation.
- 📦 **Client-ready ZIP packaging** for production websites.
- 🚀 GitHub Pages deployment with automatically configured repository paths.

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

- Body scroll locking.
- Focus management.
- Escape closing.
- Backdrop closing.

---

### Modal

Reusable modal system featuring:

- Data attribute triggers.
- Centralized focus management.
- Escape support.
- Backdrop click closing.

---

### Custom Select

Accessible dropdown component supporting:

- Keyboard navigation.
- Single-open mode.
- Dynamic options.

---

### Tabs

Accessible tabs with automatic ARIA attributes.

---

### Accordion

Reusable expandable content panels.

---

### Sliders

Ready-to-use Swiper integration with responsive slider support.

---

### Maps

Supports:

- Mapbox GL JS.
- iframe-based maps.
- Lazy loading.

---

### Cookie Banner

Cookie consent interface with reusable markup and JavaScript initialization.

---

### Forms

Form handling with validation, phone masks, and reusable success modal integration.

---

### Date Picker

Customizable date selection powered by Flatpickr.

---

### Video Player

Video loading and playback support with Plyr and embedded video content.

---

### Preloader

Automatically hides after page load.

---

### Scroll To Top Button

Smooth scrolling back to the top.

---

### Theme Switcher

Supports:

- System theme detection.
- localStorage persistence.
- Zero flash on load.

---

# 📦 Tech Stack

## Core

- Vite 7+
- JavaScript (ES Modules)
- Sass (SCSS)
- PostCSS
- Autoprefixer

## Libraries

- GSAP
- Swiper
- Mapbox GL JS
- Plyr
- Flatpickr

## Build Tools

- Sharp
- ttf2woff2
- vite-plugin-imagemin
- vite-plugin-svg-icons
- vite-plugin-html-inject
- vite-plugin-minify
- vite-plugin-zip-pack
- gh-pages

---

# 📁 Project Structure

```text
.
├── public/
│   ├── assets/
│   └── favicon.png
├── prebuild.js
├── vite.config.js
├── package.json
├── index.html
├── 404.html
├── src/
│   ├── assets/
│   │   ├── fonts/
│   │   │   ├── raw/
│   │   │   └── woff2/
│   │   ├── img/
│   │   │   ├── raw/
│   │   │   └── webp/
│   │   └── icons/
│   ├── html/
│   │   ├── components/
│   │   ├── inline-icons/
│   │   └── sections/
│   ├── js/
│   │   ├── animations/
│   │   ├── components/
│   │   ├── data/
│   │   ├── forms/
│   │   ├── helpers/
│   │   ├── services/
│   │   ├── 404.js
│   │   └── main.js
│   └── scss/
│       ├── tools/
│       ├── base/
│       ├── components/
│       ├── pages/
│       ├── sections/
│       ├── vendors/
│       └── main.scss
```

---

# 🎨 SCSS Structure

| Folder | Purpose |
|---------|---------|
| `tools/` | Variables, mixins, functions and reusable templates |
| `base/` | Reset, typography, global styles and containers |
| `components/` | Reusable UI component styles |
| `pages/` | Page-specific styles |
| `sections/` | Header, footer and page section styles |
| `vendors/` | Third-party library styles and overrides |

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

Update the project name inside `package.json` if needed.

Configure environment variables in `.env` and `.env.client` according to your project requirements.

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

Build a client-ready website with ZIP packaging.

```bash
npm run build:client
```

Preview the production build.

```bash
npm run preview
```

Deploy to GitHub Pages.

```bash
npm run predeploy
npm run deploy
```

---

# ⚙️ npm Scripts

| Command | Description |
|----------|-------------|
| `npm run dev` | Runs prebuild tasks and starts the Vite development server. |
| `npm run build` | Runs prebuild tasks and creates a standard production build. |
| `npm run build:client` | Creates a client production build and generates a ZIP archive. |
| `npm run preview` | Serves the production build locally. |
| `npm run predeploy` | Runs prebuild tasks and builds the project for GitHub Pages. |
| `npm run deploy` | Deploys the existing `dist/` directory to GitHub Pages. |

---

# 📖 Build Documentation

See [BUILD.md](BUILD.md) for detailed information about:

- Project architecture.
- Build scripts and modes.
- Prebuild asset processing.
- Vite configuration.
- HTML assembly.
- Asset optimization.
- SEO file generation.
- Client ZIP packaging.
- GitHub Pages deployment.

---

# 📄 License

Feel free to use this starter for personal and commercial projects.