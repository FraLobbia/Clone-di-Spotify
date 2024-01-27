import { Button, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import ButtonLink from "../_utility/ButtonLink";
import { isLiked, pauseMusic, playMusic } from "../redux/actions";

const PlayerMini = () => {
	const dispatch = useDispatch();
	const { track, volume, isPlaying } = useSelector(
		(store) => store.playingTrack
	);
	const { likedSongs } = useSelector((store) => store.likedSongs);

	return (
		<Row
			id="playerMini"
			className="d-md-none bg-dark-gray py-3 mx-1 rounded-3 flex-nowrap">
			<div className="d-flex align-items-center flex-grow-1 flex-shrink-1 text-truncate">
				{track && (
					<>
						<ButtonLink
							to={`/albumId/${track.album.id}`}
							className="p-0">
							<img
								src={track.album.cover_medium}
								alt="cover album"
								style={{ height: "60px" }}
								className="ms-2"
							/>
						</ButtonLink>

						<div className="fs-6 px-3 d-flex flex-column justify-content-center">
							<ButtonLink className="p-0 text-white">
								{track.title_short}
							</ButtonLink>
							<ButtonLink
								to={`/artist/${track.artist.id}`}
								className="p-0">
								{track.artist.name}
							</ButtonLink>
						</div>
					</>
				)}
			</div>

			<Col className="px-0 d-flex justify-content-end">
				<Button variant="link" className="speaker">
					<i className="bi bi-speaker fs-3"></i>
				</Button>
				<Button variant="link" className="heart">
					<i
						className={`bi bi-heart fs-3 ${
							isLiked(likedSongs, track.id) ? "text-success" : ""
						}`}></i>
				</Button>
				<Button variant="link" className="dots">
					<i className="bi bi-three-dots-vertical fs-3"></i>
				</Button>
				<Button
					variant="link"
					onClick={() =>
						isPlaying
							? dispatch(pauseMusic())
							: dispatch(playMusic())
					}>
					<i
						className={`bi ${
							isPlaying
								? "bi-pause-circle-fill"
								: "bi-play-circle-fill"
						} me-3 display-1 text-white`}></i>
				</Button>
			</Col>
		</Row>
	);
};

export default PlayerMini;
