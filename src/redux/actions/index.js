export const storeHome = (home) => ({
	type: "STORE_HOME",
	payload: home,
});
export const storeAlbum = (album) => ({
	type: "STORE_ALBUM",
	payload: album,
});
export const storeTrackPlaying = (trackPlaying) => ({
	type: "STORE_TRACK_PLAYING",
	payload: trackPlaying,
});
export const setIsPlaying = (boolean) => ({
	type: "SET_IS_PLAYING",
	payload: { boolean },
});

export const setLikedSong = (track) => {
	return {
		type: "SET_LIKED_SONG",
		payload: track,
	};
};
