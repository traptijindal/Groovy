import React,{useState} from "react";
import search from "/search.png";
import tom from "/tom.png";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSettings } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import wave from "/Wave.svg";
import { FaXmark } from "react-icons/fa6";
import "./Navbar.css";
import { Link ,useLocation} from "react-router";

const Navbar = () => {
  const location = useLocation(); 
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">
        <div className="logo">
              <img src={wave} />
              <p>Groovy</p>
        </div>
      <div className="links">
      <Link to="/" className={location.pathname === "/" ? "active" : ""}><p>MUSIC</p></Link>
        <Link
          to="/podcast"
          className={location.pathname === "/podcast" ? "active" : ""}
        >
          <p>Podcast</p>
        </Link>
        {/* <Link
          to="/live"
          className={location.pathname === "/live" ? "active" : ""}
        >
          <p>LIVE</p>
        </Link> */}
      </div>

      <div className="search-bar">
        <img src={search} alt="" />
        <p className="type">Type here to search</p>
        <p className="search">Search</p>
      </div>

      <div className="icons">
        <IoMdNotificationsOutline className="notification" />
        <IoSettings className="setting" />
        <div className="profile">
          <img src={tom} alt="" />
          <p>Tashu Jindal </p>
        </div>
      </div>
      
      <div className="toggle_btn" onClick={handleOpen}>
      {isOpen ? <FaXmark /> : <GiHamburgerMenu />}
       </div>
      <div className={`dropdown-menu ${isOpen ? "open" : ""}`}>
      <Link to="/" className={location.pathname === "/" ? "active" : ""}><li>MUSIC</li></Link>
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
        <li>SETTING</li>
        <div className="profile">
          <img src={tom} alt="" />
          <p>Tashu Jindal </p>
        </div>
      </div>
        
    </div>
  );
};

export default Navbar;
