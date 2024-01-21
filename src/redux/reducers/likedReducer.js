const initialState = {
	likedSongs: [], // Un array per memorizzare le canzoni "liked"
};

const likedReducer = (state = initialState, action) => {
	switch (action.type) {
		case "SET_LIKED_SONG":
			return {
				...state,
				likedSongs: [...state.likedSongs, action.payload],
			};
		default:
			return state;
	}
};

export default likedReducer;
