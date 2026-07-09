export function initChangeTheme(buttonSelector) {
  const changeThemeBtn = document.querySelector(buttonSelector);
  if (!changeThemeBtn) return;

  changeThemeBtn.addEventListener("click", () => {
    const html = document.documentElement;
    const currentTheme = html.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    html.setAttribute("data-theme", newTheme);

    localStorage.setItem("theme", newTheme);
  });
}
