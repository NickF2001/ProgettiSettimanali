export const SET_FORECAST_WEATHER = 'SET_FORECAST_WEATHER';

export const setForecastWeather = (forecastData) => {
    return {
        type: SET_FORECAST_WEATHER,
        payload: forecastData,
    }
}
