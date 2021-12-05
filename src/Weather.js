import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState(null);
  function handleResponse(response) {
    console.log(response.data)
    setTemperature(response.data.main.temp);
    setReady(true);
  }

  if (ready) {
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
              <img src="" className="main-weather-icon" />
              <h2>Few clouds</h2>
            </div>

            <div className="col-6">
              <div className="overview">
                <p className="date-time">Sunday</p>
                <p className="city">London</p>
                <p className="unit">{Math.round(temperature)}<span className="degree">º</span></p>
                <p>
                  <a href="/" className="active">
                    celsius
                </a>
                |<a href="/"> fahrenheit</a>
                </p>
                <ul>
                  <li className="wind">7mp/h</li>
                  <li>72%</li>
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
    let city = "London"
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
 
    return "Loading..."
  }

 
}
