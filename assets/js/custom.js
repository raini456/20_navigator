(function () {
//    var getPos = function (pos) {        
//        var mapLink = document.querySelector('#mapLink');
//        var latlon = pos.coords.latitude + ',' + pos.coords.longitude;
//        var position1 = pos.coords.latitude;
//        var position2 = pos.coords.longitude;
//        var url = 'https://www.google.de/maps/@' + latlon + ',14z';        
//        mapLink.href = url;
//        mapLink.innerText = url;
//        getPosition(position1, position2);
//        
//        
//    };
    var googleMap = document.querySelector('#googleMap');
    var getPosition = function(){
        console.log(navigator);
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(initMap);
        }          
    };     
    var initMap = function(pos){         
        var opts ={
          zoom:8,
          center:new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude)
        };
        //ruft eine neue Map auf und speichert sie in der id googleMap
        new google.maps.Map(googleMap, opts); 
    };
    google.maps.event.addDomListener(window,'load', getPosition);    
})();