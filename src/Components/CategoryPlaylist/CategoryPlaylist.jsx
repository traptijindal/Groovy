import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./CategoryPlaylist.css";
import { motion } from "framer-motion";

const CategoryPlaylist = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const [playlists, setPlaylists] = useState([]);

  const fetchPlaylists = async () => {
    try {
      const response = await fetch(
        `https://saavn.dev/api/search/playlists?query=${encodeURIComponent(name)}`
      );
      const data = await response.json();
      
      if (data && data.data && data.data.results) {
        setPlaylists(data.data.results);
      }
    } catch (error) {
      console.error("Error fetching playlists:", error);
    }
  };

  useEffect(() => {
    if (name) {
      fetchPlaylists();
    }
  }, [name]);

  return (
    <motion.div
      className="category-playlists-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="playlist-heading">
        <p> {name}</p>
      </div>
      <div className="playlists-grid">
        {playlists.map((playlist,index) => (
          <motion.div
            className="playlist-card"
            key={playlist.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onClick={() => navigate(`/playlist/${playlist.id}`)}
          >
            <img src={playlist.image?.[2]?.url || "/default-playlist.jpeg"} alt={playlist.title} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default CategoryPlaylist;
