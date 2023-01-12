import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="row summary ">
      <div className="col-sm-6">
        <div>
          <h1>{props.data.city}</h1>
        </div>

        <div className="text-capitalize mt-1">
          <span>
            <FormattedDate date={props.data.date} /> | {props.data.description}
          </span>
        </div>
        <div className="mt-1">
          <span>
            Humidity:{" "}
            <span className="data-numbers">{props.data.humidity}</span> % |
            Wind:{" "}
            <span className="data-numbers">{Math.round(props.data.wind)} </span>
            m/s
          </span>
        </div>
      </div>

      <div className="col-md-6 p-0 align-self-center">
        <div className="current-main">
          <span className="current-icon">
            <WeatherIcon code={props.data.icon} size={64} />
          </span>
          <WeatherTemperature celsius={props.data.temperature} />
        </div>
      </div>
    </div>
  );
}
