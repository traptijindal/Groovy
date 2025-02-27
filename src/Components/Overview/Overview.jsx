import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { getSpotifyToken } from "../../spotifyService.js"; 
import "./Overview.css";

export default function Overview({ token }) {
  const [categories, setCategories] = useState([]);
  const [artists, setArtists] = useState([]);
  const [topTracks, setTopTracks] = useState([]);
  const navigate = useNavigate();

  const fetchTopArtists = async () => {
    const response = await fetch(
      "https://api.spotify.com/v1/artists?ids=0TnOYISbd1XYRBk9myaseg,1uNFoZAHBGtllmzznpCI3s,1HY2Jd0NmPuamShAr6KMms,3TVXtAsR1Inumwj472S9r4,7dGJo4pcD2V6oG8kP0tJRR,66CXWjxzNUsdJxJ2JdwvnR,06HL4z0CvFAxyc27GXpf02,5K4W6rqBFWDnAN6FQUkS6x",
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
          {/* <p className="see">See all</p> */}
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
            <div className="category-card" key={category.id}>
              <img src={category.icons[0]?.url || "/default-category.jpeg"} alt={category.name} />
              <p className="title">{category.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


