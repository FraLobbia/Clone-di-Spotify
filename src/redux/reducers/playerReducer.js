import { PAUSE_MUSIC, PLAY_MUSIC, SET_PLAYING_TRACK } from "../actions";

const initialState = {
	isPlaying: false,
	track: "",
};

const playerReducer = (state = initialState, action) => {
	switch (action.type) {
		case PLAY_MUSIC:
			return {
				...state,
				isPlaying: true,
			};
		case PAUSE_MUSIC:
			return {
				...state,
				isPlaying: false,
			};
		case SET_PLAYING_TRACK:
			return {
				...state,
				track: action.payload,
			};
		default:
			return state;
	}
};

export default playerReducer;
