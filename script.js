$(document).ready(function() {

    var cityName = "San Francisco";
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=imperial&appid=bf9f368bb7a7f00e6fbf08e7fb4f74a7";
    console.log(queryURL);

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(data) {
        console.log(data);

        var date = moment().format(' (MM/DD/YYYY)')
        var temp = data.main.temp;
        var hum = data.main.humidity;
        var wind = data.wind.speed;
        console.log(temp, hum, wind);

        var currentCity = $("<h2>").text(data.name + date);
        var tempEl = $("<p>").text("Temperature: " + temp + " °F");
        var humEl = $("<p>").text("Humidity: " + hum + " %");
        var windEl = $("<p>").text("Wind Speed: " + wind + " MPH");
        var UV = "";

        var currentContainer = $("<div class='current'>");
        currentContainer.append(currentCity, tempEl, humEl, windEl);
        $("#today").append(currentContainer);


        function current(data) {
            $()
        }

    });

});

