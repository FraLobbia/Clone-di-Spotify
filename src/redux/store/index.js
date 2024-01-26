import { combineReducers, configureStore } from "@reduxjs/toolkit";
import artistReducer from "../reducers/artistReducer";
import albumReducer from "../reducers/albumReducer";
import playerReducer from "../reducers/playerReducer";
import likedReducer from "../reducers/likedReducer";
import { loadingReducer } from "../reducers/loadingReducer";

// qui assemblo nella variabile "rootReducer" tutti i reducer
const rootReducer = combineReducers({
	artistData: artistReducer,
	albumData: albumReducer,
	playingTrack: playerReducer,
	likedSongs: likedReducer,
	loading: loadingReducer,
});

const store = configureStore({
	reducer: rootReducer,
});

export default store;
