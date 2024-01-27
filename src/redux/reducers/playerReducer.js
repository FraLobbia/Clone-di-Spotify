import {
	PAUSE_MUSIC,
	PLAY_MUSIC,
	SET_CURRENT_TIME_TRACK,
	SET_PLAYING_TRACK,
	SET_VOLUME,
} from "../actions";

const initialState = {
	isPlaying: false,
	track: "",
	volume: 50,
	currentTime: 0,
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
		case SET_VOLUME:
			return {
				...state,
				volume: action.payload,
			};
		case SET_CURRENT_TIME_TRACK:
			return {
				...state,
				currentTime: action.payload,
			};
		default:
			return state;
	}
};

export default playerReducer;
