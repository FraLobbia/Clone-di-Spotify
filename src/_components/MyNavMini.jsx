import { Button } from "react-bootstrap";

const MyNavMini = () => {
	return (
		<div className="d-md-none row bg-black py-4 fs-8">
			<div className="col-4">
				<Button
					variant="link"
					className="d-flex flex-column align-items-center">
					<i className="bi bi-house-door fs-3"> </i>Home
				</Button>
			</div>
			<div className="col-4">
				<Button
					variant="link"
					className="d-flex flex-column align-items-center">
					<i className="bi bi-search fs-3"></i>Cerca
				</Button>
			</div>
			<div className="col-4">
				<Button
					variant="link"
					className="d-flex flex-column align-items-center">
					<i className="bi bi-collection fs-3"></i>La tua libreria
				</Button>
			</div>
		</div>
	);
};

export default MyNavMini;
