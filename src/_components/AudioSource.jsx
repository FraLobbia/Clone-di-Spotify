import { useRef } from "react";
import ReactAudioPlayer from "react-audio-player";
import { useDispatch, useSelector } from "react-redux";
import { pauseMusic, playMusic, setCurrentTime } from "../redux/actions";
import Player from "./Player";
import PlayerMini from "./PlayerMini";

const AudioSource = () => {
	const dispatch = useDispatch();
	const { track, volume, isPlaying } = useSelector(
		(store) => store.playingTrack
	);
	const audioPlayerRef = useRef(null);

	const handlePlayPause = () => {
		if (audioPlayerRef.current) {
			if (audioPlayerRef.current.audioEl.current.paused) {
				audioPlayerRef.current.audioEl.current.play();
				dispatch(playMusic());
			} else {
				audioPlayerRef.current.audioEl.current.pause();
				dispatch(pauseMusic());
			}
		}
	};

	return (
		<>
			<ReactAudioPlayer
				ref={audioPlayerRef}
				src={track.preview}
				// controls
				autoplay
				volume={volume / 100}
				// onListen={handleTimeUpdate}
			/>
			<Player func={handlePlayPause} />
			<PlayerMini func={handlePlayPause} />
		</>
	);
};

export default AudioSource;
