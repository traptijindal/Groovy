import React, { useState, useEffect,useRef } from "react";
import Navbar from "./Components/Navbar/Navbar.jsx";
import { getSpotifyToken } from "./spotifyService.js";
import "./App.css";
import Home from "./Pages/Home.jsx";
import Artist from "./Pages/Artist.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Player from "./Components/Player/Player.jsx";
import Category from "./Pages/Category.jsx";
import ArtistFull from "./Components/ArtistFull/ArtistFull.jsx";
import Playlist from "./Pages/Playlist.jsx";
import SongsPage from "./Components/Song/Song.jsx";
import Podcast from "./Pages/Podcast/Podcast.jsx";
const App = () => {
  const [token, setToken] = useState("");
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(null);
  const updateProgress = () => {
    if (audioRef.current && audioRef.current.duration) {
      const currentProgress =
        (audioRef.current.currentTime / audioRef.current.duration) * 100;
      setProgress(currentProgress);
    }
  };
  useEffect(() => {
    const fetchToken = async () => {
      const accessToken = await getSpotifyToken();
      setToken(accessToken);
    };

    fetchToken();
  }, []);
  return (
    <div>
      <Router>
        <Navbar setCurrentSong={setCurrentSong} audioRef={audioRef} setIsPlaying={setIsPlaying}/>
        <Routes>
          <Route path="/" element={<Home token={token} />} />
          <Route path="/artist/:artistId" element={<Artist token={token} song={currentSong} setCurrentSong={setCurrentSong}isPlaying={isPlaying} setIsPlaying={setIsPlaying} audioRef={audioRef} />} />
          <Route path="/category" element={<Category token={token}/>}/>
          <Route path="/category/:name" element={<Playlist token={token} audioRef={audioRef}/>} />
          <Route path="/artist" element={<ArtistFull token={token} song={currentSong} setCurrentSong={setCurrentSong}isPlaying={isPlaying} setIsPlaying={setIsPlaying}/>}/>
            <Route path="/playlist/:id" element={<SongsPage currentSong={currentSong}setCurrentSong={setCurrentSong} 
                isPlaying={isPlaying} 
                setIsPlaying={setIsPlaying} 
                audioRef={audioRef}/>}/>
            <Route path="/podcast" element={<Podcast token={token}/>}/>
        </Routes>
        {currentSong && <Player song={currentSong} setCurrentSong={setCurrentSong}isPlaying={isPlaying} setIsPlaying={setIsPlaying} audioRef={audioRef} progress={progress} setProgress={setProgress}/>}
        <audio ref={audioRef}  onTimeUpdate={updateProgress} />
      </Router>
    </div>
  );
};

export default App;
