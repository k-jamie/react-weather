import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
 
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data)
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      city: response.data.name,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      description: response.data.weather[0].description,
      date: "Sunday 5 Dec",
    });
  }

    
   

  if (weatherData.ready) {
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
              <img src={weatherData.iconUrl} alt={weatherData.description} className="main-weather-icon" />
              <h2>{weatherData.description}</h2>
            </div>

            <div className="col-6">
              <div className="overview">
                <p className="date-time">{weatherData.date}</p>
                <p className="city">{weatherData.city}</p>
                <p className="unit">{Math.round(weatherData.temperature)}<span className="degree">º</span></p>
                <p>
                  <a href="/" className="active">
                    celsius
                </a>
                |<a href="/"> fahrenheit</a>
                </p>
                <ul>
                
                  <li className="wind">W: {Math.round(weatherData.wind)}mph</li>
                  <li>H: {weatherData.humidity}%</li>
                </ul>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </div>
    );
  } else {

    let apiKey = "bef9f91b8c0ad49d1982384e026f7513";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
 
    return "Loading..."
  }

 
}
