import "./assets/dist/css/style.min.css";
import Home from "./components/Home";
import MyNavMini from "./components/MyNavMini";
import Player from "./components/Player";
import PlayerMini from "./components/PlayerMini";
import MyNav from "./components/myNav";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Album from "./components/Album";
import NotFound from "./components/NotFound";
import LikedSongs from "./components/LikedSongs";
import ArtistPage from "./components/ArtistPage";
import AudioSource from "./components/AudioSource";
import { Container } from "react-bootstrap";

function App() {
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

				<Container fluid className="fixed-bottom p-0">
					<Player />
					<PlayerMini />
					<MyNavMini />
				</Container>
			</BrowserRouter>
			<AudioSource />
		</>
	);
}

export default App;
