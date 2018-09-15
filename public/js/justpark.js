$(function()
{

    locate = function(_ip) {
        $.ajax({
            url: "http://ip-api.com/json",
            method: "GET",
            data: _ip,
            success: function(response) {
                initMap(response);
            }
        })
    }

    initMap = function(_locationData) {

        var grayScaleFilter = [{"featureType":"landscape","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","stylers":[{"saturation":-100},{"lightness":51},{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"road.arterial","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"on"}]},{"featureType":"road.local","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},{"featureType":"transit","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":-25},{"saturation":-100}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]}]

        var map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: _locationData["lat"], lng: _locationData["lon"]},
            zoom: 12,
            disableDefaultUI: true,
            mapTypeId: google.maps.MapTypeId.SATELLITE
        });

        var mapType = new google.maps.StyledMapType(grayScaleFilter, { name:"Grayscale" });
        map.mapTypes.set('tehgrayz', mapType);
        map.setMapTypeId('tehgrayz');

        var tileLoadedListener = google.maps.event.addListener(map, 'tilesloaded', function() {
            google.maps.event.removeListener(tileLoadedListener);
            start(map);
        });

    }

    doSearch = function(_map,_autocomplete) {
        var destination = _autocomplete.getPlace();
        if ( !destination )
            return;
        _autocomplete.unbindAll();
        $("#search").addClass('disabled bounceOut').fadeOut('slow',function() {
            travel(_map, destination);
        });
    }

    start = function(_map) {

        $('#status').fadeOut();
        $('#preloader').fadeOut('slow',function() {

            $('#search').fadeIn().addClass("animated bounceIn");

        });

        var autocomplete = new google.maps.places.Autocomplete((document.getElementById('destination')),{types: ['geocode']});
        autocomplete.addListener('place_changed', function() {
            $("#search form .input-group").addClass("success");
        });


        $('#search form').bind('submit',function(e) {
            e.preventDefault();
            doSearch(_map, autocomplete);
        });
        $('.input-group-addon').bind('click',function(e) {
            doSearch(_map, autocomplete);
        });

        $("#search form #destination").on("keyup",function(e){
            if ( !$(this).val() ) {
                $("#search form .input-group").removeClass("success");
            }
        })
    }
    
    travel = function(_map, _destination) {

        var destinationName = _destination["name"].split(",")[0];
        $("#arrived h3").html("Welcome to " + destinationName);

        var geocoder = new google.maps.Geocoder();
        geocoder.geocode( { 'address': _destination["name"]}, function(results, status) {

            var location = results[0].geometry.location;

            _map.setZoom(14);
            _map.panTo(location);
            _map.setMapTypeId(google.maps.MapTypeId.SATELLITE);
            _map.setTilt(45);

            $("#backdrop").fadeOut("slow");
            var tilesLoadedListener = google.maps.event.addListener(_map, 'tilesloaded', function() {
                google.maps.event.removeListener(tilesLoadedListener);
                arrived(_map);
            });

        });

    }

    arrived = function(_map) {

        $("#backdrop").fadeIn();
        $("#arrived").fadeIn().addClass('animated bounceIn');

        $("#park").click(function() {

            $("#backdrop").fadeOut();
            $("#arrived").addClass("bounceOut");

            var now = new Date();
            var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            var todayDate = now.getDate + " " + months[now.getMonth()] + " " + now.getYear();
            var bounds = _map.getBounds();


            var northWestLat = bounds["f"]["b"];
            var northWestLng = bounds["b"]["b"];

            var southEastLat = bounds["f"]["f"];
            var southEastLng = bounds["b"]["f"];

            console.log(bounds);

            $.ajax({
                method: "GET",
                url: "https://www.justpark.com/search/bounding-box/",
                data: {
                    end_date: todayDate,
                    end_time: "23:59:59",
                    nw_lat: northWestLat,
                    nw_lng: northWestLng,
                    se_lat: southEastLat,
                    se_lng: southEastLng,
                    start_date: todayDate,
                    start_time: "00:00:00"
                },
                success: function (response) {
                    var spots = response["extra"];
                    if ( spots && spots.length > 0 ) {
                        var marker;
                        var spot;
                        for (var index in spots) {
                            spot = spots[index];
                            marker = new google.maps.Marker({
                                position: {lat: parseFloat(spot["lat"]), lng: parseFloat(spot["lng"])},
                                map: _map,
                                title: spot['title']
                            });
                        }
                    } else {
                        $("#backdrop").fadeIn();
                        $("#other").fadeIn().addClass("animated bounceIn")
                    }
                }
            });
        });

    }



    locate($("#ip").html());
});