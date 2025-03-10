import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./ArtistFull.css";
import Sidebar from "../Sidebar/Sidebar";

const ArtistFull = ({ token }) => {
  const navigate = useNavigate();
  const [artists, setArtists] = useState([]);
  const fetchTopArtists = async () => {
    const response = await fetch(
      "https://api.spotify.com/v1/artists?ids=4YRxDV8wJFPHPTeXepOstw,0oOet2f43PA68X5RxKobEy,0y59o4v8uw5crbN9M3JiL1,72beYOeW2sb2yfcS4JsRvb,7uIbLdzzSEqnX0Pkrb56cR,2oSONSC9zQ4UonDKnLqksx,1tqysapcCh1lWEAc9dIFpa,2fMqTqiTxUDlmcOEPaQSsx,6kzZ5isGLwtXLjA2Ari9ob,1mYsTxnqsietFxj1OgoGbG,1YzCsTRb22dQkh9lghPIrp",
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    const data = await response.json();
    setArtists(data.artists);
  };
  useEffect(() => {
    if (token) {
      fetchTopArtists();
    }
  }, [token]);
  return (
    <div>
      <Sidebar />
      <div className="main-container">
        <motion.div
          className="container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="heading">
            <p>Top Artists</p>
          </div>

          <div className="artist-full">
            {artists.map((artist, index) => (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-full"
                key={artist.id}
                onClick={() => navigate(`/artist/${artist.id}`)}
              >
                <img src={artist.images[0]?.url || "/songcard.jpeg"} alt="" />
                <p className="title">{artist.name}</p>
                <p className="plays">{artist.popularity}% Popularity</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ArtistFull;
