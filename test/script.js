// script.js
let map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 0, lng: 0 },
    zoom: 2
  });

  const getLocationBtn = document.getElementById('getLocationBtn');
  getLocationBtn.addEventListener('click', getCurrentLocation);
}

function getCurrentLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        const currentLocation = new google.maps.LatLng(latitude, longitude);

        map.setCenter(currentLocation);
        map.setZoom(15);

        // You can do more with the location, such as placing a marker on the map
        const marker = new google.maps.Marker({
          position: currentLocation,
          map: map,
          title: 'Your Location'
        });
      },
      error => {
        console.error('Error getting location:', error.message);
      }
    );
  } else {
    console.error('Geolocation is not supported by this browser.');
  }
}
