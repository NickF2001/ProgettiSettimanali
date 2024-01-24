// Importo innanzitutto la costante SET_FORECAST_WEATHER dal file che contiene le actions per il meteo dei giorni successivi (forecastWeatherActions)
import { SET_FORECAST_WEATHER } from '../actions/forecastWeatherActions';

const initialState = {
  forecastData: [], // Inizializzo lo stato del reducer con un oggetto che ha una proprietà forecastData inizializzata come un array vuoto.
};

const forecastReducer = (state = initialState, action) => {
  switch (action.type) { // La funzione switch controlla il tipo di azione. Viene scelta perché in caso l'action non corrispondesse a nessun 'case',
    // il reducer restituirebbe semplicemente lo stato corrente.
    case SET_FORECAST_WEATHER:
      return { // Il reducer è una funzione pura che permette due parametri:
        ...state, // lo stato corrente, che vado a recuperare con lo spread operator, che è necessario per mantenere immutabile lo stato esistente
        forecastData: action.payload, // e un'action (un oggetto che rappresenta l'azione scatenata), che va a sovrascrivere la proprietà indicata (in questo caso, forecastData)
      };
    default:
      return state;
  }
};


export default forecastReducer;