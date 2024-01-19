// src/reducers/index.js
import { combineReducers } from "redux";

import homeReducer from "./homeReducer";
import trackPlayingReducer from "./trackPlayingReducer";

const rootReducer = combineReducers({
	home: homeReducer,
	trackPlaying: trackPlayingReducer,
});

export default rootReducer;
