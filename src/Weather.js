import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form class="search-form" id="search-form">
        <div class="row">
          <div class="col-9">
            <input
              type="search"
              placeholder="Enter a city"
              autofocus="on"
              autocomplete="off"
              id="city-input"
              class="form-control shadow-sm"
            />
          </div>
          <div class="col-3">
            <input
              type="submit"
              value="Search"
              class="form-control btn btn-primary shadow-sm w-100"
            />
          </div>
        </div>
      </form>
      <h1 id="city">New York</h1>
      <ul>
        <li>
          Last updated:<span id="date"></span>
        </li>
        <li id="description"></li>
      </ul>
      <div class="row">
        <div class="col-6">
          <div className="d-flex weather-temperature">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt="Clear"
              id="icon"
            />
            <strong id="temperature"></strong>
            <span class="units">
              <small> °C </small>
            </span>
          </div>
        </div>
        <div class="col-6">
          <ul>
            <li>
              Humidity: <span id="humidity"></span>
            </li>
            <li>
              Wind: <span id="wind"></span> km/h
            </li>
          </ul>
        </div>
      </div>
      <div className="weather-forecast" id="forecast">
        <div class="row">
          <div class="col-2">
            Thurs
            <br />
            <img
              src="http://openweathermap.org/img/wn/10n@2x.png"
              alt=""
              width="42"
            />
            <br />
            <strong>18°</strong>/12°
          </div>
        </div>
      </div>
    </div>
  );
}
