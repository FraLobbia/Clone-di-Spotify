const Player = () => {
	return (
		<div
			className="container-fluid d-none d-md-block bg-black text-secondary pe-4"
			id="player">
			<div className="row py-3 fs-5 align-items-center">
				<div
					id="dataPlayer"
					className="col-4 d-flex align-items-center justify-content-start text-start">
					{/* <!-- qui va a riempire la funzione riempiDataPlayer() con i dati della track da riprodurre --> */}
				</div>

				{/* <!-- navbar player - gruppo CENTER --> */}
				<div className="col-4 text-center px-0 d-flex flex-column justify-content-center align-items-center">
					<div className="col-4 text-center px-0 d-flex justify-content-center align-items-center">
						<button
							type="button"
							className="btn text-secondary p-0">
							<i className="bi bi-shuffle fs-4 me-2"></i>
						</button>
						<button
							type="button"
							className="btn text-secondary p-0">
							<i className="bi bi-skip-start-fill fs-4 me-2"></i>
						</button>
						<button
							id="playButton"
							type="button"
							className="btn text-secondary p-0 playButtonclassName">
							<i className="bi bi-play-circle-fill fs-1 me-2 text-white"></i>
						</button>
						<button
							type="button"
							className="btn text-secondary p-0">
							<i className="bi bi-skip-end-fill fs-4 me-2"></i>
						</button>
						<button
							type="button"
							className="btn text-secondary p-0">
							<i className="bi bi-repeat fs-4"></i>
						</button>
					</div>
					<div className="w-100">
						<span id="timeProgress" className="fs-8">
							00:02
						</span>
						<input
							id="progressBar"
							type="range"
							className="w-50"
							min="0"
							max="100"
							value="0"
						/>
						<span id="trackDuration" className="fs-8"></span>
					</div>
				</div>

				{/* 	<!-- navbar player - gruppo DX --> */}
				<div className="col-4 text-end px-0 volume-slider-container">
					<button type="button" className="btn text-secondary p-0">
						<i className="bi bi-text-right"></i>
					</button>
					<button type="button" className="btn text-secondary p-0">
						<i className="bi bi-list me-2"></i>
					</button>
					<button type="button" className="btn text-secondary p-0">
						<i className="bi bi-speaker me-2"></i>
					</button>
					<button type="button" className="btn text-secondary p-0">
						<i className="bi bi-volume-up"></i>
					</button>
					<input
						type="range"
						className="volume-slider"
						min="0"
						max="100"
					/>
					<button type="button" className="btn text-secondary p-0">
						<i className="bi bi-arrows-angle-expand"></i>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Player;
