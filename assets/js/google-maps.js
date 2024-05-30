function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: 45.0428, lng: 3.8829};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 12,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Le-Puy-en-Velay' // Title Location
    });
}