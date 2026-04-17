# Static Sites Vite Starter 🚀

A professional, modular starter kit for building high-performance static websites. This boilerplate is designed to automate routine tasks, optimize assets, and keep your project architecture clean.

## ✨ Key Features

- **Modular HTML**: Organize your code using HTML partials for a component-based workflow.
- **Modern CSS**: Pre-configured **SCSS** structure with a clean reset system and variable-driven design.
- **Smart Asset Pipeline**:
  - **Images**: Automated conversion of `jpg/png` to **WebP** via Sharp.
  - **Fonts**: Automated conversion of `ttf` to **Woff2** (or direct copying of existing woff2).
  - **Recursive Search**: Handles nested folders within your source directories.
- **Icon Management**: Dual-system for icons — **SVG Sprites** for efficiency and a dedicated folder for **Inline SVG**.
- **Performance First**: Optimized for speed and high Lighthouse scores right out of the box.
- **Clean Git History**: Pre-configured `.gitignore` and `.gitkeep` files to maintain project structure without bloat.


🛠 Pre-configured Modules
The starter comes with several pre-built JavaScript modules to speed up development:

1. Lazy SVG Loader
Path: src/js/modules/lazySvgLoader.js

An efficient engine for inlining SVG icons without polluting the HTML source or duplicating IDs.

Library File: src/html/inline-icons/inline-icons-templates.html (contains all SVG <template> blocks).

Usage: Add data-svg-receiver and data-svg-id="template-id" to any element.

2. Advanced Burger Menu
Path: src/js/main.js (initBurger)

A robust, accessible navigation logic for mobile devices.

Features: Body scroll locking, ESC key support, and backdrop interaction.

Styles: Fully responsive implementation in src/scss/components/_burger.scss.

3. Reusable Modal System
A flexible, trigger-based system for handling popups and overlays.

Logic: Supports multiple modal windows with unique content templates.

Accessibility: Focus trapping and backdrop interactions are handled out of the box.

4. Theme Management System
A lightweight, persistent theme switcher (Dark/Light mode).

Persistence: Saves preference to localStorage.

System Sync: Automatically respects the user's OS color scheme.

Implementation: Toggles a global .dark-theme class on the <html> element.

## 📁 Project Structure

To use the automated asset pipeline, follow this folder structure:

- `src/assets/img/raw/` — Put your source images here (supports subfolders). They will be converted to `src/assets/img/webp/`.
- `src/assets/fonts/raw/` — Put your `.ttf` or `.woff2` fonts here. They will be processed into `src/assets/fonts/woff2/`.
- `src/assets/icons/` — SVG files placed here are automatically combined into an **SVG Sprite**.
- `src/html/inline-icons/` — Place SVGs here if you intend to inject them directly into your HTML code.
- `src/html/inline-icons/inline-icons-templates.html` — file with SVG templates. Injected into index.html with <load>

## 📁 SCSS Structure

- **tools/** — Variables, mixins, and functions (no rendered CSS).
- **base/** — Reset, typography, and global element styles.
- **components/** — Reusable UI elements (buttons, burger, logo).
- **layouts/** — Page shell (header, footer, container).
- **sections/** — Page-specific content blocks (hero, services).

## 🛠 Installation & Usage

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/andrewdreamer13/static-sites-vite-starter.git
    ```

2.  **Reset Git History** (for a new project):

    ```bash
    rm -rf .git
    git init
    ```

3.  **Install dependencies:**

    ```bash
    npm install
    ```

4.  **Configure `package.json`**: Update the `"name"` field with your project title.

5.  **Start Development Server**:
    ```bash
    npm run dev
    ```
    _This command runs the asset helper and starts the Vite dev server._

## 📦 Production Commands

- `npm run build` — Cleans output folders, processes all assets, and bundles the project into the `dist` folder with high-level compression.
- `npm run preview` — Locally previews the production build.
