import React, { useState, useRef, useEffect } from 'react';
import './Slider.css';
import image from "/image2.png";
const Slider = ({token}) => {

    const [playlists,setPlaylists] =useState([]);
    const [counter, setCounter] = useState(0);
    const sliderRef = useRef(null);
    const fetchPlaylists = async () => {
        try {
            const playlistIds = [
                "3cEYpjA9oz9GiPac4AsH4n",
                "41He259DzyLRKm1vzKlV61",
                
            ];
    
            const playlistPromises = playlistIds.map(async (id) => {
                const response = await fetch(`https://api.spotify.com/v1/playlists/${id}`, {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                    },
                });
    
                if (!response.ok) {
                    throw new Error(`Failed to fetch playlist ${id}, status: ${response.status}`);
                }
    
                return response.json();
            });
    
            const playlistsData = await Promise.all(playlistPromises);
            setPlaylists(playlistsData);
        } catch (error) {
            console.error("Error fetching playlists:", error);
        }
    };
    
    // const fetchPlaylists=async()=>{
    //     const response = await fetch("https://api.spotify.com/v1/me/shows?offset=0&limit=20", {
    //                         headers: {
    //                             "Authorization": `Bearer ${token}`,
    //                         },
    //                     });
    //     const data= response.json();
    //    setPlaylists(data);
    // }       
   
    useEffect(()=>{
       if(token){
        fetchPlaylists();
       }
    },[token])
    useEffect(() => {
        const interval = setInterval(() => {
            setCounter(prev => (prev + 1) % playlists.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [playlists]);


    return (
        <>
            <div className="slider-container">
            <div className="slider" ref={sliderRef}>
            {playlists.length > 0 ? (
  playlists.map((playlist, index) => (
    <div
      key={playlist.id}
      className={`slide ${index === counter ? "active" : ""}`}
    >
      <div className="left">
        <p>A Playlist For You</p>
        <p>{playlist.name}</p>
        <p>MOST LIKED SONG</p>
        <button>Listen Now</button>
      </div>
      <div className="right">
        <img
          src={playlist.images?.[0]?.url || imagePlaceholder}
          alt={playlist.name}
        />
      </div>
    </div>
  ))
) : (
  <p>Loading playlists...</p>
)}

        </div>
            </div>
        </>
    );
};

export default Slider;
