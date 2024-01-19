import { Button } from "react-bootstrap";

const Home = () => {
	return (
		<>
			{/* <!-- inizio sidebar --> */}

			{/* 	<!-- fine sidebar --> */}

			{/* 	<!-- inizio parte centrale --> */}
			<main
				className="ml-sm-auto px-4 pt-5 bg-dark container-fluid position-relative"
				style={{ backgroundColor: "#0a0a0a" }}>
				<div id="navigationButtons" className="position-absolute">
					<i className="bi bi-chevron-left bg-black text-white p-1 me-2 circle"></i>
					<i className="bi bi-chevron-right bg-black text-white p-1 circle"></i>
				</div>

				<div className="container-fluid d-none d-sm-block">
					<div className="row">
						<div className="col">
							<div className="bg-gradient">
								<div className="row">
									<div className="col-4">
										<div>
											<img
												id="imgHeroSection"
												className="my-3 ms-2 me-4 img-fluid"
												src=""
												alt="foto album"
											/>
										</div>
									</div>
									<div className="col-8">
										<div className="text-white position-relative">
											<p className="mb-1 mt-2">Singolo</p>
											<h2 className="display-4 fw-bold mb-0">
												<span id="spanTrackHeroSection"></span>
											</h2>
											<p className="mb-2">
												<span className=""></span>
											</p>
											<p className="mb-4">
												Ascolta il nuovo brano di
												<span className="artistHeroSection"></span>
												!
											</p>
											<div className="d-inline-block">
												<button
													id="playButtonHeroSection"
													type="button"
													style={{
														width: "200px",
													}}
													className="btn btn-success text-black fw-bold rounded-5 px-5 py-0 me-3 playButtonclassName d-flex align-items-center">
													<i className="bi bi-play-circle-fill fs-1 text me-2"></i>
													<span>Play</span>
												</button>
											</div>
											<button
												type="button"
												className="btn btn-black text-white fw-bold border border-white rounded-5 px-3 me-3">
												Salva
											</button>
											<button
												type="button"
												className="btn btn-black text-white fs-1 p-0 mb-4">
												...
											</button>
											<button className="position-absolute top-0 end-0 text-secondary text-bg-dark border-0 rounded-5 px-2 fs10">
												NASCONDI ANNUNCI
												{/* <!-- necessita di un font-size piu' piccolo --> */}
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div
					className="container-fluid"
					style={{ boxSizing: "border-box" }}>
					<div className="d-flex justify-content-between align-items-center">
						<div>
							<h4 className="text-white fw-bold my-4 d-inline-block">
								{/* Buonasera<!-- (dinamico?) --> */}
							</h4>
						</div>
						<div className="d-sm-none">
							<i className="bi bi-bell text-white me-3"></i>
							<i className="bi bi-clock-history text-white me-3"></i>
							<i className="bi bi-gear text-white"></i>
						</div>
					</div>

					<div className="container-fluid mb-4 d-sm-none">
						<Button href="#" className="text-white me-5">
							Musica
						</Button>
						<Button href="#" className="text-white">
							Podcast e show
						</Button>
					</div>

					<div className="container-fluid">
						<div className="row">
							<div className="col-4 ps-0 d-none d-sm-block">
								<div className="d-flex align-items-center bg-g2d mb-2 me-0 rounded-2">
									<div>
										<img
											src="./Buttonssets/imgs/search/image-5.jpg"
											alt="Immagine playlist"
											width="80px"
											className="img-fluid rounded-start"
										/>
									</div>
									<div>
										<p className="text-white mb-0 ms-2">
											Latino
										</p>
									</div>
								</div>
								<div className="d-flex align-items-center bg-g2d mb-2 me-0">
									<div>
										<img
											src="./Buttonssets/imgs/search/image-4.jpg"
											alt="Immagine playlist"
											width="80px"
											className="img-fluid rounded-start"
										/>
									</div>
									<div>
										<p className="text-white mb-0 ms-2">
											Mint
										</p>
									</div>
								</div>
							</div>
							<div className="col-4 ps-0 d-none d-sm-block">
								<div className="d-flex align-items-center bg-g2d mb-2 me-0 rounded-2">
									<div>
										<img
											src="./Buttonssets/imgs/search/image-52.jpg"
											alt="Immagine playlist"
											width="80px"
											className="img-fluid rounded-start"
										/>
									</div>
									<div>
										<p className="text-white mb-0 ms-2">
											Gaming
										</p>
									</div>
								</div>
								<div className="d-flex align-items-center bg-g2d mb-2 me-0">
									<div>
										<img
											src="./Buttonssets/imgs/search/image-25.jpeg"
											alt="Immagine playlist"
											width="80px"
											className="img-fluid rounded-start"
										/>
									</div>
									<div>
										<p className="text-white mb-0 ms-2">
											Out Now
										</p>
									</div>
								</div>
							</div>
							<div className="col-4 ps-0 d-none d-sm-block">
								<div className="d-flex align-items-center bg-g2d mb-2 me-0 rounded-2">
									<div>
										<img
											src="./Buttonssets/imgs/search/image-28.jpg"
											alt="Immagine playlist"
											width="80px"
											className="img-fluid rounded-start"
										/>
									</div>
									<div>
										<p className="text-white mb-0 ms-2">
											Afro
										</p>
									</div>
								</div>
								<div className="d-flex align-items-center bg-g2d mb-2 me-0">
									<div>
										<img
											src="./Buttonssets/imgs/search/image-27.jpg"
											alt="Immagine playlist"
											width="80px"
											className="img-fluid rounded-start"
										/>
									</div>
									<div>
										<p className="text-white mb-0 ms-2">
											Party
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="container-fluid">
					<div id="discoverArtistsMobile" className="row">
						<div className="col-6 col-lg-4 pe-0 d-sm-none">
							<div className="d-flex justify-content-center align-items-md-center bg-dark mb-2 me-2 rounded-2">
								<div>
									<img
										src="./Buttonssets/imgs/search/image-3.jpg"
										alt="Immagine playlist"
										width="80px"
										className="img-fluid rounded-start"
									/>
								</div>
								<div>
									<p className="text-white mb-0 ms-2 d-none d-sm-block">
										Pollen
									</p>
								</div>
							</div>
							<div className="d-flex justify-content-center align-items-md-center bg-dark mb-2 me-2 rounded-2">
								<div>
									<img
										src="./Buttonssets/imgs/search/image-9.jpg"
										alt="Immagine playlist"
										width="80px"
										className="img-fluid rounded-start"
									/>
								</div>
								<div>
									<p className="text-white mb-0 ms-2 d-none d-sm-block">
										Nija
									</p>
								</div>
							</div>
							<div className="d-flex justify-content-center align-items-md-center bg-dark mb-2 me-2 d-lg-none rounded-2">
								<div>
									<img
										src="./Buttonssets/imgs/search/image-12.jpg"
										alt="Immagine playlist"
										width="80px"
										className="img-fluid rounded-start"
									/>
								</div>
								<div>
									<p className="text-white mb-0 ms-2 d-none d-sm-block">
										All Out
									</p>
								</div>
							</div>
						</div>

						<div className="col-6 col-lg-4 p-0 d-sm-none">
							<div className="d-flex justify-content-center align-items-md-center bg-dark mb-2 me-2 rounded-2">
								<div>
									<img
										src="./Buttonssets/imgs/search/image-2.jpg"
										alt="Immagine playlist"
										width="80px"
										className="img-fluid rounded-start"
									/>
								</div>
								<div>
									<p className="text-white mb-0 ms-2 d-none d-sm-block">
										Dissect
									</p>
								</div>
							</div>
							<div className="d-flex justify-content-center align-items-md-center bg-dark mb-2 me-2 rounded-2">
								<div>
									<img
										src="./Buttonssets/imgs/search/image-26.jpg"
										alt="Immagine playlist"
										width="80px"
										className="img-fluid rounded-start"
									/>
								</div>
								<div>
									<p className="text-white mb-0 ms-2 d-none d-sm-block">
										Friday
									</p>
								</div>
							</div>
							<div className="d-flex justify-content-center align-items-md-center bg-dark mb-2 me-2 d-lg-none rounded-2">
								<div>
									<img
										src="./Buttonssets/imgs/search/image-18.jpg"
										alt="Immagine playlist"
										width="80px"
										className="img-fluid rounded-start"
									/>
								</div>
								<div>
									<p className="text-white mb-0 ms-2 d-none d-sm-block">
										Sleep
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="container-fluid bg-gradient rounded-3 mt-3 d-sm-none">
					<div className="row">
						<div className="col-6 mt-2">
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
						</div>
						<div className="col-6 ps-4 mt-2">
							<div>
								<p className="text-secondary">Playlist</p>
								<h6 className="text-white">
									(nome della playlist)
								</h6>
							</div>
						</div>
						<div className="col-12">
							<div className="d-flex justify-content-between align-items-center my-2">
								<div>
									<i className="bi bi-heart text-white me-3"></i>
									<i className="bi bi-three-dots-vertical text-white"></i>
								</div>
								<div className="d-flex align-items-center">
									<p className="text-white mb-0 me-3">
										(Numero) brani
									</p>
									<i className="bi bi-play-circle-fill fs-2 text-white"></i>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="container-fluid bg-gradient rounded-3 mt-3 d-sm-none">
					<div className="row">
						<div className="col-6 mt-2">
							<div className="d-flex flex-wrap mt-2">
								<img
									src="./Buttonssets/imgs/search/image-35.jpg"
									alt="copertina canzone"
									className="img-fluid"
								/>
							</div>
						</div>
						<div className="col-6 ps-4 mt-2">
							<div>
								<p className="text-secondary">Playlist</p>
								<h6 className="text-white">
									(nome della playlist)
								</h6>
							</div>
						</div>
						<div className="col-12">
							<div className="d-flex justify-content-between align-items-center my-2">
								<div>
									<i className="bi bi-heart text-white me-3"></i>
									<i className="bi bi-three-dots-vertical text-white"></i>
								</div>
								<div className="d-flex align-items-center">
									<p className="text-white mb-0 me-3">
										(Numero) brani
									</p>
									<i className="bi bi-play-circle-fill fs-2 text-white"></i>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="container-fluid">
					{/* <!-- .row-cols-5>* { max-width: 19%; } classNamee da aggiungere per avere 5 card nella stessa fila --> */}
					<div className="d-flex justify-content-between align-items-center">
						<div>
							<h5 className="text-white fw-bold mt-3 mb-0 d-inline-block">
								Altro di ciò che ti piace
							</h5>
						</div>
						<div className="mt-3">
							<Button
								href="#"
								className="text-decoration-none text-secondary fw-bold">
								VISUALIZZA TUTTO
							</Button>
						</div>
					</div>
					<div
						className="row row-cols-2 row-cols-lg-5 mt-4"
						id="discoverOtherArtist">
						{/* 	<!-- qui appendiamo gli album --> */}
					</div>
				</div>
			</main>

			{/* <!-- fine parte centrale -->

<!-- offcanvas --> */}

			{/* <!-- fine offcanvas -->
<!-- sezioni in fondo alla pagina --> */}

			{/* <!-- navbar player - gruppo SX --> */}

			{/* <!-- navbar player schermi piccoli ---> */}

			{/* <!-- navbar bottom per schermi piccoli --> */}

			{/* <!-- audio --> */}
			<audio id="myAudio">
				{/* <!-- <source id="audioSource" src="https://cdns-preview-8.dzcdn.net/stream/c-89dffbddf9f3f2a501d4760ea8215419-3.mp3" type="audio/mp3" /> --> */}
			</audio>
		</>
	);
};
export default Home;
