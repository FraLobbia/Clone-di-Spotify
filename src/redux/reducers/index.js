// src/reducers/index.js
import { combineReducers } from "redux";

import homeReducer from "./homeReducer";
import trackPlayingReducer from "./trackPlayingReducer";
import playerReducer from "./playerReducer";
import albumReducer from "./albumReducer";
import likedReducer from "./likedReducer";

const rootReducer = combineReducers({
	home: homeReducer,
	album: albumReducer,
	trackPlaying: trackPlayingReducer,
	player: playerReducer,
	likedSongs: likedReducer,
});

export default rootReducer;
