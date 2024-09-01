document.getElementById('weatherForm').addEventListener('submit', async (e) => {
  e.preventDefault(); // Prevent the default form submission

  const city = document.getElementById('cityInput').value; // Get the city name from the input
  const weatherResult = document.getElementById('weatherResult'); // Get the result div

  try {
      // Make a request to the server to get weather data
      const response = await fetch(`/weather/${city}`);
      const data = await response.json();

      const tempCelsius = data.main.temp;
      const tempFahrenheit = (tempCelsius * 9/5) + 32; // Conversion formula

      // Display the weather data
      weatherResult.innerHTML = `
          <h2>Weather in ${data.name}, ${data.sys.country}</h2>
          <p>Temperature: ${tempFahrenheit.toFixed(2)} °F</p>
          <p>Weather: ${data.weather[0].description}</p>
          <p>Humidity: ${data.main.humidity}%</p>
          <p>Wind Speed: ${data.wind.speed} m/s</p>
      `;
  } catch (error) {
      weatherResult.innerHTML = '<p>Error getting weather data. Please try again.</p>';
      console.error('Error:', error); // Log the error for debugging
  }
});
