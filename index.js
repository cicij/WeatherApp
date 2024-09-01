//import express + axios
const express = require('express');
const axios = require('axios');

const app = express(); //express instance
const PORT = 3000; //3000 for https requests development
const API_KEY = '1637e7620afaee450c2b6074bde1d503'; //api key that i got from openweathermap

app.use(express.static('public')); //accesses public directory

//defines the routes
app.get('/weather/:city', async (req, res) => {
  const city = req.params.city;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`; //metric to change from celsius to fahrenheit later

  try {
      const response = await axios.get(url);
      res.json(response.data);
  } catch (error) {
      console.error('Error fetching weather data:', error.message);
      res.status(500).send('Error retrieving weather data. Please try again.');
  }
});
  
//boots server
  app.listen(PORT, () => {
    console.log(`Server is now running on: http://localhost:${PORT}`);  //logs server startup message
  });
