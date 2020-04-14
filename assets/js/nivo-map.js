/*==============================================================*/
// Nivo Map  JS
/*==============================================================*/
(function($) {
    "use strict"; // Start of use strict
    var marker;

    window.initMap = function() {
        var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: {lat: 537.7749, lng: 122.4194}
        });

        marker = new google.maps.Marker({
        map: map,
        draggable: true,
        animation: google.maps.Animation.DROP,
        position: {lat: 37.7749, lng: 122.4194}
        });
        marker.addListener('click', toggleBounce);
    }

    function toggleBounce() {
        if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
        } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
        }
    }
}(jQuery)); // End of use strict