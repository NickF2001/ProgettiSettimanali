// Importo innanzitutto la costante SET_FORECAST_WEATHER dal file che contiene le actions per il meteo giornaliero (dailyWeatherActions)
import { SET_DAILY_WEATHER } from '../actions/dailyWeatherActions';

const initialState = {
  dailyData: [''], // Inizializzo lo stato del reducer con un oggetto che ha una proprietà dailyData inizializzata come un array vuoto.
};

const dailyWeatherReducer = (state = initialState, action) => {
  switch (action.type) {  // La funzione switch controlla il tipo di azione. Viene scelta perché in caso l'action non corrispondesse a nessun 'case',
    // il reducer restituirebbe semplicemente lo stato corrente.
    case SET_DAILY_WEATHER:
      return { // Il reducer è una funzione pura che permette due parametri:
        ...state, // lo stato corrente, che vado a recuperare con lo spread operator, che è necessario per mantenere immutabile lo stato esistente
        dailyData: action.payload, // e un'action (un oggetto che rappresenta l'azione scatenata), che va a sovrascrivere la proprietà indicata (in questo caso, dailyData)
      };
    default:
      return state;
  }
};

export default dailyWeatherReducer;