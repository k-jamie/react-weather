import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import wind from "./images/wind.png";
import humidity from "./images/humidity.png";

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
            <div className="row">
                <div className="col-6">
                    <div className="main-weather-icon">
                        <WeatherIcon code={props.data.icon} />
                        </div>
              
              <h2>{props.data.description}</h2>
            </div>

            <div className="col-6">
              <div className="overview">
                <p className="date-time"><FormattedDate date={props.data.date} /></p>
                        <p className="city">{props.data.city}</p>
                        <WeatherTemperature celsius={props.data.temperature} />
                
                <ul>
                
                  <li className="wind"><img src={wind} className="speed-humidity" alt="wind icon"></img>{Math.round(props.data.wind)}mph</li>
                  <li><img src={humidity} className="speed-humidity" alt="humidity icon"></img>{props.data.humidity}%</li>
                </ul>
              </div>
            </div>
          </div>
          <hr />
        </div>
        
    )
}