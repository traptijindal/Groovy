import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Song.css";
import { FaPlay,FaPause } from "react-icons/fa";
import { fetchJioSaavnSong } from "../../utils";
import Sidebar from "../Sidebar/Sidebar.jsx";

const SongsPage = ({setCurrentSong, isPlaying,setIsPlaying}) => {
    const { id } = useParams(); 
    const [songs, setSongs] = useState([]);
     const [playingSongId, setPlayingSongId] = useState(null);

    const fetchSongs = async () => {
        try {
            const response = await fetch(`https://saavn.dev/api/playlists?id=${id}`);
            const data = await response.json();
            setSongs(data.data.songs || []); 
        } catch (error) {
            console.error("Error fetching songs:", error);
        }
    };
    useEffect(() => {
        fetchSongs();
    }, [id]);

    return (
       <div className="main-container">
       <Sidebar/>
        <div className="songs-container">
            <p className="song-heading">Songs</p>
            <ul>
                {songs.map((song,index) => (
                    <li key={song.id}>
                         <p>{index + 1}.</p>
                        <img src={song.image[0].url} alt={song.name} />
                       <p>{song.name}</p>
                       <p>{Math.floor(song.duration / 60)}:{(song.duration % 60).toFixed(0).padStart(2, "0")}</p>
                       {playingSongId === song.id ? (
      <FaPause onClick={() => fetchJioSaavnSong(song.name, song.id, setCurrentSong, playingSongId, setPlayingSongId, setIsPlaying)} />
    ) : (
      <FaPlay onClick={() => fetchJioSaavnSong(song.name, song.id, setCurrentSong, playingSongId, setPlayingSongId, setIsPlaying)} />
    )}
                    </li>
                ))}
            </ul>
        </div></div>
    );
};

export default SongsPage;
