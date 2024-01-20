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
					className="px-4 pt-5 bg-dark position-relative">
					<div id="navigationButtons" className="position-absolute">
						<Button variant="link">
							<i className="bi bi-chevron-left bg-black p-1 me-2 circle"></i>
						</Button>
						<Button variant="link">
							<i className="bi bi-chevron-right bg-black p-1 circle"></i>
						</Button>
					</div>

					<Container
						fluid
						className="d-none d-sm-block bg-gradient position-relative">
						<Row>
							<Col xs={4}>
								<img
									className="w-100 p-3"
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
								<Button
									variant="success"
									id="playButtonHeroSection"
									style={{
										width: "200px",
									}}
									className="text-black rounded-5 px-2 py-0 d-flex align-items-center justify-content-evenly">
									<i className="bi bi-play-circle-fill fs-1 me-2"></i>
									<span className="me-2 fw-bold ">
										Riproduci
									</span>
								</Button>
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
								<Button
									variant="dark"
									className="position-absolute top-0 end-0 m-2 text-secondary border-0 rounded-5 fs-6">
									NASCONDI ANNUNCI
								</Button>
							</Col>
						</Row>
					</Container>

					<Container fluid className="d-none d-sm-block">
						<Row>
							<h4 className=" fw-bold my-4 d-inline-block">
								Buonasera
							</h4>
							{home.map((track, index) => {
								return (
									<>
										{index < 6 && (
											<Col xs={4}>
												<Link
													to={`/albumId/${track.album.id}`}>
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
												</Link>
											</Col>
										)}
									</>
								);
							})}
						</Row>
					</Container>

					<Container fluid className="d-sm-none">
						<Row>
							<Col xs={12} className="d-flex justify-content-end">
								<i className="bi bi-bell  me-3"></i>
								<i className="bi bi-clock-history  me-3"></i>
								<i className="bi bi-gear "></i>
							</Col>
							<Col
								xs={6}
								className="justify-content-center d-flex">
								<Button variant="link">Musica</Button>
							</Col>
							<Col
								xs={6}
								className="justify-content-center d-flex">
								<Button variant="link">Podcast e show</Button>
							</Col>
							{home.map((track, index) => {
								return (
									<>
										{index < 6 && (
											<Col
												xs={6}
												className="justify-content-center d-flex g-2">
												<Link
													to={`/albumId/${track.album.id}`}>
													<img
														src={
															home[index + 15]
																.album.cover
														}
														alt="Immagine playlist"
														width="180px"
														className="img-fluid rounded-2"
													/>
												</Link>
											</Col>
										)}
									</>
								);
							})}
						</Row>
					</Container>

					<div className="d-flex justify-content-between align-items-center">
						<div>
							<h5 className=" fw-bold mt-3 mb-0 d-inline-block">
								Altro di ciò che ti piace
							</h5>
						</div>
						<div className="mt-3 d-none d-sm-block">
							<Button variant="link">VISUALIZZA TUTTO</Button>
						</div>
					</div>

					<Container
						fluid
						className="bg-gradient rounded-3 mt-3 d-sm-none">
						<Row>
							<Col xs={6} className="mt-2">
								{home.map((track, index) => {
									return (
										<>
											{index < 6 && (
												<Link
													to={`/albumId/${
														home[index + 10].album
															.id
													}`}>
													<img
														src={
															home[index + 10]
																.album.cover
														}
														alt="copertina album"
														style={{
															width: "50%",
														}}
														className="rounded-2 p-1"
													/>
												</Link>
											)}
										</>
									);
								})}
							</Col>

							<Col
								xs={6}
								className="ps-4 mt-2 d-flex flex-column justify-content-center">
								<p className="text-secondary m-0">Album</p>
								<h6 className="">{home[24].album.title}</h6>
								<img
									src={home[24].album.cover}
									alt="copertina album"
									className="rounded-2 w-75"
								/>
								<div className="d-flex align-items-center justify-content-start gap-3 mt-3">
									<i className="bi bi-play-circle-fill display-1 "></i>
									<i className="bi bi-heart"></i>
									<i className="bi bi-three-dots-vertical "></i>
								</div>
							</Col>
						</Row>
					</Container>

					<Container fluid>
						<Row
							className="row-cols-2 row-cols-sm-3 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5 mt-4 g-4"
							id="discoverOtherArtist">
							{home.map((track, index) => {
								return (
									<>
										{index < 6 && (
											<div className=" ">
												<Link
													to={`/albumId/${track.album.id}`}>
													<img
														src={
															track.album
																.cover_big
														}
														className="card-img-top  self"
														style={{
															minWidth: "100px",
														}}
														alt="copertina album/playlist"
													/>
												</Link>
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
				<div className="spinner-border text-light" role="status">
					<span className="sr-only"></span>
				</div>
			)}
		</>
	);
};
export default Home;
