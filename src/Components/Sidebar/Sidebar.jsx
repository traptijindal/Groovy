import React, { useRef, useState } from "react";
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
            <p>Genre</p>
          </div>
          <div className="shortcut-links">
            <FaCompactDisc className="icon" />
            <p>Albums</p>
          </div>
          <div className="shortcut-links">
            <FaMicrophone className="icon" />
            <p>Artists</p>
          </div>
          {/* <div className="shortcut-links">
            <FaRadio className="icon" />
            <p>Radio</p>
          </div> */}
        </div>

        <div className="shortcut">
          <p>PLAYLIST</p>
          <div className="shortcut-links">
            <FaPlusCircle className="icon" />
            <p>Create New</p>
          </div>
          <div className="shortcut-links">
            <FaPlayCircle className="icon" />
            <p>Best of 2021</p>
          </div>
          <div className="shortcut-links">
            <FaPlayCircle className="icon" />
            <p>New Jams</p>
          </div>
          <div className="shortcut-links">
            <FaPlayCircle className="icon" />
            <p>Design flow</p>
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
        <li class="tab active">Genre</li>
        <li class="tab">Albums</li>
        <li class="tab">Artists</li>
        <li class="tab">Radio</li>
        <li class="tab">Best of 2021</li>
        <li class="tab">New Jams</li>
        <li class="tab">Design flow</li>
        <li class="tab">Create New</li>
      </ul>
      <div className="icon" id='right' onClick={() => handleArrowClick("right")}><MdOutlineArrowForwardIos /></div>
    </div>

 
  </> 
  );
};

export default Sidebar;
