import { Button, Col, Container, Row } from "react-bootstrap";
import ButtonLink from "./ButtonLink";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { token } from "../token";
import { storeAlbum } from "../redux/actions";

const LikedSongs = () => {
	const likedSong = useSelector((store) => store.likedSongs.likedSongs);
	const album = useSelector((store) => store.album.album);
	const { albumId } = useParams();
	const dispatch = useDispatch();
	const [flag, setFlag] = useState(false);
	// const fetchAlbumSection = async (albumId) => {
	// 	const endpoint = `https://deezerdevs-deezer.p.rapidapi.com/album/${albumId}`;
	// 	const options = {
	// 		method: "GET",
	// 		headers: {
	// 			"X-RapidAPI-Key": token,
	// 			"X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
	// 		},
	// 	};
	// 	const response = await fetch(endpoint, options);
	// 	if (response.ok) {
	// 		const data = await response.json();
	// 		console.log(data);
	// 		dispatch(storeAlbum(data));
	// 	}
	// };
	// const formatTrackDuration = (durationInSeconds) => {
	// 	const minutes = Math.floor(durationInSeconds / 60);
	// 	const seconds = durationInSeconds % 60;
	// 	return ` ${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
	// };
	// const [flag, setFlag] = useState(false);
	const formatTrackDuration = (durationInSeconds) => {
		const minutes = Math.floor(durationInSeconds / 60);
		const seconds = durationInSeconds % 60;
		return ` ${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
	};
	useEffect(() => {
		setFlag(!flag);
	}, []);

	useEffect(() => {
		// fetchAlbumSection(albumId);
	}, []);

	useEffect(() => {
		// console.log("Album:", album);
	}, []);
	return (
		<>
			{likedSong ? (
				<Container fluid className="p-0 bg-black">
					<Row className="g-4 m-4">
						<Col md={4} lg={3} className="text-center">
							<img
								id="albumCover"
								src={album.cover_big}
								className="img-fluid mb-3"
								alt="img placeholder"
								// style={{
								// 	width: "300px",
								// 	boxShadow:
								// 		" -1px -1px 110px 9px rgba(0, 0, 0, 0.72)",
								// 	WebkitBoxShadow:
								// 		" -1px -1px 110px 9px rgba(0, 0, 0, 0.72)",
								// 	MozBoxShadow:
								// 		" -1px -1px 110px 9px rgba(0, 0, 0, 0.72)",
								// }}
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
						<ButtonLink style={{ borderRadius: "100%" }}>
							<i className="bi bi-play-circle-fill display-3 text-success"></i>
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

					{likedSong.map((track, index) => {
						return (
							<>
								<Row className="mt-4 track-row">
									<Col
										xs={1}
										className="d-flex justify-content-center align-items-center">
										<Button
											variant="link"
											className="play-button fs-2 d-none text-white playButtonClass p-0">
											<i className="bi bi-play-circle-fill fs-2"></i>
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
										<span>
											{track.rank.toLocaleString()}
										</span>
									</Col>
									<Col
										xs={1}
										className="d-flex justify-content-center align-items-center">
										<Button variant="link" className="p-0">
											<i className="bi bi-heart fs-5"></i>
										</Button>
									</Col>
									<Col
										xs={1}
										className="d-flex justify-content-center align-items-center mx-auto">
										<span className="text-white">
											{formatTrackDuration(
												track.duration
											)}
										</span>
									</Col>
								</Row>
							</>
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

export default LikedSongs;
