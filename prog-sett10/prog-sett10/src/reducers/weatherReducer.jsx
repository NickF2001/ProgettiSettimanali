import { combineReducers } from 'redux';
import dailyWeatherReducer from './dailyWeatherReducer'
import forecastReducer from './forecastReducer'

const weatherReducer = combineReducers({
    dailyWeather: dailyWeatherReducer,
    forecastWeather: forecastReducer,
})

export default weatherReducer;