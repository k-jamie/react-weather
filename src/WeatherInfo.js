import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
            <div className="row">
            <div className="col-6">
              <img src={props.data.iconUrl} alt={props.data.description} className="main-weather-icon" />
              <h2>{props.data.description}</h2>
            </div>

            <div className="col-6">
              <div className="overview">
                <p className="date-time"><FormattedDate date={props.data.date} /></p>
                <p className="city">{props.data.city}</p>
                <p className="unit">{Math.round(props.data.temperature)}<span className="degree">º</span></p>
                <p>
                  <a href="/" className="active">
                    celsius
                </a>
                |<a href="/"> fahrenheit</a>
                </p>
                <ul>
                
                  <li className="wind">W: {Math.round(props.data.wind)}mph</li>
                  <li>H: {props.data.humidity}%</li>
                </ul>
              </div>
            </div>
          </div>
          <hr />
        </div>
        
    )
}