import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Col, Container, Row } from "react-bootstrap";
import { playMusic } from "../redux/actions";

const Player = () => {
	const audio = document.getElementById("myAudio");
	const dispatch = useDispatch();
	const playingTrack = useSelector((store) => store.playingTrack);
	const { isPlaying } = useSelector((store) => store.playingTrack);

	const handlePlayingMusic = () => {
		if (audio.paused) {
			audio.play();
			// switchIconaPlayPause("pause");
		} else {
			audio.pause();
			// switchIconaPlayPause("play");
		}
	};

	useEffect(() => {
		handlePlayingMusic();
	}, [isPlaying]);
	return (
		<Container
			fluid
			className="d-none d-md-block bg-black border-top border-tertiary"
			id="player">
			{!playingTrack && (
				<Row className="py-3 fs-5 align-items-center">
					<Col className="d-flex align-items-center justify-content-start ms-3">
						<img
							src={playingTrack.album.cover_medium}
							alt="cover dell'album"
							style={{ maxWidth: "70px" }}
						/>
						<div className="d-flex flex-column">
							<Button
								variant="link"
								className="py-0 text-white text-start">
								{playingTrack.title}
							</Button>
							<Button variant="link" className="py-0 text-start">
								{playingTrack.artist.name}
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
									onClick={() => dispatch(playMusic())}
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
			)}
		</Container>
	);
};

export default Player;
