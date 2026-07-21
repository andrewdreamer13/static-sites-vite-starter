
/**
 * Manages accessible modal dialog windows, including open and close state transitions, background scroll locking, focus trapping, and keyboard/backdrop dismissal handlers.
 * 
 * 1. `openModal` - Displays the target modal element, updates ARIA attributes, locks body scrolling, and delegates focus trapping to `focusManager`.
 * 2. `closeModal` - Dismisses the active modal, restores background scrolling, updates ARIA attributes, and releases focus trapping.
 * 3. `initModal` - Sets up global click listeners for trigger elements, backdrop overlays, and close buttons, as well as an Escape key handler for modal dismissal.
 */

import { openScope, closeScope } from "../services/focusManager.js";

const body = document.body;
let activeModal = null;

export const openModal = (modal) => {
  if (!modal) return;

  const content = modal.querySelector(".modal__content");
  if (!content) return;

  modal.classList.add("modal--visible");
  content.classList.add("modal__content--visible");
  modal.setAttribute("aria-hidden", "false");
  body.classList.add("lock");

  activeModal = modal;
  openScope(modal);
};

export const closeModal = () => {
  if (!activeModal) return;

  const content = activeModal.querySelector(".modal__content");

  activeModal.classList.remove("modal--visible");
  if (content) {
    content.classList.remove("modal__content--visible");
  }
  activeModal.setAttribute("aria-hidden", "true");
  body.classList.remove("lock");

  closeScope();
  activeModal = null;
};

export const initModal = () => {
  const openButtons = document.querySelectorAll("[data-modal-open]");

  openButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const modal = document.getElementById(button.dataset.modalOpen);

      if (!modal) return;

      if (activeModal) {
        closeModal();
      }

      setTimeout(() => {
        openModal(modal);
      }, 0);
    });
  });

  document.querySelectorAll(".modal").forEach((modal) => {
    modal.addEventListener("click", (e) => {
      if (e.target === modal || e.target.closest(".modal__close-btn")) {
        closeModal();
      }
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && activeModal) {
      closeModal();
    }
  });
};
