import { useSelector } from "react-redux";

const AudioSource = () => {
	const { playingTrack } = useSelector((store) => store.playingTrack);
	return (
		<audio id="myAudio">
			{playingTrack && (
				<source
					id="audioSource"
					src={playingTrack.preview}
					type="audio/mp3"
				/>
			)}
		</audio>
	);
};

export default AudioSource;
