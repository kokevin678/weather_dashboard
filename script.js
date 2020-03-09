$(document).ready(function() {
  var cityName = $("city").val();
  //   var queryURL =
  //     "https://api.openweathermap.org/data/2.5/weather?q=" +
  //     cityName +
  //     "&units=imperial&appid=bf9f368bb7a7f00e6fbf08e7fb4f74a7";
  console.log(queryURL);
  search(cityName);

  function search(cityName) {
    $.ajax({
      url:
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        cityName +
        "&units=imperial&appid=bf9f368bb7a7f00e6fbf08e7fb4f74a7",
      method: "GET"
    }).then(function(data) {
      console.log(data);

      var date = moment().format(" (MM/DD/YYYY)");
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
    });

    var queryURLforecast =
      "https://api.openweathermap.org/data/2.5/forecast?q=" +
      cityName +
      "&units=imperial&appid=bf9f368bb7a7f00e6fbf08e7fb4f74a7";
    console.log(queryURLforecast);
  }
  $.ajax({
    url: queryURLforecast,
    method: "GET"
  }).then(function(data) {
    console.log(data.list[3]);

    var forecast = data.list;
    for (var i = 0; i < 5; i++) {
      var forecastDate = data.list[i].dt_txt;
      var forecastTemp = data.list[i].main.temp;
      var forecastHum = data.list[i].main.humidity;
      console.log(forecastDate, forecastTemp, forecastHum);
      // }

      var forecastDateEl = $("<p class='card-title'>").text(forecastDate);
      var forecastTempEl = $("<p class='card text'>").text(
        "Temp: " + forecastTemp + " °F"
      );
      var forecastHumEl = $("<p class='card text'>").text(
        "Humidity: " + forecastHum + " %"
      );

      var forecastContainer = $("<div class='card'>");
      forecastContainer.append(forecastDateEl, forecastTempEl, forecastHumEl);
      $("#fiveDayForecast").append(forecastContainer);
    }
  });
});
