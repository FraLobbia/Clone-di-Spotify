import { useEffect, useRef } from "react";
import ReactAudioPlayer from "react-audio-player";
import { useSelector } from "react-redux";

const AudioSource = () => {
	const { track, volume, isPlaying } = useSelector(
		(store) => store.playingTrack
	);
	const audioPlayerRef = useRef(null);

	useEffect(() => {
		if (isPlaying) {
			audioPlayerRef.current.audioEl.current.play();
		} else {
			audioPlayerRef.current.audioEl.current.pause();
		}
	}, [isPlaying]);

	return (
		<ReactAudioPlayer
			ref={audioPlayerRef}
			src={track.preview}
			// controls
			autoplay
			volume={volume / 100}
			// onListen={handleTimeUpdate}
		/>
	);
};

export default AudioSource;
