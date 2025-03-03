import React, { useRef, useState } from "react";
import { Link } from "react-router";
import wave from "/Wave.svg";
import { MdOutlineExplore } from "react-icons/md";
import { AiFillSound } from "react-icons/ai";
import { FaCompactDisc, FaMicrophone,FaPlusCircle, FaPlayCircle } from "react-icons/fa";
import { MdArrowBackIos } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import "./Sidebar.css";

const Sidebar = () => {
  const tabsBoxRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);

    const handleIcons = () => {
        const tabsBox = tabsBoxRef.current;
        if (!tabsBox) return;

        let scrollVal = tabsBox.scrollLeft;
        let maxScrollableWidth = tabsBox.scrollWidth - tabsBox.clientWidth;
        document.getElementById("left").style.display = scrollVal > 0 ? "flex" : "none";
        document.getElementById("right").style.display = maxScrollableWidth > scrollVal ? "flex" : "none";
    };

    const handleArrowClick = (direction) => {
        const tabsBox = tabsBoxRef.current;
        if (!tabsBox) return;

        tabsBox.scrollLeft += direction === "left" ? -150 : 150;
        setTimeout(handleIcons, 50);
    };

    const handleMouseDown = () => setIsDragging(true);
    const handleMouseUp = () => setIsDragging(false);

    const handleMouseMove = (e) => {
        const tabsBox = tabsBoxRef.current;
        if (!isDragging || !tabsBox) return;

        tabsBox.classList.add("dragging");
        tabsBox.scrollLeft -= e.movementX;
    };
  
  return (
   <>
    <div className="main">
      <div className="logo">
        <img src={wave} alt="Logo" />
        <p>Groovy</p>
      </div>
      <div className="sidebar">
        <div className="shortcut">
          <p>MENU</p>
          <div className="shortcut-links">
            <MdOutlineExplore className="icon" />
            <p>Explore</p>
          </div>
          <div className="shortcut-links">
            <AiFillSound className="icon" />
            <Link to="/category"><p>Category</p></Link>
          </div>
          <div className="shortcut-links">
            <FaCompactDisc className="icon" />
            <p>Albums</p>
          </div>
          <div className="shortcut-links">
            <FaMicrophone className="icon" />
           <Link to="/artist"> <p>Artists</p></Link>
          </div>
        </div>

        <div className="shortcut">
          <p>PLAYLIST</p>
          {/* <div className="shortcut-links">
            <FaPlusCircle className="icon" />
            <p>\Create New</p>
          </div> */}
          <div className="shortcut-links">
          <FaPlayCircle className="icon" />
            <Link to="/playlist/1167751266"><p>1990s Hindi</p></Link>
          </div>
          <div className="shortcut-links">
            <FaPlayCircle className="icon" />
           <Link to="/playlist/940775963"> <p>Best of IndiPop</p></Link>
          </div>
          <div className="shortcut-links">
            <FaPlayCircle className="icon" />
            <Link to="/playlist/1170578842"><p>2000s Punjabi </p></Link>
          </div>
          <div className="shortcut-links">
            <FaPlayCircle className="icon" />
            <Link to="/playlist/3379491"><p>Best Of 90s</p></Link>
          </div>
        </div>
      </div>
     </div>

 <div class="wrapper">
 <div className="icon" id='left' onClick={() => handleArrowClick("left")}><MdArrowBackIos /></div>
      <ul class="tab-box"
       ref={tabsBoxRef}
       onMouseDown={handleMouseDown}
       onMouseMove={handleMouseMove}
       onMouseUp={handleMouseUp}>
        <li class="tab">Explore</li>
        <li class="tab active">Category</li>
        <li class="tab">Albums</li>
        <li class="tab">Artists</li>
        <li class="tab">Radio</li>
        <Link to="/playlist/940775963"><li class="tab">Best of IndiPop</li></Link>
        <Link to="/playlist/1170578842"><li class="tab">2000s Punjabi</li></Link>
        <Link to="/playlist/1167751266"><li class="tab">1990s Hindi</li></Link>
        <Link to="/playlist/3379491"><li class="tab">Best Of 90s</li></Link>
      </ul>
      <div className="icon" id='right' onClick={() => handleArrowClick("right")}><MdOutlineArrowForwardIos /></div>
    </div>

 
  </> 
  );
};

export default Sidebar;
