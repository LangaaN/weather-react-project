import React, { useState } from "react";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo.js";
import Forecast from "./Forecast.js";
import axios from "axios";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      icon: response.data.weather[0].icon,
    });
  }

  function search() {
    const apiKey = "97bed167ec49bff56e6c1b63daef9c86";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city"
                autofocus="on"
                autocomplete="off"
                id="city-input"
                className="form-control shadow-sm"
                onChange={handleChange}
              />
            </div>
            <div class="col-3">
              <input
                type="submit"
                value="Search"
                className="form-control btn btn-primary shadow-sm w-100"
              />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        <Forecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
