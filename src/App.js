import React, { useState, useEffect } from "react";

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY; // Secure key with environment variable
const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${API_KEY}&units=metric`;

function App() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setWeather(data))
      .catch((error) => console.error("Error fetching weather data:", error));
  }, []);

  if (!weather) return <p>Loading...</p>;

  return (
    <div className="App">
      <h1>Weather in {weather.name}</h1>
      <p>Temperature: {weather.main.temp} °C</p>
      <p>Condition: {weather.weather[0].description}</p>
    </div>
  );
}

export default App;
