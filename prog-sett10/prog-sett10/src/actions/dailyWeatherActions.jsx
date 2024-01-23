// export const SET_DAILY_NAME = 'SET_DAILY_NAME';
export const SET_DAILY_WEATHER = 'SET_DAILY_WEATHER';

/*
export const setDailyName = (newDailyName) => {
    return {
        type: SET_DAILY_WEATHER,
        payload: newDailyName,
    }
}
*/

export const setDailyData = (dailyData) => {
    return {
        type: SET_DAILY_WEATHER,
        payload: dailyData,
    }
}