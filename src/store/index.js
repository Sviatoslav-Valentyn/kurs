import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { postSlice } from "./reducers";

const reducer = combineReducers({
    postSlice
})

export const store = configureStore({
    reducer
})