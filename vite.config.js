

import { defineConfig } from "vite";
import path from "path";
import viteImagemin from "vite-plugin-imagemin";
import autoprefixer from "autoprefixer";
import postcssSortMediaQueries from "postcss-sort-media-queries";
import zipPack from "vite-plugin-zip-pack";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import injectHTML from "vite-plugin-html-inject";


const rootFolder = path.basename(path.resolve());

export default defineConfig({
  base: "./",

  plugins: [
    injectHTML(),
   
    viteImagemin({
      include: ["**/*.{png,jpg,jpeg,gif,svg,webp,avif}"],
      exclude: ["node_modules/**", "src/assets/icons/**"],

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
              },
            },
          },
          { name: "removeXMLNS", active: true },
        ],
      },
      webp: { quality: 80 },
      avif: { quality: 70 },
    }),

    zipPack({
      inDir: "dist",
      outDir: "./",
      outFileName: `${rootFolder}.zip`,
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
