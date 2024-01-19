// src/reducers/userReducer.js
const trackPlayingReducer = (state = { trackPlaying: null }, action) => {
	switch (action.type) {
		case "STORE_TRACK_PLAYING":
			return { ...state, trackPlaying: action.payload };
		default:
			return state;
	}
};

export default trackPlayingReducer;
