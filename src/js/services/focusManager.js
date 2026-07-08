export const initFocusManager = () => {
  let activeScope = null;
  let lastFocusedElement = null;

  function getFocusable(container) {
    return [
      ...container.querySelectorAll(`
    a[href],
    button:not([disabled]),
    input:not([disabled]),
    select:not([disabled]),
    textarea:not([disabled]),
    [tabindex]:not([tabindex="-1"])
  `),
    ].filter((el) => el.offsetParent !== null);
  }

  function trapFocus(e) {
    if (!activeScope || e.key !== "Tab") return;

    const focusables = getFocusable(activeScope);
    if (!focusables.length) return;

    const first = focusables[0];
    const last = focusables[focusables.length - 1];

    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    }

    if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

  function handleEscape(e) {
    if (e.key !== "Escape") return;

    if (activeScope?.dataset.closeable === "true") {
      activeScope.dispatchEvent(new CustomEvent("ui:close"));
    }
  }

  function initFocusSystem() {
    document.addEventListener("keydown", (e) => {
      if (!activeScope) return;

      handleEscape(e);
      trapFocus(e, activeScope);
    });
  }

  function openScope(scopeEl) {
    lastFocusedElement = document.activeElement;
    activeScope = scopeEl;

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const focusables = getFocusable(scopeEl);
        focusables[0]?.focus();
      });
    });
  }

  function closeScope() {
    activeScope = null;
    lastFocusedElement?.focus();
    lastFocusedElement = null;
  }
};
