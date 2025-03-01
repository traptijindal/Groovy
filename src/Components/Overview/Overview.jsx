import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Overview.css";

export default function Overview({ token }) {
  const [categories, setCategories] = useState([]);
  const [artists, setArtists] = useState([]);
  const [topTracks, setTopTracks] = useState([]);
  const navigate = useNavigate();

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

  const fetchCategories = async () => {
    const response = await fetch("https://api.spotify.com/v1/browse/categories", {
      headers: { Authorization: `Bearer ${token}` },
    });

    const data = await response.json();
    setCategories(data.categories.items);
  };

  const fetchTopCharts = async () => {
        const response = await fetch(
          "https://api.spotify.com/v1/tracks?ids=6habFhsOp2NvshLv26DqMb,0e7ipj03S05BNilyu5bRzt,3QGsuHI8jO1Rx4JWLUh9jd,2VxeLyX666F8uXCJ0dZF8B", 
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
    
        const data = await response.json();
        setTopTracks(data.tracks);
      };

  useEffect(() => {
    if (token) {
      fetchTopArtists();
      fetchCategories();
      fetchTopCharts();
    }
  }, [token]);

  return (
    <div className="left">
      <div className="top">
        <div className="heading">
          <p>Top Artists</p>
          <Link to='/artist'><p className="see" >See all</p></Link>
        </div>
        <div className="artists">
          {artists.map((artist) => (
            <div className="card" key={artist.id}  onClick={() => navigate(`/artist/${artist.id}`)}>
              <img src={artist.images[0]?.url || "/songcard.jpeg"} alt="" />
              <p className="title">{artist.name}</p>
              <p className="plays">{artist.popularity}% Popularity</p>
            </div>
          ))}
        </div>
      </div>

      <div className="below">
        <div className="heading">
          <p>Categories</p>
          <Link to='/category'><p className="see" >See all</p></Link>
        </div>
        <div className="categories">
          {categories.map((category) => (
            <div className="category-card" key={category.id} onClick={() => navigate(`/category/${category.name}`)}>
              <img src={category.icons[0]?.url || "/default-category.jpeg"} alt={category.name} />
              <p className="title">{category.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

