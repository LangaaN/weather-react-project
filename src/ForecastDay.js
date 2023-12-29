import React from "react";
import WeatherIcon from "./WeatherIcon.js";
import ReactAnimatedWeather from "react-animated-weather";

export default function ForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }
  return (
    <div>
      <div className="ForecastDay">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={36} />
      <div className="Forecast-temperatures">
        <span className="Forecast-temperatures-max">
          {Math.round(props.data.temp.max)}°
        </span>
        <span className="Forecast-temperatures-min">
          {Math.round(props.data.temp.min)}°
        </span>
      </div>
    </div>
  );
}
