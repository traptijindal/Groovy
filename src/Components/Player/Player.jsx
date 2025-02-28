import React from 'react'
import './Player.css'
import { FaPause, FaPlay } from 'react-icons/fa'


const Player = ({ song, isPlaying, togglePlay }) => {
  return (
    <div className="music-player">
      {song ? (
        <>
           <div className='player'>
           <img src={song.image} alt={song.title} className="player-image" />
          <div className="player-info">
            <h3>{song.title}</h3>
            <p>{song.artist}</p>
          </div>
           </div>
         <div>
         <audio src={song.url} autoPlay controls />
         </div>
        </>
      ) : (
        <p>No song playing</p>
      )}
    </div>
      
   
  )
}

export default Player
