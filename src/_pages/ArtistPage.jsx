import { Col, Container, Row } from "react-bootstrap";
import ButtonLink from "../_utility/ButtonLink";
import { useParams } from "react-router";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const ArtistPage = () => {
	const { artistId } = useParams();
	const { isPlaying } = useSelector((store) => store.playingTrack);
	useEffect(() => {
		console.log(artistId);
	}, []);

	return (
		<body className="bg-dark">
			<Container fluid className="sidebar d-flex p-0 vw-100">
				<main
					id="main-content"
					className="ml-sm-auto bg-dark container-fluid position-relative"
					style={{ backgroundColor: "#0a0a0a" }}>
					<div id="navigationButtons" className="position-absolute">
						<i className="bi bi-chevron-left bg-black text-white p-1 me-2 circle"></i>
						<i className="bi bi-chevron-right bg-black text-white p-1 circle"></i>
					</div>

					<div id="navigationButtons" className="position-absolute">
						<i className="bi bi-chevron-left bg-black text-white p-1 me-2 circle"></i>
						<i className="bi bi-chevron-right bg-black text-white p-1 circle"></i>
					</div>

					<Row className="position-relative">
						<div className="col-12 p-0 w-100">
							<img
								src=""
								alt=""
								className="w-100"
								id="artistBackground"
								style={{
									objectFit: "cover",
									backgroundSize: "cover",
									backgroundPosition: "center",
									maxHeight: "350px",
								}}
							/>
							<div className="position-absolute bottom-0 start-0 p-3 text-white">
								<p className="mb-0 d-none d-md-block mb-2">
									<i className="bi bi-patch-check-fill text-primary"></i>
									Artista verificato
								</p>
								<h1
									id="artistName"
									className="display-2 fw-bold artistName"
									style={{ marginTop: "-15px" }}>
									ciao
								</h1>
								<p
									id="numFan"
									className="mt-3 d-none d-md-block"></p>
							</div>
						</div>
					</Row>
					<Row>
						<Col
							xs={11}
							md={7}
							id="tracksContainer"
							className="text-white mt-2 ms-2">
							<div className="d-flex align-items-center">
								<button
									type="button"
									className="btn p-0 d-none d-md-block"
									id="play-button">
									<i
										className={`bi ${
											isPlaying
												? "bi-pause-circle-fill"
												: "bi-play-circle-fill"
										}  display-4 text-success`}></i>
								</button>
								<ButtonLink
									href=""
									className="text-white text-decoration-none">
									<p className="mb-0 mx-md-4 border border-1 rounded px-2 pb-0">
										Seguiti
									</p>
								</ButtonLink>
								<ButtonLink href="">
									<i className="bi bi-three-dots text-secondary fs-3 d-none d-md-block"></i>
								</ButtonLink>
								<ButtonLink href="">
									<i className="bi bi-three-dots-vertical text-secondary fs-3 d-block d-md-none ms-4"></i>
								</ButtonLink>
								<i className="bi bi-shuffle ms-auto fs-3 text-secondary d-block d-md-none"></i>
								<button
									type="button"
									className="btn p-0 d-block d-md-none"
									id="play-button"
									style={{ marginRight: "-8%" }}>
									<i
										className={`bi ${
											isPlaying
												? "bi-pause-circle-fill"
												: "bi-play-circle-fill"
										} ms-3 display-3 text-success`}></i>
								</button>
							</div>

							<div className="d-flex align-items-center d-block d-md-none mt-3 mb-4">
								<div className="position-relative">
									<img
										id="artistImg2"
										src=""
										alt=""
										style={{ height: "70px" }}
										className="rounded-circle"
									/>
									<span
										className="position-absolute bottom-0 end-0 bg-success rounded-circle"
										style={{
											fontSize: "12px",
											paddingInline: "6px",
										}}>
										<i className="bi bi-heart-fill fs-5"></i>
									</span>
								</div>
								<div className="ms-2">
									<p
										className="mb-0 fw-semibold"
										style={{ fontSize: "18px" }}>
										Brani che ti piacciono
									</p>
									<p
										className="text-muted mb-0 artistName"
										style={{ fontSize: "18px" }}>
										8 brani di
										<span id="artistName2"></span>
									</p>
								</div>
							</div>

							<h5 className="mb-4 mt-3">Popolari</h5>

							<div id="albumContainer"></div>
						</Col>

						<Col
							xs={4}
							className="text-white mt-5 ms-4 d-none d-md-block">
							<h5 className="mt-5 mb-3">
								Brani che ti piacciono
							</h5>
							<div className="d-flex align-items-center">
								<div className="position-relative">
									<img
										id="artistImg"
										src=""
										alt=""
										style={{ height: "70px" }}
										className="rounded-circle"
									/>
									<span
										className="position-absolute bottom-0 end-0 me-2 bg-success px-1 rounded-circle"
										style={{ fontSize: "12px" }}>
										<i className="bi bi-heart-fill"></i>
									</span>
								</div>
								<div className="ms-2">
									<p
										className="mb-1 fw-bolder"
										style={{ fontSize: "14px" }}>
										Hai messo Mi piace a 11 brani
									</p>
									<p
										className="text-muted mb-0 artistName"
										style={{ fontSize: "14px" }}>
										Di <span id="artistName3"></span>
									</p>
								</div>
							</div>
						</Col>
					</Row>
				</main>
			</Container>
		</body>
	);
};

export default ArtistPage;
