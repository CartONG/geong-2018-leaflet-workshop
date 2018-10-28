// Create a map object
const map = L.map('map', {preferCanvas: true})
// Define a baselayer
const baselayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
})
// Add Baselayer to map
baselayer.addTo(map)
// Set Map View
map.setView([45.57, 5.91], 13)

// Create a marker
const myMarker = L.marker([45.57, 5.91])
myMarker.addTo(map)

function printmap(){
  // Launch the leafletImage function
  leafletImage(map, function(err, canvas) {
      console.log("I'm printing");
      // Create an image
      const img = document.createElement('img');
      var dimensions = map.getSize();
      img.width = dimensions.x;
      img.height = dimensions.y;
      img.src = canvas.toDataURL();

      // Create a PDF,add image to it then print PDF
      var doc = new jsPDF({
        orientation: 'landscape'
      })
      doc.addImage(img, 0, 0)
      doc.save('a4.pdf')
  })
}
