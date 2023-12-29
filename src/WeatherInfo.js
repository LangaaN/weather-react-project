import React from "react";
import FormatDate from "./FormatDate.js";
import WeatherIcon from "./WeatherIcon.js";
import Temperature from "./Temperature.js";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormatDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.decription}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div className="clearfix">
            <WeatherIcon code={props.data.icon} size={50} />

            <Temperature celsius={props.data.temperature} />
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.data.humidity} %</li>
            <li>Wind-Speed: {props.data.wind} km/hr</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
