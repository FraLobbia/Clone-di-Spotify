//actions/index.js

export const storeHome = (home) => ({
	type: "STORE_HOME",
	payload: home,
});
export const storeForecast = (forecast) => ({
	type: "STORE_FORECAST",
	payload: forecast,
});
