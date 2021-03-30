let map = L.map('map').setView([4.6585446, -74.1039554], 11.20);
var locationPet;


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

map.on('click', function (e) {
  var popLocation = e.latlng;
  var popup = L.popup()
    .setLatLng(popLocation)
    .setContent('<p>Location pet</p>')
    .openOn(map);
  locationPet = e.latlng.lat + ',' + e.latlng.lng;
});


