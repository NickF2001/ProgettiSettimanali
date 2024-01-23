import { SET_FORECAST_WEATHER } from '../actions/forecastWeatherActions';

const initialState = {
  forecastData: [],
};

const forecastReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FORECAST_WEATHER:
      return {
        ...state,
        forecastData: action.payload,
      };
    default:
      return state;
  }
};

export default forecastReducer;