// src/reducers/index.js
import { combineReducers } from "redux";

import homeReducer from "./homeReducer";
import forecastReducer from "./forecastReducer";

const rootReducer = combineReducers({
	home: homeReducer,
	forecast: forecastReducer,
});

export default rootReducer;
