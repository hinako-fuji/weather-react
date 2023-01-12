import React, { useState, useEffect } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  function load() {
    let apiKey = "c84t0fbaeda3af7ob8b93015bc5128b8";
    let lon = props.coordinates.longitude;
    let lat = props.coordinates.latitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${lat}&lon=${lon}&units=metric&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return <WeatherForecastDay data={dailyForecast} key={index} />;
            }
            return null;
          })}
        </div>
      </div>
    );
  } else {
    load();
    return null;
  }
}
