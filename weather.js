async function displayweather() {
  const city = getQueryParams();
  if (!city) {
      alert("City not provided in the URL.");
      return;
  }

  const apiKey = "d2295e784ec8d99e1f9cd84bf542b13a";
  const lcity = city.toLowerCase();
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${lcity}&appid=${apiKey}&units=metric`;

  try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.cod === '404') {
          alert("City not found. Please try again.");
          return;
      }

      const weatherCondition = data.weather[0].main.toLowerCase();
      const temperature = data.main.temp;
      const feelsLike = data.main.feels_like;
      const description = data.weather[0].description;
      const humidity = data.main.humidity;
      const windSpeed = data.wind.speed;
      const pressure = data.main.pressure;
      const visibility = data.visibility / 1000;
      const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
      const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString();

      document.getElementById('temperature').textContent = `Temperature: ${temperature}°C`;
      document.getElementById('feelsLike').textContent = `Feels Like: ${feelsLike}°C`;
      document.getElementById('description').textContent = `Description: ${description}`;
      document.getElementById('weatherCondition').textContent = weatherCondition;
      document.getElementById('humidity').textContent = `Humidity: ${humidity}%`;
      document.getElementById('windSpeed').textContent = `Wind Speed: ${windSpeed} m/s`;
      document.getElementById('pressure').textContent = `Pressure: ${pressure} hPa`;
      document.getElementById('visibility').textContent = `Visibility: ${visibility} km`;
      document.getElementById('sunrise').textContent = `Sunrise: ${sunrise}`;
      document.getElementById('sunset').textContent = `Sunset: ${sunset}`;

      const videoUrls = {
          rain: 'https://videos.pexels.com/video-files/2059694/2059694-hd_1282_720_60fps.mp4',
          clear: 'https://videos.pexels.com/video-files/28703843/12456710_1920_1080_100fps.mp4',
          clouds: 'https://videos.pexels.com/video-files/29904749/12836310_2560_1440_30fps.mp4',
          storm: 'https://videos.pexels.com/video-files/3842236/3842236-hd_1920_1080_24fps.mp4',
          default: 'https://videos.pexels.com/video-files/3843103/3843103-uhd_2560_1440_30fps.mp4'
      };

      const videoElement = document.getElementById('backgroundVideo');
      const videoSource = document.getElementById('videoSource');

      const newVideoSrc = videoUrls[weatherCondition] || videoUrls.default;

      if (videoElement && videoSource) {
          videoSource.src = newVideoSrc;
          videoElement.load();
      }
  } catch (error) {
      console.error('Error fetching weather data:', error);
      alert('An error occurred. Please try again later.');
  }
}

function getQueryParams() {
  const params = new URLSearchParams(window.location.search);
  return params.get('city');
}

displayweather();
