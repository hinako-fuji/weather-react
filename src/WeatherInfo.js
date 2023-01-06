import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="row summary ">
      <div className="col-sm-5">
        <div>
          <h1>{props.data.city}</h1>
        </div>

        <div>
          <ul>
            <li>
              <FormattedDate date={props.data.date} />
            </li>
            <li>{props.data.description}</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)} m/s</li>
          </ul>
        </div>
      </div>

      <div className="col-md-7 p-0 align-self-center">
        <div className="current-main">
          <span className="current-icon">
            <WeatherIcon code={props.data.icon} />
          </span>
          <WeatherTemperature celsius={props.data.temperature} />
        </div>
      </div>
    </div>
  );
}
