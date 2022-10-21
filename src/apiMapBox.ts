
const VITE_ACCESS_TOKEN_MAP_BOX = import.meta.env.VITE_ACCESS_TOKEN_MAP_BOX; 

export const fetchLocalMapBox = (local: string) =>
fetch(
  //`https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?pk.eyJ1IjoibWFyZ29maSIsImEiOiJja2dhdm5tcmMwOHBnMnJtejA3NXYyMHZwIn0.oL7DRMPMYDab2K6xv8elSA`
  `https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?pk.eyJ1IjoibWFyZ29maSIsImEiOiJjbDlpdHh5eHIwNnp2M29tZ25iNXc1dXM4In0.8DnnlYRsaR0SS1f58Wt2rQ`
  )
  .then(response => response.json())
  .then(data => data);
