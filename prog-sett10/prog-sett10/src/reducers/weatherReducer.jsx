// Il reducer è una funzione pura che va a modificare lo stato corrente.
// In parole semplici, è incaricato di decidere cosa fare quando arriva un'azione (qualcosa che è successo nella tua app)
// A seconda di che azione è, il reducer effettuerà dei cambiamenti. Quindi, gestisce le modifiche allo stato dell'app
import { combineReducers } from 'redux';

//Importo i due reducer specifici che gestiranno parti diverse dello stato dell'applicazione
// Essi verranno combinati in uno solo, cioè weatherReducer.
import dailyWeatherReducer from './dailyWeatherReducer'
import forecastReducer from './forecastReducer'

const weatherReducer = combineReducers({
    dailyWeather: dailyWeatherReducer, // queste due proprietà/chiavi sono una parte dello stato dell'applicazione gestita dai rispettivi reducer
    forecastWeather: forecastReducer,
})

export default weatherReducer;