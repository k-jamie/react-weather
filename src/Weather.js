import React from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "London",
    temperature: 13,
    wind: 7,
    humidity: 72,
    date: "Sunday 15:41",
    description: "Few clouds",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
  };

  return (
    <div className="App">
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-8">
              <input
                type="search"
                placeholder="Type a city..."
                className="form-control"
                autoComplete="off"
              />
            </div>
            <div className="col-4">
              <input type="submit" value="Search" className="btn w-100" />
            </div>
          </div>
        </form>
        <div className="row">
          <div className="col-6">
            <img src={weatherData.imgUrl} className="main-weather-icon" alt="placeholder weather icon" />
            <h2>{weatherData.description}</h2>
          </div>

          <div className="col-6">
            <div className="overview">
              <p className="date-time">{weatherData.date}</p>
              <p className="location">{weatherData.city}</p>
              <h1>{weatherData.temperature}ºC</h1>
              <p>
                <a href="/" className="active">
                  celsius
                </a>
                |<a href="/"> fahrenheit</a>
              </p>
              <ul>
                <li className="wind">{weatherData.wind}mp/h</li>
                <li>{weatherData.humidity}%</li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
    
      </div>
      <a href="https://github.com/k-jamie/react-weather" className="source-link" target="_blank" rel="noreferrer">Open-source code</a>, by Karen Jamieson
    </div>
  );
}
