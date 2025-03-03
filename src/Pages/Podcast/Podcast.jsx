import React, { useEffect, useState } from 'react'
import './Podcast.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import { API_KEY } from '../../data'

const Podcast = ({token}) => {
  const [episodes, setEpisodes] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const fetchData = async () => {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=music+podcast&type=video&maxResults=20&key=${API_KEY}`
    );

    const data = await response.json();
    setEpisodes(data.items);
  };
  useEffect(()=>{
    fetchData();
  },[])
  return (
    <div>
        <Sidebar/>
    <div className="main-content">
    <div className='podcast-container'>
      <h2 className='podcast-heading'>Podcasts</h2>
      {selectedVideo && (
        <div className="video-overlay">
          <div className="video-wrapper">
          <button className="close-btn" onClick={() => setSelectedVideo(null)}>
            <p>X   <span className='line-through'>Close</span></p>
          </button>
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${selectedVideo}`}
              title="Podcast Video"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
      <div className='podcasts' >
        {episodes.length > 0 ? (
          episodes.map((episode) => (
            <div key={episode.id.videoId} className='podcast'  onClick={() => setSelectedVideo(episode.id.videoId)}>
              <img src={episode.snippet.thumbnails.medium.url} alt={episode.snippet.title} />
              <h3 className='podcast-title'>{episode.snippet.title}</h3>
              <p className='podcast-channel'>{episode.snippet.channelTitle}</p>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
    </div>
    </div>
  )
}

export default Podcast
