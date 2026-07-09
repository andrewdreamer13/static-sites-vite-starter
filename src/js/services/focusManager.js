let activeScope = null;
let lastFocusedElement = null;

const FOCUSABLE_SELECTORS = `
  a[href],
  button:not([disabled]),
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  [tabindex]:not([tabindex="-1"])
`;

const getFocusableElements = (container) => {
  return [...container.querySelectorAll(FOCUSABLE_SELECTORS)].filter(
    (element) => element.offsetParent !== null,
  );
};

const handleTabKey = (e) => {
  if (!activeScope || e.key !== "Tab") return;

  const focusableElements = getFocusableElements(activeScope);
  if (!focusableElements.length) return;

  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];

  if (e.shiftKey && document.activeElement === firstElement) {
    e.preventDefault();
    lastElement.focus();
    return;
  }

  if (!e.shiftKey && document.activeElement === lastElement) {
    e.preventDefault();
    firstElement.focus();
  }
};

export const initFocusManager = () => {
  document.addEventListener("keydown", handleTabKey);
};

export const openScope = (scope) => {
  if (!scope) return;

  lastFocusedElement = document.activeElement;
  activeScope = scope;

  const focusableElements = getFocusableElements(scope);

  if (!focusableElements.length) return;

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      focusableElements[0].focus();
    });
  });
};

export const closeScope = () => {
  activeScope = null;

  lastFocusedElement?.focus();
  lastFocusedElement = null;
};
