import React from 'react'
import ArtistDetail from '../Components/ArtistDetail/ArtistDetail'
import Sidebar from '../Components/Sidebar/Sidebar'
import "./Artist.css"

const Artist = ({token}) => {
  return (
    <div>
        <Sidebar/>
    <div className="main-content">
       
      <ArtistDetail token={token}/>
    </div>
    </div>
  )
}

export default Artist
