import { STORE_ARTIST } from "../actions";

const initialState = {};

const artistReducer = (state = initialState, action) => {
	switch (action.type) {
		case STORE_ARTIST:
			return { ...state, artist: action.payload };
		default:
			return state;
	}
};

export default artistReducer;
