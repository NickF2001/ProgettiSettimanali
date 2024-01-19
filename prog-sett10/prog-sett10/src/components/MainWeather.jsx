import React, { useState } from 'react'
import axios from 'axios'
import './MainWeather.css'

function MainWeather() {

  const [data, setData] = useState({})
  const [location, setLocation] = useState('')
  // const [week, setWeek] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=eb2e657251724ce3a1143224856d2154&units=metric`;

  // const APIdays = `https://api.openweathermap.org/data/2.5/forecast?lat=${data.coord.lat}&lon=${data.coord.lon}&appid=25e1b8a92164beae4d571e17a214d5f2&units=metric`

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }

  /*
  const weekWeader = (e) => {
    if (e.key === 'Enter') {
      axios.get(APIdays).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }
  */

  const clearPage = () => {
    setData(''); // Cancella i dati
  };

  return (
    <div className="app">
      
      <div className="search">
        <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter Location'
          type="text" />
      
      <button className="btn" onClick={clearPage}>Clear</button>
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
            {data.weather ? <img src={`./src/assets/${data.weather[0].icon}.png`} alt={data.weather[0].main} /> : null}
            {data.weather ? <p className='text-center'>{data.weather[0].main}</p> : null}
          </div>
        </div>

        {data.name !== undefined &&
          <div className="bottom">
            <div className="feels">
              {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°C</p> : null}
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} MPH</p> : null}
              <p>Wind Speed</p>
            </div>
          </div>
        }

      </div>
    </div>
  );
}


export default MainWeather;