import { Button, Col, Container, Row } from "react-bootstrap";
import ButtonLink from "./ButtonLink";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { token } from "../token";
import { storeAlbum } from "../redux/actions";

const Album = () => {
	const album = useSelector((store) => store.album.album);
	const { albumId } = useParams();
	const dispatch = useDispatch();

	const fetchAlbumSection = async (albumId) => {
		const endpoint = `https://deezerdevs-deezer.p.rapidapi.com/album/${albumId}`;
		const options = {
			method: "GET",
			headers: {
				"X-RapidAPI-Key": token,
				"X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
			},
		};
		const response = await fetch(endpoint, options);
		if (response.ok) {
			const data = await response.json();
			console.log(data);
			dispatch(storeAlbum(data));
		}
	};
	const formatTrackDuration = (durationInSeconds) => {
		const minutes = Math.floor(durationInSeconds / 60);
		const seconds = durationInSeconds % 60;
		return ` ${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
	};
	const [flag, setFlag] = useState(false);

	useEffect(() => {
		setFlag(!flag);
	}, []);

	useEffect(() => {
		fetchAlbumSection(albumId);
	}, []);

	useEffect(() => {
		console.log("Album:", album);
	}, []);
	return (
		<>
			<Container fluid className="sidebar d-flex p-0 vh-100">
				{album ? (
					<main
						id="main-content"
						className="container-fluid p-0"
						style={{ backgroundColor: "black" }}>
						<section>
							<div
								className="container-fluid position-relative"
								id="albumWrapper">
								<div
									id="albumInfoWrapper"
									className="container-fluid pt-5">
									<Row className="pt-5">
										<Col
											md={4}
											lg={3}
											className="align-self-end text-center text-sm-start">
											<img
												id="albumCover"
												src={album.cover_big}
												className="img-fluid mb-3"
												alt="img placeholder"
												// 	style="
												// 	width: 300px;
												// 	box-shadow: -1px -1px 110px 9px rgba(0, 0, 0, 0.72);
												// 	-webkit-box-shadow: -1px -1px 110px 9px
												// 		rgba(0, 0, 0, 0.72);
												// 	-moz-box-shadow: -1px -1px 110px 9px
												// 		rgba(0, 0, 0, 0.72);
												// "
											/>
										</Col>
										<Col className=" align-self-end">
											<p
												style={{
													fontSize: "1.2vw",
													margin: "0",
												}}
												className="d-none d-sm-block text-white fw-bold">
												ALBUM
											</p>
											<h1
												id="albumTitle-desktop"
												className="mt-0 pb-4 fw-bold text-white display-5 d-none d-sm-block">
												{album.title}
											</h1>

											<h1
												id="albumTitle-mobile"
												className="mt-0 text-white fw-bold d-sm-none"></h1>
											<div className="d-flex flex-wrap align-items-center mb-3">
												<img
													id="artistPicture"
													src=""
													alt="artist placeholder"
													style={{
														width: "24px",
														height: "24px",
														borderRadius: "50%",
													}}
													className="me-2"
												/>
												<ButtonLink
													to="/"
													id="artistName"
													className="fw-bold text-decoration-none text-white"></ButtonLink>
												<span className="text-white d-none d-sm-block">
													&nbsp;•&nbsp;
												</span>
												<span
													id="year"
													className="text-white fw-bold d-none d-sm-block">
													{album.release_date}
												</span>
												<span className="d-lg-block text-white">
													&nbsp;•&nbsp;
												</span>
												<span className="text-white d-lg-block fw-bold">
													{album.nb_tracks}
												</span>
												<span className="text-white d-lg-block">
													{album.duration}
												</span>
											</div>
											<span className="d-sm-none text-secondary mb-0">
												<p className="mb-0 d-inline"></p>
											</span>
										</Col>
									</Row>
								</div>
							</div>
						</section>

						<div
							id="albumGradient"
							className="container-fluid mb-3">
							<div className="container-fluid">
								<div className="player d-flex justify-content-between align-items-center bg-transparent">
									<div className="d-flex align-items-center">
										<i
											className="bi bi-play-circle-fill d-none d-sm-block me-4 playButtonLinkclassName"
											style={{
												color: "#1ed760",
												fontSize: "50px",
											}}></i>
										<i
											className="bi bi-heart d-md-block ps-2 me-4 text-secondary"
											style={{ fontSize: "30px" }}></i>
										<i
											className="bi bi-arrow-down-circle d-md-block me-4 text-secondary"
											style={{ fontSize: "30px" }}></i>
										<i
											className="bi bi-three-dots-vertical d-sm-none text-secondary"
											style={{ fontSize: "30px" }}></i>
										<ButtonLink
											type="ButtonLink"
											className="btn btn-black text-secondary fs-1 mb-4 p-0 d-none d-sm-block">
											...
										</ButtonLink>
									</div>
									<div className="d-flex align-items-center">
										<i
											className="bi bi-shuffle me-4 d-sm-none text-secondary"
											style={{ fontSize: "30px" }}></i>
										<i
											className="bi bi-play-circle-fill d-sm-none playButtonLinkclassName"
											style={{
												color: "#1ed760",
												fontSize: "50px",
											}}></i>
									</div>
								</div>
							</div>

							<Container fluid className="d-none d-sm-block">
								<Row className="border-bottom text-center pb-2">
									<Col xs={1}>
										<span className="me-3 text-center">
											#
										</span>
									</Col>
									<Col xs={11} sm={5} className="text-start">
										<span>TITOLO</span>
									</Col>
									<Col xs={11} sm={5}>
										<span>RIPRODUZIONI</span>
									</Col>
									<Col xs={1}>
										<span>
											<i className="bi bi-stopwatch"></i>
										</span>
									</Col>
								</Row>

								<Row
									className="mt-4 track-row"
									id="tracksContainer">
									{album.tracks.data.map((track, index) => {
										return (
											<>
												<Col
													xs={1}
													className="d-none d-sm-flex justify-content-center align-items-center">
													<Button
														variant="link"
														className="play-button fs-2 d-none text-white playButtonClass p-0 me-3">
														<i className="bi bi-play-circle-fill fs-2"></i>
													</Button>
													<span className="text-white">
														{index + 1}
													</span>
												</Col>
												<Col
													xs={10}
													sm={5}
													className="ps-0 d-flex flex-column justify-content-center">
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
													className="d-none d-sm-flex align-items-center justify-content-end">
													<span>
														{track.rank.toLocaleString()}
													</span>
												</Col>
												<Col
													xs={3}
													className="d-none d-sm-flex justify-content-end align-items-center">
													<Button variant="link">
														<i className="bi bi-heart fs-5 me-2"></i>
													</Button>

													<span className="text-white me-4">
														{formatTrackDuration(
															track.duration
														)}
													</span>
												</Col>
												{/* <Col
													xs={1}
													className="d-sm-none">
													<div className="d-flex justify-content-end align-items-center">
														<i
															className="bi bi-three-dots-vertical text-secondary pe-1 mt-2"
															style={{
																fontSize:
																	"20px",
															}}></i>
													</div>
												</Col> */}
											</>
										);
									})}
								</Row>
							</Container>
						</div>
					</main>
				) : (
					<div className="spinner-border text-light" role="status">
						<span className="sr-only"></span>
					</div>
				)}
			</Container>
		</>
	);
};

export default Album;
