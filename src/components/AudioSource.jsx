import { useSelector } from "react-redux";

const AudioSource = () => {
	const { trackPlaying } = useSelector((store) => store.trackPlaying);
	return (
		<audio id="myAudio">
			{trackPlaying && (
				<source
					id="audioSource"
					src={trackPlaying.preview}
					type="audio/mp3"
				/>
			)}
		</audio>
	);
};

export default AudioSource;
