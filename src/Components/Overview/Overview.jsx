import React, { useState, useEffect } from "react";
import { FaPlay } from "react-icons/fa";
import { getSpotifyToken } from "../../spotifyService.js"; 
import "./Overview.css";

export default function Overview() {
  const [topTracks, setTopTracks] = useState([]);
  const [artists, setArtists] = useState([]);
  const [token, setToken] = useState("");

  useEffect(() => {
    const fetchToken = async () => {
      const accessToken = await getSpotifyToken();
      setToken(accessToken);
      fetchTopCharts(accessToken);
      fetchTopArtists(accessToken);
    };

    fetchToken();
  }, []);

  const fetchTopCharts = async (accessToken) => {
    const response = await fetch(
      "https://api.spotify.com/v1/tracks?ids=6habFhsOp2NvshLv26DqMb,0e7ipj03S05BNilyu5bRzt,3QGsuHI8jO1Rx4JWLUh9jd,2VxeLyX666F8uXCJ0dZF8B", 
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );

    const data = await response.json();
    setTopTracks(data.tracks);
  };

  const fetchTopArtists = async (accessToken) => {
    const response = await fetch(
      "https://api.spotify.com/v1/artists?ids=0TnOYISbd1XYRBk9myaseg,1uNFoZAHBGtllmzznpCI3s,1HY2Jd0NmPuamShAr6KMms,3TVXtAsR1Inumwj472S9r4,7dGJo4pcD2V6oG8kP0tJRR,66CXWjxzNUsdJxJ2JdwvnR,06HL4z0CvFAxyc27GXpf02,5K4W6rqBFWDnAN6FQUkS6x",
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );

    const data = await response.json();
    setArtists(data.artists);
  };

  return (
    <div className="left">
      <div className="top">
        <div className="heading">
          <p>Top Artists</p>
          <p className="see">See all</p>
        </div>
        <div className="artists">
          {artists.map((artist) => (
            <div className="card" key={artist.id}>
              <img src={artist.images[0]?.url || "/songcard.jpeg"} alt="" />
              <p className="title">{artist.name}</p>
              <p className="plays">{artist.popularity}% Popularity</p>
            </div>
          ))}
        </div>
      </div>

      <div className="below">
       
          <div className="heading">
            <p>Top Charts</p>
            <p className="see">See all</p>
          </div>

          <div className="charts">
            {topTracks.map((track, index) => (
              <div className="chart" key={track.id}>
                <p>{String(index + 1).padStart(2, "0")}</p>
                <div className="title">
                  <img src={track.album.images[0]?.url || "/songcard.jpeg"} alt="" />
                  <p>{track.name}</p>
                </div>
                <p className="time">{Math.floor(track.duration_ms / 60000)}:{((track.duration_ms / 1000) % 60).toFixed(0).padStart(2, "0")}</p>
                <FaPlay className="icon" />
              </div>
            ))}
          </div>
        </div>
      </div>
  
  );
}

