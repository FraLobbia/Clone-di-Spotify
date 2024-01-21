import { useEffect } from "react";
import "./assets/dist/css/style.min.css";
import Home from "./components/Home";
import MyNavMini from "./components/MyNavMini";
import Player from "./components/Player";
import PlayerMini from "./components/PlayerMini";
import MyNav from "./components/myNav";
import { token } from "./token";
import { useDispatch, useSelector } from "react-redux";
import { storeHome, storeTrackPlaying } from "./redux/actions";
import store from "./redux/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Album from "./components/Album";
import NotFound from "./components/NotFound";
import LikedSongs from "./components/LikedSongs";
import ArtistPage from "./components/ArtistPage";

function App() {
	const dispatch = useDispatch();
	const home = useSelector((store) => store.home);
	const store = useSelector((store) => store);
	const trackPlaying = useSelector(
		(store) => store.trackPlaying.trackPlaying
	);
	const audio = document.getElementById("myAudio");

	const fetchHomeSection = async (artistName) => {
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
				dispatch(storeHome(data));
				dispatch(storeTrackPlaying(data[5]));
			} else {
				throw new Error("Error in fetching songs");
			}
		} catch (err) {
			console.log("error", err);
		}
	};

	useEffect(() => {
		fetchHomeSection("queen");
		console.log(store);
	}, []);

	return (
		<>
			<BrowserRouter>
				<MyNav>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/albumId/:albumId" element={<Album />} />
						<Route
							path="/artist/:artistId"
							element={<ArtistPage />}
						/>
						<Route path="/liked-songs" element={<LikedSongs />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</MyNav>
				{trackPlaying && (
					<>
						<div>
							<div className="fixed-bottom container-fluid p-0">
								<Player />
								<PlayerMini />
								<MyNavMini />
							</div>
						</div>
						<audio id="myAudio">
							<source
								id="audioSource"
								src={trackPlaying.preview}
								type="audio/mp3"
							/>
						</audio>
					</>
				)}
			</BrowserRouter>
		</>
	);
}

export default App;
