# Build Process & Project Architecture

## 1. Project Overview

This project is a reusable starter template for developing static websites with Vite.

The build system automates asset preparation, HTML assembly, stylesheet processing, image optimization, SVG sprite generation, code minification, SEO file generation, and deployment packaging.

The project supports several workflows:

- Local development with Vite.
- Standard production builds.
- Client-ready website builds with ZIP packaging.
- GitHub Pages deployment for sharing project previews.

## 2. Project Structure

```text
project/
├── public/
│   ├── assets/
│   └── favicon.png
│
├── src/
│   ├── assets/
│   │   ├── fonts/
│   │   │   ├── raw/
│   │   │   └── woff2/
│   │   ├── icons/
│   │   └── img/
│   │       ├── raw/
│   │       └── webp/
│   │
│   ├── html/
│   │   ├── components/
│   │   ├── inline-icons/
│   │   └── sections/
│   │
│   ├── js/
│   │   ├── animations/
│   │   ├── components/
│   │   ├── data/
│   │   ├── forms/
│   │   ├── helpers/
│   │   ├── services/
│   │   ├── 404.js
│   │   └── main.js
│   │
│   └── scss/
│       ├── base/
│       ├── components/
│       ├── pages/
│       ├── sections/
│       ├── tools/
│       ├── vendors/
│       └── main.scss
│
├── .env
├── .env.client
├── .gitignore
├── .prettierrc
├── 404.html
├── index.html
├── package.json
├── prebuild.js
├── vite.config.js
├── README.md
└── BUILD.md
```

### Main directories

| Directory | Purpose |
|---|---|
| `public/` | Static files copied directly into the build output. |
| `src/assets/fonts/raw/` | Original TTF and WOFF2 font files. |
| `src/assets/fonts/woff2/` | Prepared WOFF2 fonts used by the project. |
| `src/assets/icons/` | SVG icons used to generate the SVG sprite. |
| `src/assets/img/raw/` | Original raster images. |
| `src/assets/img/webp/` | Optimized WebP images generated during prebuild. |
| `src/html/components/` | Reusable HTML components and layout partials. |
| `src/html/inline-icons/` | HTML templates containing inline SVG graphics. |
| `src/html/sections/` | Reusable page sections. |
| `src/js/` | JavaScript application modules, services, helpers, and data. |
| `src/scss/` | Global styles, components, page styles, sections, tools, and vendor overrides. |

### Main configuration files

- `package.json` — project dependencies and npm scripts.
- `prebuild.js` — prepares images and fonts before development or production builds.
- `vite.config.js` — configures Vite, build modes, plugins, asset output, and deployment packaging.
- `index.html` — main HTML entry point and homepage template.
- `404.html` — custom error page entry point.
- `.env` — shared environment variables.
- `.env.client` — client production environment variables.
- `.gitignore` — excludes generated files and local dependencies from version control.
- `.prettierrc` — Prettier formatting configuration.

## 3. Build Scripts

The project uses npm scripts to run development, preparation, production builds, and deployment.

| Command | Description |
|---|---|
| `npm run dev` | Runs the prebuild process and starts the Vite development server. |
| `npm run build` | Runs prebuild and creates a standard production build. |
| `npm run build:client` | Runs prebuild and creates a client production build with ZIP packaging. |
| `npm run predeploy` | Runs prebuild and creates a GitHub Pages production build. |
| `npm run deploy` | Publishes the existing `dist` directory to GitHub Pages. |
| `npm run preview` | Starts a local server to preview the production build. |

The `deploy` command does not create a new build. It publishes the contents of the existing `dist` directory. Run `npm run predeploy` before deploying.

## 4. Prebuild Process

The `prebuild.js` script runs before development and production builds.

It prepares images and fonts so the application can use optimized assets.

### Image processing

Source images are stored in:

```text
src/assets/img/raw/
```

The script:

1. Scans source directories for JPG, JPEG, PNG, and WebP files.
2. Converts images into WebP format using Sharp.
3. Saves generated files in `src/assets/img/webp/`.
4. Uses a quality setting of 80.
5. Skips conversion when the source image has not changed.
6. Removes generated images whose corresponding source files no longer exist.

Original images remain unchanged.

### Font processing

Source fonts are stored in:

```text
src/assets/fonts/raw/
```

The script:

1. Converts TTF fonts into WOFF2 format.
2. Copies existing WOFF2 files.
3. Saves the prepared fonts in `src/assets/fonts/woff2/`.
4. Cleans the output directory before processing, preserving `.gitkeep`.

This ensures that the project uses prepared font files without requiring manual conversion.

## 5. Vite Configuration

The `vite.config.js` file controls the build process and adjusts configuration according to the selected mode.

### Build modes

| Mode | Command | Purpose |
|---|---|---|
| Development | `npm run dev` | Local development with the Vite development server. |
| Production | `npm run build` | Standard production build. |
| Client | `npm run build:client` | Production build with a client ZIP archive. |
| GitHub | `npm run predeploy` | Production build configured for GitHub Pages. |

### Base paths

The project uses different asset paths depending on the build mode.

- **Standard production:** uses relative asset paths (`./`).
- **Client:** uses relative asset paths (`./`).
- **GitHub:** uses the repository subpath (`/repository-name/`).

The GitHub repository name is detected automatically from the project folder name. This avoids manually maintaining the repository path in configuration files.

### Website URL

The website URL is used for canonical metadata, social sharing metadata, and sitemap generation.

The configuration selects the URL according to the build mode:

- GitHub builds use the automatically generated GitHub Pages URL.
- Other builds use `VITE_SITE_URL` from the corresponding environment file.
- If no URL is provided, the configuration falls back to `https://your-domain.com/`.

The computed URL is also used to replace the `%VITE_SITE_URL%` placeholder in the HTML entry point before HTML partials are injected.

### Environment variables

| File | Purpose |
|---|---|
| `.env` | Shared environment variables, such as the Mapbox access token. |
| `.env.client` | Client-specific website URL and other client build settings. |

The GitHub URL does not need to be stored manually in a separate environment file because it is generated from the project folder name.

Do not commit private API tokens or other secrets to a public repository.

## 6. HTML Assembly

The project uses `vite-plugin-html-inject` to build pages from reusable HTML partials.

Instead of keeping the entire page in one HTML file, the main entry point loads separate components and sections.

For example:

```html
<load src="/src/html/components/head.html" />
<load src="/src/html/sections/header.html" />
<load src="/src/html/sections/hero.html" />
<load src="/src/html/sections/footer.html" />
```

The actual entry point passes configuration values to the head partial through attributes.

### Dynamic metadata

The `head.html` partial receives:

- Page title.
- Meta description.
- Keywords.
- Website URL.
- Social preview image.
- Browser theme color.

These values are inserted into the appropriate HTML metadata fields during the build.

The website URL is resolved by the Vite configuration, allowing the same HTML template to work across standard production, client, and GitHub builds.

This approach keeps page content modular and avoids duplicating shared layout elements.

## 7. Asset Processing

Vite and its plugins handle the final processing of project assets.

### SCSS and PostCSS

The main stylesheet is:

```text
src/scss/main.scss
```

It imports the project's SCSS modules.

PostCSS applies:

- Autoprefixer for browser compatibility.
- Media query sorting for optimized stylesheet organization.

### Image optimization

During production builds, `vite-plugin-imagemin` optimizes supported image formats, including raster images and SVG files.

This process is separate from the prebuild WebP conversion.

### SVG sprite

`vite-plugin-svg-icons` generates an SVG sprite from files stored in:

```text
src/assets/icons/
```

The generated sprite is registered through the virtual module:

```js
import "virtual:svg-icons-register";
```

### Minification

`vite-plugin-minify` processes the final HTML, CSS, and JavaScript output.

It removes unnecessary whitespace and comments and minifies the generated code.

### Output organization

Compiled assets are grouped into dedicated directories inside `dist/`.

```text
dist/
├── assets/
│   ├── css/
│   ├── fonts/
│   ├── img/
│   └── js/
├── index.html
├── 404.html
├── sitemap.xml
└── robots.txt
```

Generated asset filenames include hashes to support cache invalidation when files change.

## 8. SEO File Generation

The Vite configuration automatically generates two SEO-related files after the build.

### sitemap.xml

The sitemap generator:

1. Scans the `dist` directory recursively for HTML pages.
2. Converts file paths into website URLs.
3. Excludes the 404 page.
4. Uses the website URL selected for the current build mode.
5. Assigns page priorities.
6. Writes `sitemap.xml` to the build output directory.

The homepage receives a priority of `1.0`; other pages receive `0.8`.

### robots.txt

The same build process generates `robots.txt` using the selected website URL.

The generated file contains:

```text
User-agent: *
Allow: /

Sitemap: https://your-domain.com/sitemap.xml
```

The sitemap address is adjusted automatically for the selected build mode.

Both files are generated inside `dist/`. No manual URL replacement is required.

## 9. Client ZIP Packaging

The client build creates a ZIP archive containing the completed production website.

Run:

```bash
npm run build:client
```

The process:

1. Runs the prebuild script.
2. Builds the website using the `client` mode.
3. Applies client environment variables.
4. Generates SEO files.
5. Packages the contents of `dist/` into a ZIP archive.

The archive is named after the project folder:

```text
project-name.zip
```

It is created in the project root directory.

The client build uses relative asset paths and the client website URL, or the default placeholder if no URL is configured.

GitHub Pages paths are not included in the client build.

The resulting ZIP contains the static website files ready for upload to a web hosting provider.

## 10. GitHub Pages Deployment

GitHub Pages is used to publish project previews and share development progress.

Run:

```bash
npm run predeploy
npm run deploy
```

The first command prepares assets and creates a GitHub-specific production build.

The configuration automatically:

- Detects the project folder name.
- Generates the GitHub Pages base path.
- Sets the GitHub Pages website URL.
- Updates HTML metadata.
- Generates the sitemap and robots file using the GitHub URL.

The second command publishes the existing `dist` directory using `gh-pages`.

This workflow allows the same project to be deployed to GitHub Pages without manually changing asset paths or SEO URLs.

---

## 11. Build Workflow Summary

The general project workflow is:

```text
Source files
     |
     v
Prebuild process
     |
     +-- Image conversion
     |
     +-- Font conversion
     |
     v
Vite build
     |
     +-- HTML partial injection
     |
     +-- SCSS / PostCSS processing
     |
     +-- SVG sprite generation
     |
     +-- Image optimization
     |
     +-- HTML / CSS / JS minification
     |
     v
SEO file generation
     |
     +-- sitemap.xml
     |
     +-- robots.txt
     |
     v
Production output (dist)
     |
     +-- Client ZIP packaging
     |
     +-- GitHub Pages deployment
```

The selected build mode determines the website URL, base paths, and additional output actions.

The same source code can therefore be used for local development, standard production builds, client delivery, and GitHub Pages previews without maintaining separate project configurations.