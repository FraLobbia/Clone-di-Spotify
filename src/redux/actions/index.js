import { token } from "../../token";
import { endLoading, startLoading } from "../reducers/loadingReducer";
export const STORE_ARTIST = "STORE_ARTIST";
export const STORE_ALBUM = "STORE_ALBUM";
export const SET_PLAYING_TRACK = "SET_PLAYING_TRACK";
export const SET_LIKED_SONG = "SET_LIKED_SONG";
export const PLAY_MUSIC = "PLAY_MUSIC";
export const PAUSE_MUSIC = "PAUSE_MUSIC";

export const storeArtist = (artist) => ({
	type: STORE_ARTIST,
	payload: artist,
});
export const storeAlbum = (album) => ({
	type: STORE_ALBUM,
	payload: album,
});
export const setPlayingTrack = (track) => ({
	type: SET_PLAYING_TRACK,
	payload: track,
});
export const playMusic = () => ({
	type: PLAY_MUSIC,
});
export const pauseMusic = () => ({
	type: PAUSE_MUSIC,
});

export const setLikedSong = (track) => {
	return {
		type: SET_LIKED_SONG,
		payload: track,
	};
};
export const removeLikedSong = (trackId) => {
	return {
		type: "REMOVE_LIKED_SONG",
		payload: trackId,
	};
};

export const getAlbum = (albumId) => {
	return async (dispatch, getState) => {
		dispatch(startLoading());
		const endpoint = `https://deezerdevs-deezer.p.rapidapi.com/album/${albumId}`;
		const options = {
			method: "GET",
			headers: {
				"X-RapidAPI-Key": token,
				"X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
			},
		};
		const response = await fetch(endpoint, options);
		if (response.ok) {
			const data = await response.json();
			dispatch(storeAlbum(data));
			dispatch(endLoading());
		}
	};
};

export const getArtist = (artistName) => {
	return async (dispatch, getState) => {
		dispatch(startLoading());
		try {
			let response = await fetch(
				"https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
					artistName,
				{
					method: "GET",
					headers: {
						"X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
						"X-RapidAPI-Key": token,
					},
				}
			);
			if (response.ok) {
				let { data } = await response.json();
				dispatch(storeArtist(data));
				dispatch(setPlayingTrack(data[5]));
				dispatch(endLoading());
			} else {
				throw new Error("Error in fetching songs");
			}
		} catch (err) {
			console.log("error", err);
		}
	};
};
