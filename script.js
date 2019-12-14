$(document).ready(function() {

    var cityName = "San Francisco";
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=imperial&appid=bf9f368bb7a7f00e6fbf08e7fb4f74a7";
    
    // console.log(queryURL);

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(data) {
        console.log(data);

        var temp = data.main.temp;
        var hum = data.main.humidity;
        var wind = data.wind.speed;
        console.log(temp, hum, wind);
    });

});

