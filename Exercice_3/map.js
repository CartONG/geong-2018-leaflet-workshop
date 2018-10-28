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

// Create a marker
const myMarker = L.marker([45.57, 5.91], {draggable:true})
myMarker.addTo(map)
