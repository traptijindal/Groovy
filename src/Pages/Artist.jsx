import React from 'react'
import ArtistDetail from '../Components/ArtistDetail/ArtistDetail'
import Sidebar from '../Components/Sidebar/Sidebar'

const Artist = ({token}) => {
  return (
    <div className="main-content">
        <Sidebar/>
    <div>
       
      <ArtistDetail token={token}/>
    </div>
    </div>
  )
}

export default Artist
