import React, { useState } from "react";

export default function WeatherTemperature(props) {
    const [unit, setUnit] = useState("celsius");
    function showFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }

    function showCelsius(event) {
        event.preventDefault();
        setUnit("celsius");
    }
    
    function fahrenheit() {
        return (props.celsius * 9 / 5) + 32;
    }

    if (unit === "celsius") {
        return (
            <div className="WeatherTemperature">
                <p className="temperature">{Math.round(props.celsius)}<span className="degree">º</span></p>
                <p>
                    <a href="/" className="active unit">
                        celsius
                </a>
                    {""} |  <a href="/" onClick={showFahrenheit}>  fahrenheit</a>
                </p>

            </div>
   
        );
    } else { 
    
        return (
            <div className="WeatherTemperature">
                <p className="temperature">{Math.round(fahrenheit())}<span className="degree">º</span></p>
                <p>
                    <a href="/" >
                        celsius 
                </a>
                  {""} | <a href="/" onClick={showCelsius} className="active unit"> fahrenheit</a>
                </p>

            </div>
        )
     }

}