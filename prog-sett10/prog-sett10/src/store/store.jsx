// Uno store in Redux è l'oggetto che tiene lo stato dell'intera applicazione, che può essere poi modificato grazie a reducers e actions.
import { configureStore } from "@reduxjs/toolkit"; // Configuro uno store Redux grazie a @reduxjs/toolkit,
// in modo da poter successivamente importare la funzione 'configureStore' dal pacchetto
import weatherReducer from "../reducers/weatherReducer"; // Importo anche il reducer weatherReducer, che contiene gli altri due reducers (forecastReducer e weatherReducer)


const store = configureStore({ // La funzione 'configureStore' richiede un solo oggetto di configurazione come argomento,
    reducer: weatherReducer, // per questo i reducers forecastReducer e weatherReducer sono stati gestiti nel reducer importato sopra.
}); // Inoltre in questo caso, l'oggetto di configurazione ha una chiave reducer perché punta al reducer weatherReducer


export default store;