export const initUpButton = (buttonSelector) => {
  const button = document.querySelector(buttonSelector);
  if (!button) return;

  button.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
};
