import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ArtistDetail.css";
import { FaPlay,FaPause } from "react-icons/fa";
import { fetchJioSaavnSong } from "../../utils";

export default function ArtistDetail({ token,song,setCurrentSong,isPlaying,setIsPlaying}) {
  const { artistId } = useParams();
  const [artist, setArtist] = useState(null);
  const [tracks, setTracks] = useState([]);
  const [playingTrackId, setPlayingTrackId] = useState(null);

  const fetchArtistDetails = async () => {
    const artistResponse = await fetch(`https://api.spotify.com/v1/artists/${artistId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    const artistData = await artistResponse.json();
    setArtist(artistData);

    const tracksResponse = await fetch(`https://api.spotify.com/v1/artists/${artistId}/top-tracks?market=US`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    const tracksData = await tracksResponse.json();
    setTracks(tracksData.tracks);
  };
  
  useEffect(() => {
    if (token) {
      fetchArtistDetails();
    }
  }, [artistId, token]);

  return (
    <div className="artist-detail">
      {artist && (
        <div className="artist-header">
          <img src={artist.images[0]?.url || "/songcard.jpeg"} alt={artist.name} />
          <div className="artist-info">
            <h1>{artist.name}</h1>
            <p>{artist.followers.total.toLocaleString()} Followers</p>
            <p>Popularity: {artist.popularity}%</p>
          </div>
        </div>
      )}

      <div className="top-tracks">
        <h2>Top Songs</h2>
        {tracks.map((track, index) => (
          <div className="track" key={track.id}>
            <p>{index + 1}.</p>
            <img src={track.album.images[0]?.url || "/songcard.jpeg"} alt={track.name} />
           <p className="track-info">{track.name}</p>
            <p className="track-info">{Math.floor(track.duration_ms / 60000)}:{((track.duration_ms / 1000) % 60).toFixed(0).padStart(2, "0")}</p>
  {playingTrackId === track.id ? (
      <FaPause onClick={() => fetchJioSaavnSong(track.name, track.id, setCurrentSong, playingTrackId, setPlayingTrackId, setIsPlaying)} />
    ) : (
      <FaPlay onClick={() => fetchJioSaavnSong(track.name, track.id, setCurrentSong, playingTrackId, setPlayingTrackId, setIsPlaying)} />
    )}
          </div>
        ))}
      </div>

    </div>
  );
}

