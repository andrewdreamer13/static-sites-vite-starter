import mapboxgl from "mapbox-gl";
 
export const initCustomMap = (container) => {
  const { mapLat, mapLng, mapId } = container.dataset;

  mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;

  const map = new mapboxgl.Map({
    container: container,
    style: "mapbox://styles/andrew-dreamer/cmrp3l942005y01qkavid5m8b",
    center: [parseFloat(mapLng), parseFloat(mapLat)],
    zoom: 15,
    
  });

  map.addControl(new mapboxgl.FullscreenControl());
  map.addControl(new mapboxgl.NavigationControl());
  map.addControl(
    new mapboxgl.ScaleControl({
      maxWidth: 80,
      unit: "metric", 
    }),
  );

  new mapboxgl.Marker({
    color: "#d0b049",
  })
    .setLngLat([parseFloat(mapLng), parseFloat(mapLat)])
    .addTo(map);

  container.classList.add("_is-loaded");
  console.log("Custom map loaded");
};
