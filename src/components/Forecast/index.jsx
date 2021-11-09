import React from "react";
import './style.css';
import { convertDate } from "../../utils/dateUtils";

const ForecastDay = ({day}) => (
    <div className="forecast">
        <div className="forecast__day">{convertDate(day.dt)}</div>
        <div className="forecast__icon">
            <img
                src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                style={{ height: "100%" }}
                alt="current weather icon"
            />
        </div>
        <div className="forecast__temp">{Math.round(day.main.temp)} °C</div>
    </div>
);

const Forecast = ({ forecast }) => {
    return (
        <div className="weather__forecast" id="predpoved">
            {forecast.map(day => <ForecastDay day={day} key={day.dt} />)}
        </div>
    );
};

export default Forecast;