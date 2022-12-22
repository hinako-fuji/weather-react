import React from "react";
import CurrentTime from "./CurrentTime";

export default function Summary() {
  return (
    <div className="row summary ">
      <div className="col-sm-5">
        <div>
          <h1>Yokohama</h1>
        </div>

        <div className="description">
          <ul>
            <li>
              <CurrentTime />
            </li>
            <li>Few clouds</li>
            <li>Humidity: 78%</li>
            <li>Wind: 1 m/s</li>
          </ul>
        </div>
      </div>

      <div className="col-md-7 p-0 align-self-center">
        <div className="current-icon-temp ">
          <div class=" main-icon ">
            <img
              src="http://openweathermap.org/img/wn/02n@2x.png"
              alt="weather-icon"
              id="icon"
            />

            <span className="current-temp">10 </span>

            <span className="units">
              <a href="/">°C</a> | <a href="/">°F</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
