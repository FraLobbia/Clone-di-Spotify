import "./assets/dist/css/style.min.css";
import Home from "./components/Home";
import MyNavMini from "./components/MyNavMini";
import Player from "./components/Player";
import PlayerMini from "./components/PlayerMini";
import MyNav from "./components/myNav";

function App() {
	return (
		<div className="App">
			<div className="d-none d-md-block" style={{ minWidth: "280px" }}>
				<MyNav />
			</div>
			<div className="container-fluid sidebar d-flex p-0 vh-100">
				<Home />
			</div>
			<div className="fixed-bottom container-fluid">
				<Player />
				<PlayerMini />
				<MyNavMini />
			</div>
		</div>
	);
}

export default App;
