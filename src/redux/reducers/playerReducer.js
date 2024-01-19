// reducers/playerReducer.js

const initialState = {
	isPlaying: false,
	// Altri stati relativi al player
};

const playerReducer = (state = initialState, action) => {
	switch (action.type) {
		case "IS_PLAYING":
			return {
				...state,
				isPlaying: action.payload,
			};
		default:
			return state;
	}
};

export default playerReducer;
