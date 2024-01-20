import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";

const PlayerMini = () => {
	const trackPlaying = useSelector(
		(store) => store.trackPlaying.trackPlaying
	);
	return (
		<div id="playerMini" className="d-md-none py-3 mx-1 fs-8 rounded-3 row">
			<div id="playerMiniData" className="col-7 d-flex">
				<div className="fs-6 pe-3 d-flex">
					<img
						src={trackPlaying.album.cover_medium}
						alt=""
						style={{ height: "40px" }}
					/>
					<div className="fs-6 px-3 flex-column d-flex">
						<Button variant="link" className="py-0 text-white">
							{trackPlaying.title_short}
						</Button>
						<Button variant="link" className="py-0">
							{trackPlaying.artist.name}
						</Button>
					</div>
				</div>
			</div>

			<div className="col-5 px-0 d-flex justify-content-end">
				<button type="button" className="btn text-secondary p-0">
					<i className="bi bi-speaker pe-3"></i>
				</button>
				<button type="button" className="btn text-secondary p-0">
					<i className="bi bi-heart pe-3"></i>
				</button>
				<button
					id="playButtonMini"
					type="button"
					className="btn text-secondary p-0 playButtonclassName">
					<i className="bi bi-play-circle-fill me-4 fs-1 text-white"></i>
				</button>
			</div>
		</div>
	);
};

export default PlayerMini;
