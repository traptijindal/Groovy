import React, { useState, useEffect, useRef } from "react";
import search from "/search.png";
import tom from "/tom.png";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSettings } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import wave from "/Wave.svg";
import { FaXmark } from "react-icons/fa6";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";
import { div } from "framer-motion/client";

const Navbar = ({ setCurrentSong,audioRef,setIsPlaying }) => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (query.length > 2) {
      fetch(`https://saavn.dev/api/search/songs?query=${query}`)
        .then((res) => res.json())
        .then((data) => {
          console.log("API Response:", data);

          if (data) {
      
            setResults(data.data.results);
            setShowDropdown(true);
          } else {
            setResults([]);
            setShowDropdown(false);
          }
        })
        .catch((err) => {
          console.error("Error fetching data:", err);
          setResults([]);
          setShowDropdown(false);
        });
    } else {
      setResults([]);
      setShowDropdown(false);
    }
  }, [query]);

  
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  const handleSongSelect = (result) => {
    const songData = {
      title: result.name,
      image: result.image[2]?.url || result.image[0]?.url || "",
      url: result.downloadUrl[0]?.url || result.url || "",
    };

    setCurrentSong(songData);

    // If audioRef is available, set the source and play
    if (audioRef.current) {
      audioRef.current.src = songData.url;
      audioRef.current.play();
      setIsPlaying(true); // Ensure the play button updates correctly
    }
    setShowDropdown(false);
    setQuery(""); // Clear search bar after selection
  };

  return (
    <div className="navbar">
      <div className="logo">
        <img src={wave} />
        <p>Groovy</p>
      </div>
      <div className="links">
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>
          <p>Music</p>
        </Link>
        <Link
          to="/podcast"
          className={location.pathname === "/podcast" ? "active" : ""}
        >
          <p>Podcast</p>
        </Link>
      </div>

      <div className="search-container">
        <div className="search-bar">
          <img src={search} alt="" />
          <input
            type="text"
            placeholder="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => query.length > 2 && setShowDropdown(true)}
          />
        </div>

        {showDropdown && results.length > 0 && (
          <ul className="search-dropdown" ref={dropdownRef}>
            {results.map((result, index) => (
              <li key={index}>
                <button
                  onClick={() => handleSongSelect(result)}
                >
                  {result.name}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="icons">
        <div className="profile">
          <img src={tom} alt="" />
          <p>Tom Kundra </p>
        </div>
      </div>

      <div className="toggle_btn" onClick={handleOpen}>
        {isOpen ? <FaXmark /> : <GiHamburgerMenu />}
      </div>
      <div className={`dropdown-menu ${isOpen ? "open" : ""}`}>
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>
          <li>Music</li>
        </Link>
        <Link
          to="/podcast"
          className={location.pathname === "/podcast" ? "active" : ""}
        >
          <li>Podcast</li>
        </Link>
        {/* <Link
          to="/live"
          className={location.pathname === "/live" ? "active" : ""}
        >
          <li>LIVE</li>
        </Link> */}
      
        <div className="profile">
          <img src={tom} alt="" />
          <p>Tom Kundra </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
