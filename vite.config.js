import { defineConfig } from "vite";
import path from "path"; // Для получения имени папки
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
      gifsicle: { optimizationLevel: 7, interlaced: false },
      optipng: { optimizationLevel: 7 },
      mozjpeg: { quality: 80 },
      pngquant: { quality: [0.8, 0.9], speed: 4 },
      svgo: {
        plugins: [
          // Отключаем удаление viewBox, иначе ломается адаптивность SVG
          { name: "removeViewBox", active: false },
          { name: "removeEmptyAttrs", active: false },
        ],
      },
      // Вот тут магия конвертации (делает копии в этих форматах)
      webp: { quality: 75 },
      avif: { quality: 70 },
    }),

    zipPack({
      inDir: "dist", // Какую папку архивируем
      outDir: "./", // Куда кладем архив (в корень проекта)
      outFileName: `${rootFolder}.zip`, // Имя архива
    }),

    // createSvgIconsPlugin({
    //   // Указываем путь к папке с иконками
    //   iconDirs: [path.resolve(process.cwd(), "src/assets/icons")],
    //   // Формат ID для использования в HTML: <use xlink:href="#icon-name" />
    //   symbolId: "icons-[dir]-[name]",
    //   // Очистка иконок от лишних атрибутов (замена gulp-cheerio)
    //   svgoOptions: true,
    // }),

    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), "src/assets/icons")],
      symbolId: "icons-[dir]-[name]",
      svgoOptions: {
        plugins: [
          {
            name: "removeAttrs",
            params: {
              // Удаляем fill и stroke, чтобы управлять ими через CSS
              attrs: "(fill|stroke)",
            },
          },
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
          // Берем именно расширение файла (последний элемент после точки)
          let extType = assetInfo.name.split(".").at(-1);

          // Группируем картинки (добавил webp и avif)
          if (/png|jpe?g|svg|gif|tiff|bmp|ico|webp|avif/i.test(extType)) {
            extType = "img";
          }
          // Группируем шрифты
          else if (/woff2?|eot|ttf|otf/i.test(extType)) {
            extType = "fonts";
          }
          // Группируем CSS
          else if (/css/i.test(extType)) {
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
