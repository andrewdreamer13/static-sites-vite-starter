export const initPreloader = () => {
  const preloader = document.querySelector("#preloader");
  if (!preloader) return;

  window.addEventListener(
    "load",
    () => {
      preloader.classList.add("hide");

      setTimeout(() => {
        preloader.remove();
      }, 600);
    },
    { once: true },
  );
};
