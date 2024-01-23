import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "../reducers/weatherReducer";


const store = configureStore({
    reducer: weatherReducer,
});


export default store;