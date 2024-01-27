import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router";
import ButtonLink from "../_utility/ButtonLink";
import {
	formatTrackDuration,
	isLiked,
	removeLikedSong,
	setLikedSong,
} from "../redux/actions";

const LikedSongs = () => {
	const { likedSongs } = useSelector((store) => store.likedSongs);
	const { track, volume, isPlaying } = useSelector(
		(store) => store.playingTrack
	);
	const { album } = useSelector((store) => store.albumData);
	const { albumId } = useParams();
	const dispatch = useDispatch();

	useEffect(() => {
		console.log(likedSongs);
	}, [likedSongs]);

	return (
		<Container fluid className="p-0 bg-black">
			<Row className="g-4 m-4">
				<Col className="d-flex flex-column justify-content-evenly">
					<h1 className="fw-bold text-white display-5">
						Brani che ti piacciono
					</h1>

					<p className="text-white display-6 m-0">
						Numero tracce: {likedSongs.length}
					</p>
				</Col>
			</Row>

			{/* <div
					className="d-flex justify-content-start align-items-baseline my-3 mb-3"
					id="albumGradient">
					<ButtonLink style={{ borderRadius: "100%" }}>
						<i
							className={`bi bi-${
								isPlaying ? "pause" : "play"
							}-circle-fill display-3 text-success`}></i>
					</ButtonLink>
					<ButtonLink>
						<i className="bi bi-heart fs-4"></i>
					</ButtonLink>
					<ButtonLink>
						<i className="bi bi-arrow-down-circle fs-4"></i>
					</ButtonLink>
					<ButtonLink>
						<i className="bi bi-three-dots fs-4"></i>
					</ButtonLink>
				</div> */}

			<Row className="text-center">
				<Col xs={1}>
					<span className="me-3 text-center">#</span>
				</Col>
				<Col xs={8} sm={5} className="text-start">
					<span>TITOLO</span>
				</Col>
				<Col xs={3} className="d-none d-sm-block">
					<span>RIPRODUZIONI</span>
				</Col>
				<Col xs={3} sm={2} className="ms-auto">
					<span>
						<i className="bi bi-stopwatch"></i>
					</span>
				</Col>
			</Row>

			<hr />
			{likedSongs.length > 0 ? (
				likedSongs.map((track, index) => {
					return (
						<>
							<Row className="mt-4 track-row">
								<Col
									xs={1}
									className="d-flex justify-content-center align-items-center">
									<Button
										variant="link"
										className="play-button fs-2 d-none text-white playButtonClass p-0">
										<i
											className={`bi ${
												isPlaying
													? "bi-pause-circle-fill"
													: "bi-play-circle-fill"
											} fs-2`}></i>
									</Button>
									<span className="text-white track-index">
										{index + 1}
									</span>
								</Col>
								<Col
									xs={7}
									sm={5}
									className="ps-0 d-flex flex-column justify-content-center text-truncate">
									<ButtonLink className="text-white p-0">
										{track.title}
									</ButtonLink>
									<ButtonLink
										to={`/artist/${track.artist.id}`}
										className="p-0">
										{track.artist.name}
									</ButtonLink>
								</Col>
								<Col
									xs={4}
									sm={3}
									className="d-none d-sm-flex align-items-center justify-content-center">
									<span>{track.rank.toLocaleString()}</span>
								</Col>
								<Col
									xs={1}
									className="d-flex justify-content-center align-items-center">
									<Button
										variant="link"
										className="p-0"
										onClick={() =>
											!isLiked(likedSongs, track.id)
												? dispatch(setLikedSong(track))
												: dispatch(
														removeLikedSong(track)
												  )
										}>
										<i
											className={`bi bi-heart fs-5 ${
												isLiked(likedSongs, track.id)
													? "text-success"
													: ""
											}`}></i>
									</Button>
								</Col>
								<Col
									xs={1}
									className="d-flex justify-content-center align-items-center mx-auto">
									<span className="text-white">
										{formatTrackDuration(track.duration)}
									</span>
								</Col>
							</Row>
						</>
					);
				})
			) : (
				<h2 className="text-center mt-5">
					Aggiungi brani preferiti tramite il pulsante a forma di
					cuore!
				</h2>
			)}
		</Container>
	);
};

export default LikedSongs;
