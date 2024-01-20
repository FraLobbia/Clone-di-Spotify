const albumReducer = (state = { album: null }, action) => {
	switch (action.type) {
		case "STORE_ALBUM":
			return { ...state, album: action.payload };
		default:
			return state;
	}
};

export default albumReducer;
