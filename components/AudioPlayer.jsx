import React, { useState, useRef, useEffect, useCallback } from "react";
import styles from "../styles/AudioPlayer.module.css";
import { FaPlay, FaPause } from "react-icons/fa";

function AudioPlayer({ currentSong }) {
  // State
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  // References
  const audioPlayer = useRef(); // Reference to the audio player
  const progressBar = useRef(); // Reference to the progress bar
  const animationRef = useRef(); // Reference to progress bar animation

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);

    if (!prevValue && audioPlayer.current) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else if (audioPlayer.current) {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  };

  const changePlayerCurrentTime = useCallback(() => {
    if (progressBar.current) {
      progressBar.current.style.setProperty(
        "--seek-before-width",
        `${(progressBar.current.value / duration) * 100}%`
      );
      setCurrentTime(progressBar.current.value);
    }
  }, [duration]);

  const whilePlaying = useCallback(() => {
    if (progressBar.current && audioPlayer.current) {
      animationRef.current = requestAnimationFrame(whilePlaying);
      progressBar.current.value = audioPlayer.current.currentTime;
      changePlayerCurrentTime();
    }
  }, [changePlayerCurrentTime]);

  const changeRange = () => {
    if (audioPlayer.current && progressBar.current) {
      audioPlayer.current.currentTime = progressBar.current.value;
      changePlayerCurrentTime();
    }
  };

  useEffect(() => {
    if (audioPlayer.current) {
      audioPlayer.current.pause();
      audioPlayer.current.currentTime = 0;
      if (progressBar.current) {
        progressBar.current.value = 0;
      }
      setCurrentTime(0);
    }

    const handleLoadedMetadata = () => {
      if (audioPlayer.current && progressBar.current) {
        const seconds = Math.floor(audioPlayer.current.duration);
        setDuration(seconds);
        progressBar.current.max = seconds;
        if (isPlaying) {
          audioPlayer.current.play();
          animationRef.current = requestAnimationFrame(whilePlaying);
        }
      }
    };

    const audioRef = audioPlayer.current;
    if (audioRef) {
      audioRef.addEventListener("loadedmetadata", handleLoadedMetadata);
    }

    return () => {
      if (audioRef) {
        audioRef.removeEventListener("loadedmetadata", handleLoadedMetadata);
      }
    };
  }, [currentSong, isPlaying, whilePlaying]);

  useEffect(() => {
    const handleAudioEnd = () => {
      if (audioPlayer.current && progressBar.current) {
        progressBar.current.value = audioPlayer.current.duration;
        setCurrentTime(audioPlayer.current.duration);
        changePlayerCurrentTime();
        setIsPlaying(false);
      }
    };

    const audioRef = audioPlayer.current;
    if (audioRef) {
      audioRef.addEventListener("ended", handleAudioEnd);
    }

    return () => {
      if (audioRef) {
        audioRef.removeEventListener("ended", handleAudioEnd);
      }
    };
  }, [changePlayerCurrentTime]);

  useEffect(() => {
    if (audioPlayer.current && progressBar.current) {
      const seconds = Math.floor(audioPlayer.current.duration);
      setDuration(seconds);
      progressBar.current.max = seconds;
      if (isPlaying) {
        audioPlayer.current.play();
        animationRef.current = requestAnimationFrame(whilePlaying);
      }
    }
  }, [isPlaying, whilePlaying]);

  const calculateDuration = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

    return `${returnedMinutes}:${returnedSeconds}`;
  };

  return (
    <div className="w-full flex my-10 justify-center items-center text-white">
      <div className="w-full flex flex-col justify-center items-center">
        <audio ref={audioPlayer} src={currentSong} preload="metadata"></audio>

        <button onClick={togglePlayPause}>
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>

        <div className="text-xs flex w-[80%] justify-between items-center">
          <div>{calculateDuration(currentTime)}</div>
          <div>
            {duration && !isNaN(duration) && calculateDuration(duration)}
          </div>
        </div>

        <div className="w-[80%] flex justify-center items-center">
          <input
            type="range"
            className={styles.progressBar}
            defaultValue={0}
            ref={progressBar}
            onChange={changeRange}
          />
        </div>
      </div>
    </div>
  );
}

export default AudioPlayer;
