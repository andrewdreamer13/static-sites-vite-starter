export const initIframeMap = (container) => {
  const { mapSrc } = container.dataset;

  if (!mapSrc) {
    console.error("Для типа 'iframe' необходимо указать data-map-src");
    return;
  }

  const iframe = document.createElement("iframe");
  iframe.src = mapSrc;

  container.appendChild(iframe);
  container.classList.add("_is-loaded");
  console.log("Iframe map loaded");
};
