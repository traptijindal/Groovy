import React from 'react'
import CategoryPlaylist from '../Components/CategoryPlaylist/CategoryPlaylist'
import Sidebar from '../Components/Sidebar/Sidebar'
import "./Playlist.css"

const Playlist = ({token,audioRef}) => {
  return (
    <div>
    <Sidebar/>
    <div className="main-content-playlist">
    <CategoryPlaylist token={token} audioRef={audioRef}/>
    </div>
    </div>
  )
}

export default Playlist

