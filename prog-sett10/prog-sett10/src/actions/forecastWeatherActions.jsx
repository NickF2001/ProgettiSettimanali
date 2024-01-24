// Definisco una costante SET_FORECAST_WEATHER che rappresenta il tipo di azione che voglio effettuare
// Questa costante sarà utilizzata nel reducer per identificare il tipo di azione che si sta verificando
export const SET_FORECAST_WEATHER = 'SET_FORECAST_WEATHER';

//Creo poi la funzione setDailyData che mi restituisce il seguente oggetto.
export const setForecastWeather = (forecastData) => {
    return { // Questo oggetto è l'azione stessa, ed è composta da due proprietà/chiavi: type e payload
        type: SET_FORECAST_WEATHER, // type indica il tipo di azione che si sta verificando
        payload: forecastData, // payload contiene i dati effettivi da aggiungere allo stato. In questo caso, sono i dati meteorologici giornalieri (dailyData)
    }
}
