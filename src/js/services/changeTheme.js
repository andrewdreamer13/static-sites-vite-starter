export function changeTheme() {
  const changeThemeBtn = document.querySelector("#theme");
  if (!changeThemeBtn) return;

  changeThemeBtn.addEventListener("click", () => {
    const html = document.documentElement;
    const currentTheme = html.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    html.setAttribute("data-theme", newTheme);

    localStorage.setItem("theme", newTheme);
  });
}
