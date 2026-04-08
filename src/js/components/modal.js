export function openModalWindow() {
  const modal = document.querySelector("#modal");
  console.log(modal);
  
  const openButtons = document.querySelectorAll("[data-modal]");
 
  

  const closeAll = () => {
    modal.classList.remove("modal--visible");
    document.body.classList.remove("lock");

    document.querySelectorAll("[data-modal-target]").forEach((target) => {
      target.classList.remove("modal__content--visible");
    });
  };

  openButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const path = event.currentTarget.getAttribute("data-modal");
      const targetContent = document.querySelector(
        `[data-modal-target="${path}"]`,
      );

      if (targetContent) {
        modal.classList.add("modal--visible");
        targetContent.classList.add("modal__content--visible");
        document.body.classList.add("lock");
      }
    });
  });

  modal.addEventListener("click", (e) => {
    if (e.target.closest(".modal__close-btn") || e.target === modal) {
      closeAll();
    }
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("modal--visible")) {
      closeAll();
    }
  });
}
