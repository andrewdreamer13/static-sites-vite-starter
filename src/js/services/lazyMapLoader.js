export const initMaps = () => {
  const mapContainers = document.querySelectorAll("[data-map-receiver]");
  if (mapContainers.length === 0) return;

  const loadIframe = (container) => {
    const iframe = document.createElement("iframe");
    iframe.src = container.dataset.mapSrc;

    container.appendChild(iframe);
    container.classList.add("_is-loaded"); 
  };

  const loadCustomMap = (container) => {
    // 1. Сюда нужно будет добавить загрузку скрипта Google Maps API, если его еще нет
    // 2. Инициализация через new google.maps.Map(...)
    console.log(
      "Инициализируем кастомную карту с координатами:",
      container.dataset.mapLat,
    );
  };

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const container = entry.target;
          const type = container.dataset.mapType;

          if (type === "iframe") {
            loadIframe(container);
            console.log('Map is loaded');
            
          } else if (type === "custom") {
            loadCustomMap(container);
          }

          observer.unobserve(container);
        }
      });
    },
    { rootMargin: "200px" },
  );

  mapContainers.forEach((container) => observer.observe(container));
};
