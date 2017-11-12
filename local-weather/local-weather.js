var lat;
var lon;
var toggle = 0;

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    lat = position.coords.latitude;
    lon = position.coords.longitude;
    $("#lat").html("latitude: " + lat);
    $("#lon").html("longitude: " + lon);
    initMap();
    getWeather();
  });
}

function initMap() {
  var uluru = {lat: -25.363, lng: 131.044};
  uluru.lat = lat;
  uluru.lon = lon;
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}

function getWeather() {
  $.getJSON("https://fcc-weather-api.glitch.me/api/current?lat="+lat+"&lon="+lon, function(weatherData) {
    var main = weatherData.weather[0].main;
    var description = weatherData.weather[0].description;
    var image = weatherData.weather[0].icon;
    var temp = weatherData.main.temp;
    $("#main").text(main);
    $("#description").text(description);
    if (toggle == 1) {
      temp = 1.8 * temp + 32;
      $("#temperature").html(temp + "&deg;F");
      $("#toggle").text("Show me in Celcius");
    } else {
      $("#temperature").html(temp + "&deg;C");
      $("#toggle").text("Show me in Fahrenheit");
    }
    // $("#image").replaceWith("<p id=\"image\"><img src=" + image + "/></p>");
    if (main === "Clear") {
      $(document.body).addClass("clear");
      $("#image").html("<i class='fa fa-sun-o' aria-hidden='true'></i>");
      $("#image").css("color", "yellow");
    }
    $("#toggle").show();
  });
};

$("#toggle").on("click", function() {
  if (toggle == 0) {
    getWeather();
    toggle = 1;
  } else {
    getWeather();
    toggle = 0;
  }
})