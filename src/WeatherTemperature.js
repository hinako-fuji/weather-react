import React from "react";

export default function WeatherTemperature(props) {
  return (
    <span>
      <span className="current-temp">{Math.round(props.celsius)}</span>
      <span className="units">°C</span>
    </span>
  );
}
