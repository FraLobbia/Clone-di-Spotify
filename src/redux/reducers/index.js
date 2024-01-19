// src/reducers/index.js
import { combineReducers } from "redux";

import homeReducer from "./homeReducer";
import trackPlayingReducer from "./trackPlayingReducer";
import playerReducer from "./playerReducer";

const rootReducer = combineReducers({
	home: homeReducer,
	trackPlaying: trackPlayingReducer,
	player: playerReducer,
});

export default rootReducer;
