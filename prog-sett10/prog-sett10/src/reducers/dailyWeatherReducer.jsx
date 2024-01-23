import { SET_DAILY_WEATHER } from '../actions/dailyWeatherActions';

const initialState = {
  dailyData: [''],
};

const dailyWeatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DAILY_WEATHER:
      return {
        ...state,
        dailyData: action.payload,
      };
    default:
      return state;
  }
};

export default dailyWeatherReducer;