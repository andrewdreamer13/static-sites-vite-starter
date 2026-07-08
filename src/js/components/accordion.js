export const initAccordion = (accordionId) => {
  const accordion = document.querySelector(accordionId);
  if (!accordion) return;

  const items = accordion.querySelectorAll(".accordion__item");

  accordion.addEventListener("click", (e) => {
    const button = e.target.closest(".accordion__button");
    if (!button) return;

    const item = button.closest(".accordion__item");
    const content = item.querySelector(".accordion__content");
    const isExpanded = button.getAttribute("aria-expanded") === "true";

    // Close all accordion items

    items.forEach((item) => {
      item
        .querySelector(".accordion__button")
        .setAttribute("aria-expanded", "false");

      item.querySelector(".accordion__content").style.maxHeight = null;
    });

    // Open current accordion item

    if (!isExpanded) {
      button.setAttribute("aria-expanded", "true");
      content.style.maxHeight = `${content.scrollHeight}px`;
    }
  });
};
