//actions/index.js

export const storeHome = (home) => ({
	type: "STORE_HOME",
	payload: home,
});
export const storeTrackPlaying = (trackPlaying) => ({
	type: "STORE_TRACK_PLAYING",
	payload: trackPlaying,
});
export const setIsPlaying = (boolean) => ({
	type: "SET_IS_PLAYING",
	payload: { boolean },
});
