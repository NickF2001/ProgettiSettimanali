// importo nel componente:
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // la libreria Bootrap per predisporre il CSS
import { useDispatch, useSelector } from 'react-redux'; // React Redux per la gestione dello stato tramite Redux
import { setDailyData } from '../actions/dailyWeatherActions'; // le due azioni setDailyData e setForecastWeather per aggiornare lo stato Redux
import { setForecastWeather } from '../actions/forecastWeatherActions';
import axios from 'axios'; // axios per effettuare chiamate API
import './WeatherResults.css';


function WeatherResults() {

  // Inizializzo lo stato iniziale:
  // utilizzo lo stato locale di React per gestire la località inserita dall'utente
  const [location, setLocation] = useState("");


  // Gestione dello stato Redux:
  // utilizzando useSelector, il componente estrae i dati necessari dallo stato Redux, che contengono rispettivamente i dati meteorologici giornalieri e le previsioni.
  const dispatch = useDispatch();
  const { dailyData, forecastData } = useSelector(state => ({
    dailyData: state.dailyWeather.dailyData, // "dailyWeather" è il nome della proprietà che abbiamo assegnato al reducer dailyWeatherReducer in weatherReducer
    forecastData: state.forecastWeather.forecastData, // mentre "forecastWeather" è il nome della proprietà che abbiamo assegnato a forecastReducer sempre all'interno di weatherReducer
  })); // "dailyData" e "forecastData" invece sono i parametri passati a payload nelle loro rispettive acions: dailyWeatherActions e forecastWeatherActions


  // Costanti per il meteo giornaliero:
  // creo delle costanti riferite ai dati che mi serve avere, renderizzando una stringa vuota se nulli.
  // successivamente, le utilizzerò per ottenere le informazioni necessarie, inserendole nei rispettivi elementi HTML
  const cityName = dailyData.name || '';
  const weather = dailyData.weather || '';
  const main = dailyData.main || '';
  const wind = dailyData.wind || '';

  // Costante per il meteo dei tre giorni successivi:
  // creo la costante che mi andrà a fornire le icon e la data dei tre giorni successivi al giorno corrente
  const day = forecastData?.list || null;

  // URL e APIkey:
  // dopo aver dichiarato la mia chiave API in una costante per autenticare le richieste,
  // vado a definire l'URL per richiedere i dati meteorologici giornalieri e le previsioni a 4 giorni
  const apiKey = 'eb2e657251724ce3a1143224856d2154';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`; // questo è l'URL per i dati meteorologici della giornata corrente
  const weekURL = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${apiKey}&units=metric`; // questo invece è l'URL per richiedere i dati meteorologici dei giorni successivi


  //Chiamate fetch:
  // in entrambe utilizzo il dispatch per poter aggiornare lo stato Redux con i dati che otterrò

  // Chiamata fetch per meteo giornaliero:
  const searchLocation = () => {
    try {
      axios.get(url).then((response) => {
      dispatch(setDailyData(response.data));
      });
    } catch (err) {
      console.error("Error fetching weather data:", err);
    }
  };

  // Chiamata fetch per meteo dei successivi tre giorni:
  const fetchForecast = async () => {
    try {
      const response = await fetch(weekURL);
      const data = await response.json();
      dispatch(setForecastWeather(data));
    } catch (error) {
      console.error("Error fetching forecast data:", error);
    }
  };
  // (ho voluto utilizzare due metodi differenti per eseguire le fetch in modo da sperimentare entrambi)

  const handleSearch = () => { // Chiamo poi le funzioni in cui ho svolto le fetch, searchLocation e fetchForecast, per ottenere e visualizzare i dati meteorologici
      searchLocation();
      fetchForecast(); // Il pulsante con classe 'btn' aggiunto successivamente eseguirà questa funzione se cliccato
  };

  return (
    <div className="app">
      <div className="search">
        <input // Vado a creare una sezione di ricerca che contiene un campo input di tipo testo per poter inserire il nome della città
          type="text"
          placeholder="Enter city name"
          value={location}
          onChange={(e) => {
            setLocation(e.target.value); // L'input è associato allo stato locale 'location' e viene aggiornato grazie alla funzione 'setLocation' quando viene digitato del testo
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
            {weather ? ( // Questa sezione (div className='top') contiene le informazioni principali della città cercata,
              <img // come il nome (<div className="location">), la temperatura (<div className="temp">), e la descrizione del tempo (<div className="description">).
                src={`./src/assets/${weather[0].icon}.png`}
                alt={weather[0].main} // Utilizzo più volte un operatore ternario per gestire l'output in base all'esistenza dell'oggetto, in questo caso 'weather'
              />
            ) : null}
            {weather ? (
              <p className="text-center">{weather[0].main}</p>
            ) : null}
          </div>
        </div>

        {cityName !== undefined && ( // Questa è la sezione inferiore (<div className="bottom">)
          <div className="bottom">
            <div className="feels mx-4">
              {main ? (
                <p className="bold">{main.feels_like.toFixed()}°C</p> // Essa contiene informazioni come la sensazione termica (Feels Like), l'umidità (Humidity), e la velocità del vento (Wind Speed)
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

        {day != null && ( // Su diverse parti del codice utilizzo espressioni condizionali per decidere se visualizzare determinati elementi o no in base a date condizioni, come quello su questa riga
        // Questo aiuta a evitare errori quando i dati necessari sono undefined o non esistono, come per l'operatore ternario
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
