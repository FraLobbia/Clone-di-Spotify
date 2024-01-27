import "./style.scss";
import MyNavMini from "./_components/MyNavMini";
import Player from "./_components/Player";
import PlayerMini from "./_components/PlayerMini";
import MyNav from "./_components/myNav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./_pages/NotFound";
import AudioSource from "./_components/AudioSource";
import { Container } from "react-bootstrap";
import Home from "./_pages/Home";
import Album from "./_pages/Album";
import ArtistPage from "./_pages/ArtistPage";
import LikedSongs from "./_pages/LikedSongs";

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
