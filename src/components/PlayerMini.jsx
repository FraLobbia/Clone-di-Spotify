import { Button, Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import ButtonLink from "./ButtonLink";

const PlayerMini = () => {
	const { trackPlaying } = useSelector((store) => store.trackPlaying);
	return (
		<Row
			id="playerMini"
			className="d-md-none bg-dark-gray py-3 mx-1 rounded-3 flex-nowrap">
			<div className="d-flex align-items-center flex-grow-1 flex-shrink-1 text-truncate">
				{trackPlaying && (
					<>
						<ButtonLink
							to={`/albumId/${trackPlaying.album.id}`}
							className="p-0">
							<img
								src={trackPlaying.album.cover_medium}
								alt="cover album"
								style={{ height: "60px" }}
								className="ms-2"
							/>
						</ButtonLink>

						<div className="fs-6 px-3 d-flex flex-column justify-content-center">
							<ButtonLink className="p-0 text-white">
								{trackPlaying.title_short}
							</ButtonLink>
							<ButtonLink
								to={`/artist/${trackPlaying.artist.id}`}
								className="p-0">
								{trackPlaying.artist.name}
							</ButtonLink>
						</div>
					</>
				)}
			</div>

			<Col className="px-0 d-flex justify-content-end">
				<Button variant="link" className="speaker">
					<i className="bi bi-speaker fs-3"></i>
				</Button>
				<Button variant="link" className="heart">
					<i className="bi bi-heart fs-3"></i>
				</Button>
				<Button variant="link" className="dots">
					<i className="bi bi-three-dots-vertical fs-3"></i>
				</Button>
				<Button variant="link">
					<i className="bi bi-play-circle-fill me-3 display-1 text-white"></i>
				</Button>
			</Col>
		</Row>
	);
};

export default PlayerMini;
