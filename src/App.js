import React, { useEffect, useState } from "react";
import "./App.css";
import Forecast from "./components/Forecast";
import Loading from "./components/Loading";
import Weather from "./components/Weather";
import cities from "./utils/cities";

const App = () => {

  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [city, setCity] = useState('Prague');


  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_MY_API_ID}`)
      .then(response => response.json())
      .then(json => {
        setWeather(json);
      });

    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${process.env.REACT_APP_MY_API_ID}`)
      .then(response => response.json())
      .then(json => {
        setForecast(json.list.filter((_, index) => index % 8 === 0));
      });
  }, [city]);

  return (
    <div className="App">
      <div className="container">
        <h1>My Weather App</h1>
        <div className="select-wrapper">
          <select
            className="select"
            name="cityselect"
            id="cityselect"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          >
            {cities.map(city => <option value={city} key={city}>{city}</option>)}
          </select>
        </div>
        <div className="weather">
          {(weather !== null && weather !== undefined) ? <Weather weather={weather} /> : <Loading />}
          {(forecast !== null && forecast !== undefined) ? <Forecast forecast={forecast} /> : <Loading />}
        </div>
      </div>
    </div>
  );
};

export default App;
