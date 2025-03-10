import React, { useState, useRef } from "react";
import "./Player.css";
import { FaPlay, FaPause, FaStepBackward, FaStepForward } from "react-icons/fa";

const Player = ({ song,isPlaying ,setIsPlaying,audioRef,progress,setProgress}) => {
   
const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (e) => {
    const newTime = (e.target.value * audioRef.current.duration) / 100;
    audioRef.current.currentTime = newTime;
    setProgress(e.target.value);
  };

  return (
    <div className="music-player">
      {song ? (
        <>
       
          <div className="player-left">
            <img src={song.image} alt={song.title} className="player-image" />
            <div className="player-info">
            <h3 
      className="song-title "
      style={{
        animation: song.title.length > 15 ? "marquee 5s linear infinite" : "none",
      }}
    >
      {song.title}
    </h3>
            </div>
          </div>

       
          <div className="player-center">
            <div className="controls">
              <button className="control-btn">
                <FaStepBackward className="back"/>
              </button>
              <button className="play-pause-btn" onClick={handlePlayPause}>
                {isPlaying ? <FaPause className="pause"/> : <FaPlay className="play"/>}
              </button>
              <button className="control-btn">
                <FaStepForward className="forward"/>
              </button>
            </div>
            <input
              type="range"
              className="seek-bar"
              min="0"
              max="100"
              value={progress}
              onChange={handleSeek}
            />
          </div>

          <div className="player-right"></div>

         
        </>
      ) : (
        <p className="no-song">No song playing</p>
      )}
    </div>
  );
};

export default Player;

