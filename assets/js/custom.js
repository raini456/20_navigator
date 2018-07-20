(function () {

    http://192.168.0.22:8383/20_navigator/index.html
            //
            //
//https://developer.mozilla.org/en-US/docs/Web/API/Coordinates
            var getPos = function (pos) {
                  alert(2);
                var mapLink = document.querySelector('#mapLink');
                var latlon = pos.coords.latitude + ',' + pos.coords.longitude;

                var url = 'https://www.google.de/maps/@' + latlon + ',14z';
                mapLink.href = url;
                mapLink.innerText = url;
                console.log(pos);
            };

    if (navigator.geolocation) {
      
        navigator.geolocation.getCurrentPosition(getPos);
    }


})();