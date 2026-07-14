const modules = import.meta.glob("/src/html/inline-icons/**/*.html", {
  query: "?raw",
  eager: true,
});

let templatesHTML = "";

for (const path in modules) {
  const id = path.split("/").pop().replace(".html", "");
  const svgContent = modules[path].default;

  templatesHTML += `
    <template id="${id}">
      ${svgContent}
    </template>
  `;
}

const div = document.createElement("div");
div.style.display = "none";
div.innerHTML = templatesHTML;
document.body.appendChild(div);
