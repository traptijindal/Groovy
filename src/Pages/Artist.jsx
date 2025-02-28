import React from 'react'
import ArtistDetail from '../Components/ArtistDetail/ArtistDetail'
import Sidebar from '../Components/Sidebar/Sidebar'
import "./Artist.css"

const Artist = ({token,song,setCurrentSong,isPlaying,setIsPlaying}) => {
  return (
    <div>
        <Sidebar/>
    <div className="main-content">
       
      <ArtistDetail token={token} song={song} setCurrentSong={setCurrentSong} isPlaying={isPlaying} setIsPlaying={setIsPlaying}/>
    </div>
    </div>
  )
}

export default Artist
