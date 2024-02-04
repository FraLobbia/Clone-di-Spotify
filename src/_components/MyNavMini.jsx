import { Col, Row } from "react-bootstrap";
import ButtonLink from "../_utility/ButtonLink";

const MyNavMini = () => {
	return (
		<Row className="d-md-none bg-black">
			<Col className="justify-content-center d-flex">
				<ButtonLink
					to={"/"}
					className="d-flex flex-column align-items-center">
					<i className="bi bi-house-door fs-3"> </i>Home
				</ButtonLink>
			</Col>
			<Col className="justify-content-center d-flex">
				<ButtonLink className="d-flex flex-column align-items-center">
					<i className="bi bi-search fs-3"></i>Cerca
				</ButtonLink>
			</Col>
			<Col className="justify-content-center d-flex">
				<ButtonLink
					to={"/liked-songs"}
					className="d-flex flex-column align-items-center">
					<i className="bi bi-collection fs-3"></i>La tua libreria
				</ButtonLink>
			</Col>
		</Row>
	);
};

export default MyNavMini;
