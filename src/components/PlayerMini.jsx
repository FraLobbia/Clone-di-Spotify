import { Button } from "react-bootstrap";

const PlayerMini = () => {
	return (
		<div id="playerMini" className="d-md-none py-3 mx-1 fs-8 rounded-3 row">
			<div id="playerMiniData" className="col-7 d-flex">
				<div className="fs-6 pe-3">
					<Button variant="link" href="#">
						<p className="my-0 fw-bold text-white">
							Fat Funny Friend
						</p>
					</Button>
					<Button variant="link" href="#">
						<p className="my-0">Maddie Zahm</p>
					</Button>
				</div>
			</div>

			<div className="col-5 px-0 d-flex justify-content-end">
				<button type="button" className="btn text-secondary p-0">
					<i className="bi bi-speaker pe-3"></i>
				</button>
				<button type="button" className="btn text-secondary p-0">
					<i className="bi bi-heart pe-3"></i>
				</button>
				<button
					id="playButtonMini"
					type="button"
					className="btn text-secondary p-0 playButtonclassName">
					<i className="bi bi-play-circle-fill me-4 fs-1 text-white"></i>
				</button>
			</div>
		</div>
	);
};

export default PlayerMini;
