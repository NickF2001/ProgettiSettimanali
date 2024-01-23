import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { setDailyData } from '../actions/dailyWeatherActions';
import { setForecastWeather } from '../actions/forecastWeatherActions'
import axios from 'axios';
import './WeatherResults.css';

function WeatherResults() {

  const [location, setLocation] = useState("");
  const dispatch = useDispatch();

  // Estrai i dati necessari con una sola chiamata useSelector
  const { dailyData, forecastData } = useSelector(state => ({
    dailyData: state.dailyWeather.dailyData,
    forecastData: state.forecastWeather.forecastData,
  }));

  // Resta del codice...

  // costanti per il meteo giornaliero
  const cityName = dailyData.name || '';
  const weather = dailyData.weather || '';
  const main = dailyData.main || '';
  const wind = dailyData.wind || '';

  // costanti per il meteo dei tre giorni successivi
  const day = forecastData?.list || null;

  //APIkeys
  const apiKey = 'eb2e657251724ce3a1143224856d2154';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;
  const weekURL = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${apiKey}&units=metric`;

  // chiamata fetch per meteo giornaliero
  const searchLocation = () => {
    try {
      axios.get(url).then((response) => {
      dispatch(setDailyData(response.data));
      });
    } catch (err) {
      console.error("Error fetching weather data:", err);
    }
  };

  // chiamata fetch per meteo dei successivi tre giorni
  const fetchForecast = async () => {
    try {
      const response = await fetch(weekURL);
      const data = await response.json();
      dispatch(setForecastWeather(data));
    } catch (error) {
      console.error("Error fetching forecast data:", error);
    }
  };
  

  const handleSearch = () => {
    if (location.length > 3) {
      searchLocation();
      fetchForecast();
    }
  };

  return (
    <div className="app">
      <div className="search">
        <input
          type="text"
          placeholder="Enter city name"
          value={location}
          onChange={(e) => {
            setLocation(e.target.value);
          }}
        />

        <button className="btn" onClick={() => handleSearch()}>
          Search
        </button>
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{cityName}</p>
          </div>
          <div className="temp">
            {main ? <h1>{main?.temp.toFixed()}°C</h1> : null}
          </div>
          <div className="description">
            {weather ? (
              <img
                src={`./src/assets/${weather[0].icon}.png`}
                alt={weather[0].main}
              />
            ) : null}
            {weather ? (
              <p className="text-center">{weather[0].main}</p>
            ) : null}
          </div>
        </div>

        {cityName !== undefined && (
          <div className="bottom">
            <div className="feels mx-4">
              {main ? (
                <p className="bold">{main.feels_like.toFixed()}°C</p>
              ) : null}
              <p>Feels Like</p>
            </div>
            <div className="humidity mx-4">
              {weather.main ? <p className="bold">{main.humidity}%</p> : null}
              <p>Humidity</p>
            </div>
            <div className="wind mx-4">
              {wind ? (
                <p className="bold">{wind.speed.toFixed()} MPH</p>
              ) : null}
              <p>Wind Speed</p>
            </div>
          </div>
        )}

        {day != null && (
          <div className="forecast">
            <div className="day  mx-4">
              <div>
                <img
                  src={`./src/assets/${day[8]?.weather[0].icon}.png`}
                  alt=""
                  height={90}
                />
              </div>
              <p>{day[8]?.dt_txt.slice(0, 10)}</p>
            </div>

            <div className="day  mx-4">
              <div>
                <img
                  src={`./src/assets/${day[16]?.weather[0].icon}.png`}
                  alt=""
                  height={90}
                />
              </div>
              <p>{day[16]?.dt_txt.slice(0, 10)}</p>
            </div>

            <div className="day mx-4">
              <div>
                <img
                  src={`./src/assets/${day[24]?.weather[0].icon}.png`}
                  alt=""
                  height={90}
                />
              </div>
              <p>{day[24]?.dt_txt.slice(0, 10)}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default WeatherResults;
