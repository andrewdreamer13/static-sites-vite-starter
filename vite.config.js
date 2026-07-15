import { defineConfig } from "vite";
import path from "path";
import viteImagemin from "vite-plugin-imagemin";
import autoprefixer from "autoprefixer";
import postcssSortMediaQueries from "postcss-sort-media-queries";
import zipPack from "vite-plugin-zip-pack";
import injectHTML from "vite-plugin-html-inject";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import { ViteMinifyPlugin } from "vite-plugin-minify";

const rootFolder = path.basename(path.resolve());
const isGH =
  process.env.NODE_ENV === "production" || process.argv.includes("build");

export default defineConfig({
  base: isGH ? `/${rootFolder}/` : "./",

  plugins: [
    injectHTML(),

    viteImagemin({
      gifsicle: { optimizationLevel: 7, interlaced: false },
      optipng: { optimizationLevel: 7 },
      mozjpeg: { quality: 80 },
      pngquant: { quality: [0.8, 0.9], speed: 4 },
      svgo: {
        plugins: [
          {
            name: "preset-default",
            params: {
              overrides: {
                removeViewBox: false,
                cleanupIDs: false,
              },
            },
          },
          { name: "removeDimensions" },
          { name: "sortAttrs" },
        ],
      },
      webp: { quality: 80 },
      avif: { quality: 70 },
    }),

    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), "src/assets/icons")],
      symbolId: "icons-[dir]-[name]",
      svgoOptions: {
        plugins: [
          {
            name: "removeAttrs",
            params: {
              attrs: "(fill|stroke|style)",
            },
          },
          { name: "removeXMLNS", active: true },
        ],
      },
    }),

    ViteMinifyPlugin({
      collapseWhitespace: true,
      removeComments: true,
      minifyCSS: true,
      minifyJS: true,
    }),

    zipPack({
      inDir: "dist",
      outDir: "./",
      outFileName: `${rootFolder}.zip`,
    }),
  ],

  css: {
    postcss: {
      plugins: [autoprefixer(), postcssSortMediaQueries()],
    },
    devSourcemap: true,
  },

  build: {
    emptyOutDir: true,
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name.split(".").at(-1);

          if (/png|jpe?g|svg|gif|tiff|bmp|ico|webp|avif/i.test(extType)) {
            extType = "img";
          } else if (/woff2?|eot|ttf|otf/i.test(extType)) {
            extType = "fonts";
          } else if (/css/i.test(extType)) {
            extType = "css";
          }

          return `assets/${extType}/[name]-[hash][extname]`;
        },
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
      },
    },
  },
});

