// Definisco una costante SET_DAILY_WEATHER che rappresenta il tipo di azione che voglio effettuare
// Questa costante sarà utilizzata nel reducer per identificare il tipo di azione che si sta verificando
export const SET_DAILY_WEATHER = 'SET_DAILY_WEATHER';

//Creo poi la funzione setDailyData che mi restituisce il seguente oggetto.
export const setDailyData = (dailyData) => {
    return { // Questo oggetto è l'azione stessa, ed è composta da due proprietà/chiavi: type e payload
        type: SET_DAILY_WEATHER, // type indica il tipo di azione che si sta verificando
        payload: dailyData, // payload contiene i dati effettivi da aggiungere allo stato. In questo caso, sono i dati meteorologici giornalieri (dailyData)
    }
}
/*
Nel componente WeatherResults, quando chiamerò dispatch(setDailyData(response.data)), invierò questa azione allo store
Il reducer associato a questa azione (dailyWeatherReducer) verrà attivato, e il tipo di azione (SET_DAILY_WEATHER)
sarà utilizzato per identificare quale parte dello stato aggiornare e con quali dati.
*/