import { useDispatch, useSelector } from "react-redux";
import { Button, Col, Container, Row } from "react-bootstrap";
import {
	isLiked,
	pauseMusic,
	playMusic,
	removeLikedSong,
	setLikedSong,
	setVolume,
} from "../redux/actions";
import ButtonLink from "../_utility/ButtonLink";
const Player = (props) => {
	const dispatch = useDispatch();
	const { track, volume, isPlaying } = useSelector(
		(store) => store.playingTrack
	);
	const { likedSongs } = useSelector((store) => store.likedSongs);

	return (
		<Container
			fluid
			className="d-none d-md-block bg-black border-top border-tertiary"
			id="player">
			{track && (
				<Row xs={3} className="py-3 fs-5 align-items-center">
					<Col className="d-flex align-items-center justify-content-start gap-3 ps-2">
						<img
							src={track.album.cover_medium}
							alt="cover dell'album"
							style={{ maxWidth: "70px" }}
						/>
						<div className="d-flex flex-column">
							<ButtonLink className="text-white text-start">
								{track.title}
							</ButtonLink>
							<ButtonLink className="text-start">
								{track.artist.name}
							</ButtonLink>
						</div>
						<Button
							variant="link"
							onClick={() =>
								!isLiked(likedSongs, track.id)
									? dispatch(setLikedSong(track))
									: dispatch(removeLikedSong(track))
							}>
							<i
								className={`bi bi-heart ${
									isLiked(likedSongs, track.id)
										? "text-success"
										: ""
								}`}></i>
						</Button>
					</Col>

					{/* <!-- navbar player - gruppo CENTER --> */}
					<Col className="text-center">
						<Row>
							<Col className="d-flex justify-content-center gap-3">
								<ButtonLink aClass={"d-flex"}>
									<i className="bi bi-shuffle"></i>
								</ButtonLink>
								<ButtonLink aClass={"d-flex"}>
									<i className="bi bi-skip-start-fill"></i>
								</ButtonLink>
								<Button
									variant="link"
									id="playButton"
									onClick={() =>
										isPlaying
											? dispatch(pauseMusic())
											: dispatch(playMusic())
									}>
									<i
										className={`bi bi-${
											isPlaying ? "pause" : "play"
										}-circle-fill fs-1 text-white`}></i>
								</Button>
								<ButtonLink aClass={"d-flex"}>
									<i className="bi bi-skip-end-fill "></i>
								</ButtonLink>
								<ButtonLink aClass={"d-flex"}>
									<i className="bi bi-repeat"></i>
								</ButtonLink>
							</Col>
						</Row>

						<Row className="flex-nowrap g-0">
							<Col xs={2}>
								<span
									id="timeProgress"
									className="text-secondary fs-8">
									00:02
								</span>
							</Col>

							<Col>
								<input
									id="progressBar"
									type="range"
									className="w-100"
									min="0"
									max="100"
									value="0"
								/>
							</Col>
							<Col xs={2}>
								<span
									id="trackDuration"
									className="text-secondary fs-8">
									00:30
								</span>
							</Col>
						</Row>
					</Col>

					{/* 	<!-- navbar player - gruppo DX --> */}
					<Col className="d-flex justify-content-end align-items-center gap-2 pe-2">
						<ButtonLink>
							<i className="bi bi-text-right"></i>
						</ButtonLink>
						<ButtonLink>
							<i className="bi bi-list"></i>
						</ButtonLink>
						<ButtonLink>
							<i className="bi bi-speaker"></i>
						</ButtonLink>
						<ButtonLink>
							<i className="bi bi-volume-up"></i>
						</ButtonLink>
						<div>
							<input
								type="range"
								min="0"
								defaultValue="50"
								onChange={(e) =>
									dispatch(setVolume(e.target.value))
								}
								value={volume}
								max="100"
							/>
						</div>
						<ButtonLink>
							<i className="bi bi-arrows-angle-expand"></i>
						</ButtonLink>
					</Col>
				</Row>
			)}
		</Container>
	);
};

export default Player;
