import { Button, Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import ButtonLink from "../_utility/ButtonLink";

const PlayerMini = () => {
	const playingTrack = useSelector((store) => store.playingTrack.track);
	return (
		<Row
			id="playerMini"
			className="d-md-none bg-dark-gray py-3 mx-1 rounded-3 flex-nowrap">
			<div className="d-flex align-items-center flex-grow-1 flex-shrink-1 text-truncate">
				{playingTrack && (
					<>
						<ButtonLink
							to={`/albumId/${playingTrack.album.id}`}
							className="p-0">
							<img
								src={playingTrack.album.cover_medium}
								alt="cover album"
								style={{ height: "60px" }}
								className="ms-2"
							/>
						</ButtonLink>

						<div className="fs-6 px-3 d-flex flex-column justify-content-center">
							<ButtonLink className="p-0 text-white">
								{playingTrack.title_short}
							</ButtonLink>
							<ButtonLink
								to={`/artist/${playingTrack.artist.id}`}
								className="p-0">
								{playingTrack.artist.name}
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
