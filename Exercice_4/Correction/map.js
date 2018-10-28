// Create a map object
const map = L.map('map')
// Define a baselayer
const baselayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
})
// Add Baselayer to map
baselayer.addTo(map)
// Set Map View
map.setView([45.57, 5.91], 13)

// Create several markers
const railstation = L.marker([45.571447, 5.919571]).bindPopup('Rail Station.'),
    cartongHQ = L.marker([45.568657, 5.919458]).bindPopup('CartONG HQ.'),
    geong = L.marker([45.564045, 5.926802]).bindPopup('Here is happening the GeOng'),
    hospital = L.marker([45.563425, 5.911664]).bindPopup('Hospital');

// Insert every markers in a Group Layer
const places = L.layerGroup([railstation, cartongHQ, geong, hospital]);

// Define a 2nd baselayer
const dark = L.tileLayer('https://stamen-tiles-b.a.ssl.fastly.net/toner/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
})

// Define two layer objects
var baseMaps = {
    "OSM Classic": baselayer,
    "Dark Theme": dark
};

var overlay = {
    "Places": places
};

// Create a control
L.control.layers(baseMaps, overlay).addTo(map);
