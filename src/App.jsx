import { useEffect } from "react";
import "./assets/dist/css/style.min.css";
import Home from "./components/Home";
import MyNavMini from "./components/MyNavMini";
import Player from "./components/Player";
import PlayerMini from "./components/PlayerMini";
import MyNav from "./components/myNav";
import { token } from "./token";
import { useDispatch, useSelector } from "react-redux";
import { storeHome } from "./redux/actions";
import store from "./redux/store";
function App() {
	const dispatch = useDispatch();
	const home = useSelector((store) => store.home);
	const handleSection = async (artistName) => {
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
			} else {
				throw new Error("Error in fetching songs");
			}
		} catch (err) {
			console.log("error", err);
		}
	};

	useEffect(() => {
		handleSection("queen");
		console.log(home);
	}, []);

	return (
		<div className="App">
			<div className="d-flex vh-100">
				<MyNav />

				{home && (
					<div className="container-fluid  d-flex p-0">
						<Home />
					</div>
				)}
			</div>
			<div className="fixed-bottom container-fluid">
				<Player />
				<PlayerMini />
				<MyNavMini />
			</div>
			<audio id="myAudio">
				{/* <!-- <source id="audioSource" src="https://cdns-preview-8.dzcdn.net/stream/c-89dffbddf9f3f2a501d4760ea8215419-3.mp3" type="audio/mp3" /> --> */}
			</audio>
		</div>
	);
}

export default App;
