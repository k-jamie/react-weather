import React from "react";

export default function WeatherTemperature(props) {
  
    return (
        <div className="WeatherTemperature">
            <p className="temperature">{Math.round(props.celsius)}<span className="degree">ºC</span></p>
           

        </div>
   
    );
}