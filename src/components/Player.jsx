import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsPlaying } from "../redux/actions";
import { Button, Col, Container, Row } from "react-bootstrap";

const Player = () => {
	const audio = document.getElementById("myAudio");
	const dispatch = useDispatch();
	const isPlaying = useSelector((store) => store.player.isPlaying);
	const trackPlaying = useSelector(
		(store) => store.trackPlaying.trackPlaying
	);
	const togglePlayPause = () => {
		if (audio.paused) {
			audio.play();
			// switchIconaPlayPause("pause");
		} else {
			audio.pause();
			// switchIconaPlayPause("play");
		}
	};

	const [flag, setFlag] = useState(false);

	useEffect(() => {
		setFlag(!flag);
	}, []);

	useEffect(() => {
		console.log("in riproduzione", trackPlaying);
		// console.log("ciao");
	}, [flag]);

	return (
		<Container
			fluid
			className="d-none d-md-block bg-black border-top border-tertiary"
			id="player">
			<Row className="py-3 fs-5 align-items-center">
				<Col className="d-flex align-items-center justify-content-start ms-3">
					<img
						src={trackPlaying.album.cover_medium}
						alt="cover dell'album"
						style={{ maxWidth: "70px" }}
					/>
					<div className="d-flex flex-column">
						<Button
							variant="link"
							className="py-0 text-white text-start">
							{trackPlaying.title}
						</Button>
						<Button variant="link" className="py-0 text-start">
							{trackPlaying.artist.name}
						</Button>
					</div>
					<Button variant="link">
						<i className="bi bi-heart"></i>
					</Button>
				</Col>

				{/* <!-- navbar player - gruppo CENTER --> */}
				<Col className="text-center">
					<Row>
						<Col>
							<Button variant="link" className="p-0">
								<i className="bi bi-shuffle"></i>
							</Button>
							<Button variant="link" className="p-0">
								<i className="bi bi-skip-start-fill"></i>
							</Button>
							<Button
								id="playButton"
								variant="link"
								// onClick={() => dispatch(setIsPlaying(!isPlaying))}
								onClick={() => togglePlayPause()}
								className=" p-0 playButtonclass">
								<i className="bi bi-play-circle-fill fs-1 text-white"></i>
							</Button>
							<Button variant="link" className="p-0">
								<i className="bi bi-skip-end-fill "></i>
							</Button>
							<Button variant="link" className="p-0">
								<i className="bi bi-repeat"></i>
							</Button>
						</Col>
					</Row>
					<Container fluid>
						<Row className="flex-nowrap g-0">
							<Col xs={2}>
								<span
									id="timeProgress"
									className="text-secondary fs-8">
									00:02
								</span>
							</Col>

							<Col>
								<input
									id="progressBar"
									type="range"
									className="w-100"
									min="0"
									max="100"
									value="0"
								/>
							</Col>
							<Col xs={2}>
								<span
									id="trackDuration"
									className="text-secondary fs-8">
									00:30
								</span>
							</Col>
						</Row>
					</Container>
				</Col>

				{/* 	<!-- navbar player - gruppo DX --> */}
				<Col className="text-end px-0 volume-slider-container">
					<Button variant="link" className=" p-0">
						<i className="bi bi-text-right"></i>
					</Button>
					<Button variant="link" className=" p-1">
						<i className="bi bi-list"></i>
					</Button>
					<Button variant="link" className=" p-1">
						<i className="bi bi-speaker"></i>
					</Button>
					<Button variant="link" className=" p-1">
						<i className="bi bi-volume-up"></i>
					</Button>
					<input
						type="range"
						className="volume-slider w-25"
						min="0"
						max="100"
					/>
					<Button variant="link" className="ps-2">
						<i className="bi bi-arrows-angle-expand"></i>
					</Button>
				</Col>
			</Row>
		</Container>
	);
};

export default Player;
