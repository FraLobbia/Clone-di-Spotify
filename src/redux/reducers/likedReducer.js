import { REMOVE_LIKED_SONG, SET_LIKED_SONG } from "../actions";

const initialState = {
	likedSongs: [], // Un array per memorizzare le canzoni "liked"
};

const likedReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_LIKED_SONG:
			return {
				...state,
				likedSongs: [...state.likedSongs, action.payload],
			};
		case REMOVE_LIKED_SONG:
			// Filtra le tracce rimuovendo quella con l'ID corrispondente
			const updatedLikedSongs = state.likedSongs.filter(
				(track) => track.id !== action.payload.id
			);
			return {
				...state,
				likedSongs: updatedLikedSongs,
			};
		default:
			return state;
	}
};

export default likedReducer;
