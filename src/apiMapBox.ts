
const VITE_ACCESS_TOKEN_MAP_BOX = import.meta.env.VITE_ACCESS_TOKEN_MAP_BOX; 

export const fetchLocalMapBox = (local: string) =>
fetch(
  // `https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?${"pk.eyJ1IjoibWFyZ29maSIsImEiOiJja2dhdm5tcmMwOHBnMnJtejA3NXYyMHZwIn0.oL7DRMPMYDab2K6xv8elSA"}`
  `https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?${VITE_ACCESS_TOKEN_MAP_BOX}`
  )
  .then(response => response.json())
  .then(data => data);
