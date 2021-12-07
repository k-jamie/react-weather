import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast() {
    return <div className="Forecast">
        <div className="row">
            <div className="col">
                <div className="ForecastDate">Tue</div>
           <div className="ForecastIcon"><WeatherIcon code="01d" size={50} /></div> 
                <div className="ForecastTemperatures"><span className="ForecastTempMax">8º</span>5º</div>
            </div>
            </div>
        </div>;
    
}
