export function initBurger() {
  const burger = document.querySelector(".burger-menu");
  if (!burger) return;

  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    console.log("Бургер нажат");
  });
}
