// Create a map object
const map = L.map('map')
// Define a baselayer
const baselayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
})
// Add Baselayer to map
baselayer.addTo(map)
// Set Map View
map.setView([45.57, 5.91], 3)

// Create a Leaflet geoJSON and add it to the map
// Same style for each layer
// var myStyle = {
//     "color": "#ff7800",
//     "weight": 5,
//     "opacity": 0.65
// };

L.geoJSON(countries, {
  // Function for styling layer
  style: function(feature) {
    if (feature.properties.name === "France") {
      return {
        "color": '#36910f',
        "weight": 2,
        "opacity": 0.3
      }
    } else {
      return {
        "color": '#ff7800',
        "weight": 2,
        "opacity": 0.8
      }
    }
  },
  onEachFeature: function(feature, layer){
    layer.bindPopup(feature.properties.name+' / '+feature.properties.continent)
  }
}).addTo(map);
