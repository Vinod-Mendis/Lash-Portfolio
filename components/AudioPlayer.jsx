import React, { useState, useRef, useEffect } from "react";
import styles from "../styles/AudioPlayer.module.css";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";

function AudioPlayer() {
  // state
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  // References
  const audioPlayer = useRef(); // reference to the audio player
  const progressBar = useRef(); // reference to the progress nar
  const animationRef = useRef(); // reference to progress bar animation

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);

    if (!prevValue) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  };

  const whilePlaying = () => {
    animationRef.current = requestAnimationFrame(whilePlaying);
    progressBar.current.value = audioPlayer.current.currentTime;
    changePlayerCurrentTime();
  };

  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    changePlayerCurrentTime();
  };

  const changePlayerCurrentTime = () => {
    progressBar.current.style.setProperty(
      "--seek-before-width",
      `${(progressBar.current.value / duration) * 100}%`
    );
    setCurrentTime(progressBar.current.value);
  };

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

  const calculateDuration = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

    return `${returnedMinutes} : ${returnedSeconds}`;
  };

  return (
    <div className="w-[700px] flex my-10 justify-center items-center text-white">
      <div className={`${styles.audioPlayer} flex `}>
        <audio
          ref={audioPlayer}
          src="/music/dathin_allan.mp3"
          preload="metadata"
        ></audio>

        <button onClick={togglePlayPause}>
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>

        {/* current time */}
        <div>{calculateDuration(currentTime)}</div>

        {/* progress bar */}
        <div>
          <input
            type="range"
            className={styles.progressBar}
            defaultValue={0}
            ref={progressBar}
            onChange={changeRange}
          />
        </div>

        {/* duration */}
        <div>{duration && !isNaN(duration) && calculateDuration(duration)}</div>
      </div>
    </div>
  );
}

export default AudioPlayer;
