import { useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Home = () => {
	const home = useSelector((store) => store.home.home);
	const generi = ["Latino", "Mint", "Gaming", "Out Now", "Afro", "Party"];
	useEffect(() => {
		console.log(home);
	}, []);
	return (
		<>
			{home ? (
				<Container
					fluid
					className="ml-sm-auto px-4 pt-5 bg-dark position-relative">
					<div id="navigationButtons" className="position-absolute">
						<Button variant="link">
							<i className="bi bi-chevron-left bg-black p-1 me-2 circle"></i>
						</Button>
						<Button variant="link">
							<i className="bi bi-chevron-right bg-black p-1 circle"></i>
						</Button>
					</div>

					<Container fluid className="d-none d-sm-block bg-gradient">
						<Row>
							<Col xs={4}>
								<img
									id="imgHeroSection"
									className="w-100"
									src={home[2].album.cover_medium}
									alt="foto album"
								/>
							</Col>
							<Col xs={8} className="p-3">
								<p>Singolo</p>
								<h2 className="display-4 fw-bold">
									<span>{home[2].artist.name}</span>
								</h2>
								<p className="mb-4">
									Ascolta il nuovo brano di
									<span> {home[2].artist.name}</span>!
								</p>
								<div className="d-inline-block">
									<Button
										variant="success"
										id="playButtonHeroSection"
										style={{
											width: "200px",
										}}
										className="text-black fw-bold rounded-5 px-5 py-0 me-3 playButtonclassName d-flex align-items-center">
										<i className="bi bi-play-circle-fill fs-1 me-2"></i>
										<span>Play</span>
									</Button>
								</div>
								<div>
									<Button
										variant="black"
										className="fw-bold border border-white rounded-5 px-3 me-3">
										Salva
									</Button>
									<Button
										variant="link"
										className="btn btn-black  fs-1 p-0 mb-4">
										...
									</Button>
								</div>
								{/* <button className="position-absolute top-0 end-0 text-secondary text-bg-dark border-0 rounded-5 px-2 fs10">
										NASCONDI ANNUNCI
									</button> */}
							</Col>
						</Row>
					</Container>

					<Container fluid>
						<div className="d-flex justify-content-between align-items-center">
							<div>
								<h4 className=" fw-bold my-4 d-inline-block">
									{/* Buonasera<!-- (dinamico?) --> */}
								</h4>
							</div>
							<div className="d-sm-none">
								<i className="bi bi-bell  me-3"></i>
								<i className="bi bi-clock-history  me-3"></i>
								<i className="bi bi-gear "></i>
							</div>
						</div>

						<div className="mb-4 d-sm-none d-flex  justify-content-evenly">
							<Button variant="link" className=" me-5">
								Musica
							</Button>
							<Button variant="link" className="">
								Podcast e show
							</Button>
						</div>
					</Container>

					<Container fluid>
						<Row>
							{home.map((track, index) => {
								return (
									<>
										{index < 6 && (
											<Col
												xs={4}
												className=" ps-0 d-none d-sm-block">
												<div className="d-flex align-items-center bg-g2d mb-2 me-0 rounded-2">
													<div>
														<img
															src={
																track.album
																	.cover
															}
															alt="Immagine playlist"
															width="80px"
															className="img-fluid rounded-start"
														/>
													</div>
													<div>
														<p className=" mb-0 ms-2">
															{generi[index]}
														</p>
													</div>
												</div>
											</Col>
										)}
									</>
								);
							})}
						</Row>
					</Container>

					<Container fluid>
						<Row id="discoverArtistsMobile">
							<Col xs={6} lg={4} className="pe-0 d-sm-none">
								<div className="d-flex justify-content-center align-items-md-center bg-dark mb-2 me-2 rounded-2">
									<div>
										<img
											src={home[3].album.cover_small}
											alt="Immagine playlist"
											width="80px"
											className="img-fluid rounded-start"
										/>
									</div>
									<div>
										<p className=" mb-0 ms-2 d-none d-sm-block">
											Pollen
										</p>
									</div>
								</div>
								<div className="d-flex justify-content-center align-items-md-center bg-dark mb-2 me-2 rounded-2">
									<div>
										<img
											src={home[4].album.cover_small}
											alt="Immagine playlist"
											width="80px"
											className="img-fluid rounded-start"
										/>
									</div>
									<div>
										<p className=" mb-0 ms-2 d-none d-sm-block">
											Nija
										</p>
									</div>
								</div>
								<div className="d-flex justify-content-center align-items-md-center bg-dark mb-2 me-2 d-lg-none rounded-2">
									<div>
										<img
											src={home[5].album.cover_small}
											alt="Immagine playlist"
											width="80px"
											className="img-fluid rounded-start"
										/>
									</div>
									<div>
										<p className=" mb-0 ms-2 d-none d-sm-block">
											All Out
										</p>
									</div>
								</div>
							</Col>

							<Col xs={6} lg={4} className="p-0 d-sm-none">
								<div className="d-flex justify-content-center align-items-md-center bg-dark mb-2 me-2 rounded-2">
									<div>
										<img
											src={home[6].album.cover_small}
											alt="Immagine playlist"
											width="80px"
											className="img-fluid rounded-start"
										/>
									</div>
									<div>
										<p className=" mb-0 ms-2 d-none d-sm-block">
											Dissect
										</p>
									</div>
								</div>
								<div className="d-flex justify-content-center align-items-md-center bg-dark mb-2 me-2 rounded-2">
									<div>
										<img
											src={home[7].album.cover_small}
											alt="Immagine playlist"
											width="80px"
											className="img-fluid rounded-start"
										/>
									</div>
									<div>
										<p className=" mb-0 ms-2 d-none d-sm-block">
											Friday
										</p>
									</div>
								</div>
								<div className="d-flex justify-content-center align-items-md-center bg-dark mb-2 me-2 d-lg-none rounded-2">
									<div>
										<img
											src={home[8].album.cover_small}
											alt="Immagine playlist"
											width="80px"
											className="img-fluid rounded-start"
										/>
									</div>
									<div>
										<p className=" mb-0 ms-2 d-none d-sm-block">
											Sleep
										</p>
									</div>
								</div>
							</Col>
						</Row>
					</Container>

					<Container
						fluid
						className="bg-gradient rounded-3 mt-3 d-sm-none">
						<Row>
							<Col xs={6} className="mt-2">
								<div
									style={{ width: "160px" }}
									className="d-flex flex-wrap mt-2">
									<img
										src="./Buttonssets/imgs/search/image-30.jpg"
										alt="copertina canzone"
										width="80px"
									/>
									<img
										src="./Buttonssets/imgs/search/image-31.jpg"
										alt="copertina canzone"
										width="80px"
									/>
									<img
										src="./Buttonssets/imgs/search/image-32.jpg"
										alt="copertina canzone"
										width="80px"
									/>
									<img
										src="./Buttonssets/imgs/search/image-33.jpg"
										alt="copertina canzone"
										width="80px"
									/>
								</div>
							</Col>
							<Col xs={6} className="ps-4 mt-2">
								<div>
									<p className="text-secondary">Playlist</p>
									<h6 className="">(nome della playlist)</h6>
								</div>
							</Col>
							<Col xs={12}>
								<div className="d-flex justify-content-between align-items-center my-2">
									<div>
										<i className="bi bi-heart  me-3"></i>
										<i className="bi bi-three-dots-vertical "></i>
									</div>
									<div className="d-flex align-items-center">
										<p className=" mb-0 me-3">
											(Numero) brani
										</p>
										<i className="bi bi-play-circle-fill fs-2 "></i>
									</div>
								</div>
							</Col>
						</Row>
					</Container>

					<Container
						fluid
						className="bg-gradient rounded-3 mt-3 d-sm-none">
						<Row>
							<Col xs={6} className="mt-2">
								<div className="d-flex flex-wrap mt-2">
									<img
										src="./Buttonssets/imgs/search/image-35.jpg"
										alt="copertina canzone"
										className="img-fluid"
									/>
								</div>
							</Col>
							<Col xs={6} className="ps-4 mt-2">
								<div>
									<p className="text-secondary">Playlist</p>
									<h6 className="">(nome della playlist)</h6>
								</div>
							</Col>
							<Col xs={12}>
								<div className="d-flex justify-content-between align-items-center my-2">
									<div>
										<i className="bi bi-heart  me-3"></i>
										<i className="bi bi-three-dots-vertical "></i>
									</div>
									<div className="d-flex align-items-center">
										<p className=" mb-0 me-3">
											(Numero) brani
										</p>
										<i className="bi bi-play-circle-fill fs-2 "></i>
									</div>
								</div>
							</Col>
						</Row>
					</Container>

					<Container fluid>
						{/* <!-- .row-cols-5>* { max-width: 19%; } classNamee da aggiungere per avere 5 card nella stessa fila --> */}
						<div className="d-flex justify-content-between align-items-center">
							<div>
								<h5 className=" fw-bold mt-3 mb-0 d-inline-block">
									Altro di ciò che ti piace
								</h5>
							</div>
							<div className="mt-3">
								<Button variant="link">VISUALIZZA TUTTO</Button>
							</div>
						</div>
						<Row
							className="row-cols-2 row-cols-sm-3 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-6 mt-4"
							id="discoverOtherArtist">
							{home.map((track, index) => {
								return (
									<>
										{index < 6 && (
											<div className=" ">
												<img
													src={track.album.cover_big}
													className="card-img-top  self"
													style={{
														minWidth: "100px",
													}}
													alt="copertina album/playlist"
												/>
												<div className="text-truncate">
													<h6 className="text-truncate card-title  fw-bold mt-3 mb-2">
														{track.album.title}
													</h6>
													<p className="card-text text-secondary">
														Classifica{" "}
														{track.album.rank}
													</p>
												</div>
											</div>
										)}
									</>
								);
							})}
						</Row>
					</Container>
				</Container>
			) : (
				<div class="spinner-border text-light" role="status">
					<span class="sr-only"></span>
				</div>
			)}
		</>
	);
};
export default Home;
