export const initLazySvg = () => {
  const lazyContainers = document.querySelectorAll("[data-svg-receiver]");
  if (lazyContainers.length === 0) return;

  const options = {
    rootMargin: "150px 0px",
    threshold: 0.01,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const container = entry.target;
        const templateId = container.dataset.svgId;
        const template = document.getElementById(templateId);

        if (template) {
          const svgContent = template.content.cloneNode(true);

          container.innerHTML = "";
          container.appendChild(svgContent);

          container.classList.add("_is-loaded");

          observer.unobserve(container);

          console.log(`SVG ${templateId} successfully inlined.`);
        } else {
          console.warn(`Template with id "${templateId}" not found!`);
        }
      }
    });
  }, options);

  lazyContainers.forEach((container) => observer.observe(container));
};
