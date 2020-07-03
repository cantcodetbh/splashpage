      function getWeather() {
        let temperature = document.getElementById("temperature");
        let description = document.getElementById("description");
        let location = document.getElementById("location");
      
        let api = "https://api.openweathermap.org/data/2.5/weather";
        let apiKey = "05805459dba6297e08a0c98134bd9b33";
      
        location.innerHTML = "Locating...";
      
        navigator.geolocation.getCurrentPosition(success, error);
      
        function success(position) {
          latitude = position.coords.latitude;
          longitude = position.coords.longitude;
      
          let url =
            api +
            "?lat=" +
            latitude +
            "&lon=" +
            longitude +
            "&appid=" +
            apiKey +
            "&units=metric";
      
          fetch(url)
            .then(response => response.json())
            .then(data => {
              console.log(data);
              let temp = Math.round(data.main.temp)
              temperature.innerHTML = temp + "°C";
              location.innerHTML =
                data.name //+ " (" + latitude + "°, " + longitude + "°)";//
              description.innerHTML = data.weather[0].main;
            });
        }
      
        function error() {
          location.innerHTML = "Unable to retrieve your location";
        }
      }
      
      getWeather();