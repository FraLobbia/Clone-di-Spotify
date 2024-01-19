const homeReducer = (state = { home: null }, action) => {
	switch (action.type) {
		case "STORE_HOME":
			return { ...state, home: action.payload };
		default:
			return state;
	}
};

export default homeReducer;
