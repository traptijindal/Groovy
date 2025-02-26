import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar.jsx";
import { getSpotifyToken } from "./spotifyService.js";
import "./App.css";
import Home from "./Pages/Home.jsx";
import Artist from "./Pages/Artist.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Player from "./Components/Player/Player.jsx";

const App = () => {
  const [token, setToken] = useState("");
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
        <Navbar />
        <Routes>
          <Route path="/" element={<Home token={token} />} />
          <Route path="/artist/:artistId" element={<Artist token={token} />} />
        </Routes>
        <Player />
      </Router>
    </div>
  );
};

export default App;
