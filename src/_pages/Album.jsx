import { Button, Col, Container, Row } from "react-bootstrap";
import ButtonLink from "../_utility/ButtonLink";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import {
	getAlbum,
	isLiked,
	pauseMusic,
	playMusic,
	removeLikedSong,
	setLikedSong,
	setPlayingTrack,
} from "../redux/actions";
import { Link } from "react-router-dom";

const Album = () => {
	const isLoading = useSelector((store) => store.loading.loading);
	const { volume, isPlaying } = useSelector((store) => store.playingTrack);
	const currentlyPlayingTrack = useSelector(
		(store) => store.playingTrack.track
	);
	const { album } = useSelector((store) => store.albumData);
	const { likedSongs } = useSelector((store) => store.likedSongs);
	const { albumId } = useParams();
	const dispatch = useDispatch();

	const formatTrackDuration = (durationInSeconds) => {
		const minutes = Math.floor(durationInSeconds / 60);
		const seconds = durationInSeconds % 60;
		return ` ${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
	};

	useEffect(() => {
		dispatch(getAlbum(albumId));
	}, []);

	return (
		<>
			{!isLoading && album ? (
				<Container fluid className="p-3 bg-black">
					<Row className="g-4 m-4">
						<Col md={4} lg={3} className="text-center">
							<img
								id="albumCover"
								src={album.cover_big}
								className="img-fluid mb-3"
								alt="img placeholder"
							/>
						</Col>
						<Col className="d-flex flex-column justify-content-evenly">
							<p className="text-white fw-bold">ALBUM</p>
							<h1
								id="albumTitle-desktop"
								className="fw-bold text-white display-5">
								{album.title}
							</h1>

							<div className="d-flex flex-wrap align-items-center">
								<ButtonLink
									to={`/artist/${album.artist.id}`}
									className="fw-bold text-decoration-none text-white p-0">
									<img
										id="artistPicture"
										src={album.artist.picture}
										alt="artist placeholder"
										className="me-3"
										style={{
											width: "50px",
											height: "50px",
											borderRadius: "50%",
										}}
									/>
									{album.artist.name}
								</ButtonLink>
								<span className="text-white mx-2">•</span>
								<span id="year" className="text-white fw-bold ">
									{album.release_date.substring(0, 4)}
								</span>
							</div>
							<div className="d-none d-sm-block">
								<p className="text-white m-0">
									Numero tracce: {album.nb_tracks}
								</p>
								<p className="text-white m-0">
									Durata:{" "}
									{formatTrackDuration(album.duration)}
								</p>
							</div>
						</Col>
					</Row>

					<div
						className="d-flex justify-content-start align-items-baseline my-3 mb-3"
						id="albumGradient">
						<Button
							variant="link"
							style={{ borderRadius: "100%" }}
							onClick={() =>
								isPlaying
									? dispatch(pauseMusic())
									: dispatch(playMusic())
							}>
							<i
								className={`bi bi-${
									isPlaying ? "pause" : "play"
								}-circle-fill display-3 text-success`}></i>
						</Button>
						<ButtonLink>
							<i className="bi bi-heart fs-4"></i>
						</ButtonLink>
						<ButtonLink>
							<i className="bi bi-arrow-down-circle fs-4"></i>
						</ButtonLink>
						<ButtonLink>
							<i className="bi bi-three-dots fs-4"></i>
						</ButtonLink>
					</div>

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

					{album.tracks.data.map((track, index) => {
						return (
							<Row
								className={`mt-4 track-row ${
									track === currentlyPlayingTrack
										? "currentlyPlaying"
										: ""
								}`}
								key={track.title}
								onClick={() =>
									dispatch(setPlayingTrack(track))
								}>
								<Col
									xs={1}
									className="d-flex justify-content-center align-items-center">
									<Button
										variant="link"
										className="play-button fs-2 d-none text-white p-0"
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
											} fs-2`}></i>
									</Button>
									<span
										className={`text-white ${
											track === currentlyPlayingTrack
												? "currentlyPlaying"
												: ""
										} track-index`}>
										{index + 1}
									</span>
								</Col>
								<Col
									xs={7}
									sm={5}
									className="text-truncate d-flex flex-column align-items-start">
									<Button
										variant="link"
										className="text-white p-0">
										{track.title}
									</Button>
									<Button variant="link" className="p-0">
										<Link to={`/artist/${track.artist.id}`}>
											{track.artist.name}
										</Link>
									</Button>
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
						);
					})}
				</Container>
			) : (
				<div className="spinner-border text-light" role="status">
					<span className="sr-only"></span>
				</div>
			)}
		</>
	);
};

export default Album;
