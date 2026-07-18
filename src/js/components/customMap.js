import mapboxgl from "mapbox-gl";
 
export const initCustomMap = (container) => {
  const { mapLat, mapLng, mapId } = container.dataset;

  // Твой публичный токен Mapbox
  mapboxgl.accessToken = "";

  const map = new mapboxgl.Map({
    container: container,
    style: "mapbox://styles/andrew-dreamer/cmrp3l942005y01qkavid5m8b",
    center: [parseFloat(mapLng), parseFloat(mapLat)],
    zoom: 15,
  });

  new mapboxgl.Marker()
    .setLngLat([parseFloat(mapLng), parseFloat(mapLat)])
    .addTo(map);

  container.classList.add("_is-loaded");
  console.log("Mapbox custom map loaded");
  console.log("Custom map loaded");
};
