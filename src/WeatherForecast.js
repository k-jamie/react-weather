import React from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";

export default function WeatherForecast(props) {
    function handleResponse(response) {
        console.log(response.data);
}

    let apiKey = "669a454c793bb7415176348de919e355";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return (<div className="Forecast">
        <div className="row">
            <div className="col">
                <div className="ForecastDate">Tue</div>
           <div className="ForecastIcon"><WeatherIcon code="01d" size={50} /></div> 
                <div className="ForecastTemperatures"><span className="ForecastTempMax">8º</span>5º</div>
            </div>
            </div>
    </div>
    );
    
}
