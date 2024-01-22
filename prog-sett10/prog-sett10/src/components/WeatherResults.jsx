import React, { useState } from "react";
import axios from "axios";
import "./WeatherResults.css";

function MainWeather() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const apiKey = "eb2e657251724ce3a1143224856d2154";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;
  const weekURL = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${apiKey}&units=metric`;

  const searchLocation = () => {
    axios.get(url).then((response) => {
      setData(response.data);
      console.log(response.data);
    });
    setLocation("");
  };

  const fetchForecast = async () => {
    try {
      const response = await fetch(weekURL);
      const data = await response.json();
      setWeatherData(data);
      console.log(data);
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
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
          </div>
          <div className="description">
            {data.weather ? (
              <img
                src={`./src/assets/${data.weather[0].icon}.png`}
                alt={data.weather[0].main}
              />
            ) : null}
            {data.weather ? (
              <p className="text-center">{data.weather[0].main}</p>
            ) : null}
          </div>
        </div>

        {data.name !== undefined && (
          <div className="bottom">
            <div className="feels mx-4">
              {data.main ? (
                <p className="bold">{data.main.feels_like.toFixed()}°C</p>
              ) : null}
              <p>Feels Like</p>
            </div>
            <div className="humidity mx-4">
              {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
              <p>Humidity</p>
            </div>
            <div className="wind mx-4">
              {data.wind ? (
                <p className="bold">{data.wind.speed.toFixed()} MPH</p>
              ) : null}
              <p>Wind Speed</p>
            </div>
          </div>
        )}

        {weatherData && (
          <div className="forecast">
            <div className="day  mx-4">
              <div>
                <img
                  src={`./src/assets/${weatherData.list[8].weather[0].icon}.png`}
                  alt=""
                  height={90}
                />
              </div>
              <p>{weatherData.list[8].dt_txt}</p>
            </div>

            <div className="day  mx-4">
              <div>
                <img
                  src={`./src/assets/${weatherData.list[16].weather[0].icon}.png`}
                  alt=""
                  height={90}
                />
              </div>
              <p>{weatherData.list[16].dt_txt}</p>
            </div>

            <div className="day mx-4">
              <div>
                <img
                  src={`./src/assets/${weatherData.list[24].weather[0].icon}.png`}
                  alt=""
                  height={90}
                />
              </div>
              <p>{weatherData.list[24].dt_txt}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default MainWeather;
