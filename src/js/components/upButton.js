export const initUpButton = () => {
  const upButton = document.querySelector(".footer__up-button");
  if (!upButton) return;

  upButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
    });
  });
};
