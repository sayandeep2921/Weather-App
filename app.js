const apiKey = "7d0c7508e761f5bba206684c149f0011";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

    const searchBox = document.querySelector(".search input")
    const searchBtn = document.querySelector(".search button")

    const weatherIcon = document.querySelector(".weather-icon");

    async function checkWeather(city) {
      const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

      // 404 for invalid text
      if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        // to display error message
        document.querySelector(".weather").style.display = "none";
        // to hide weather information
      } 
      else {
        var data = await response.json();

        // console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        if (data.weather[0].main == "Clouds") {
          weatherIcon.src = "clouds.png";
        }
        else if (data.weather[0].main == "Clear") {
          weatherIcon.src = "clear.png";
        }
        else if (data.weather[0].main == "Rain") {
          weatherIcon.src = "rain.png";
        }
        else if (data.weather[0].main == "Drizzle") {
          weatherIcon.src = "drizzle.png";
        }
        else if (data.weather[0].main == "Mist") {
          weatherIcon.src = "mist.png";
        }
        else if (data.weather[0].main == "Snow") {
          weatherIcon.src = "snow.png";
        }

        document.querySelector(".weather").style.display = "block";
        // to display weather info
        document.querySelector(".error").style.display = "none";
        // to hide error message
      }

    }

    searchBtn.addEventListener("click", () => {
      checkWeather(searchBox.value);
    })
