import React, { useRef, useState } from "react";
import { Link, useLocation } from "react-router";
import wave from "/Wave.svg";
import { MdOutlineExplore } from "react-icons/md";
import { AiFillSound } from "react-icons/ai";
import {
  FaCompactDisc,
  FaMicrophone,
  FaPlusCircle,
  FaPlayCircle,
} from "react-icons/fa";
import { MdArrowBackIos } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import "./Sidebar.css";

const Sidebar = () => {
  const location = useLocation();
  const tabsBoxRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleIcons = () => {
    const tabsBox = tabsBoxRef.current;
    if (!tabsBox) return;

    let scrollVal = tabsBox.scrollLeft;
    let maxScrollableWidth = tabsBox.scrollWidth - tabsBox.clientWidth;
    document.getElementById("left").style.display =
      scrollVal > 0 ? "flex" : "none";
    document.getElementById("right").style.display =
      maxScrollableWidth > scrollVal ? "flex" : "none";
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
            <Link to="/" className={location.pathname === "/" ? "active" : ""}>
              <div className="shortcut-links">
                <MdOutlineExplore className="icon" />
                <p>Explore</p>
              </div>
            </Link>
            <Link
              to="/category"
              className={location.pathname === "/category" ? "active" : ""}
            >
              <div className="shortcut-links">
                <AiFillSound className="icon" />
                <p>Category</p>
              </div>
            </Link>
            {/* <div className="shortcut-links">
              <FaCompactDisc className="icon" />
              <p>Albums</p>
            </div> */}
            <Link
              to="/artist"
              className={location.pathname === "/artist" ? "active" : ""}
            >
              <div className="shortcut-links">
                <FaMicrophone className="icon" />
                <p>Artists</p>
              </div>
            </Link>
          </div>

          <div className="shortcut">
            <p>PLAYLIST</p>
            {/* <div className="shortcut-links">
            <FaPlusCircle className="icon" />
            <p>\Create New</p>
          </div> */}
            <Link
              to="/playlist/1167751266"
              className={
                location.pathname === "/playlist/1167751266" ? "active" : ""
              }
            >
              <div className="shortcut-links">
                <FaPlayCircle className="icon" />
                <p>1990s Hindi</p>
              </div>
            </Link>
            <Link
              to="/playlist/940775963"
              className={
                location.pathname === "/playlist/940775963" ? "active" : ""
              }
            >
              <div className="shortcut-links">
                <FaPlayCircle className="icon" />
                <p>Best of IndiPop</p>
              </div>
            </Link>
            <Link
              to="/playlist/1170578842"
              className={
                location.pathname === "/playlist/1170578842" ? "active" : ""
              }
            >
              <div className="shortcut-links">
                <FaPlayCircle className="icon" />
                <p>2000s Punjabi </p>
              </div>
            </Link>
            <Link
              to="/playlist/3379491"
              className={
                location.pathname === "/playlist/3379491" ? "active" : ""
              }
            >
              <div className="shortcut-links">
                <FaPlayCircle className="icon" />
                <p>Best Of 90s</p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="wrapper">
        <div
          className="icon"
          id="left"
          onClick={() => handleArrowClick("left")}
        >
          <MdArrowBackIos />
        </div>
        <ul
          className="tab-box"
          ref={tabsBoxRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        >
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>
            <li className="tab">Explore</li>
          </Link>
          <Link
            to="/category"
            className={location.pathname === "/category" ? "active" : ""}
          >
            <li className="tab">Category</li>
          </Link>
          {/* <li className="tab">Albums</li> */}
          <Link
            to="/artist"
            className={location.pathname === "/artist" ? "active" : ""}
          >
            <li className="tab">Artists</li>
          </Link>
          {/* <li className="tab">Radio</li> */}
          <Link
            to="/playlist/940775963"
            className={
              location.pathname === "/playlist/940775963" ? "active" : ""
            }
          >
            <li className="tab">Best of IndiPop</li>
          </Link>
          <Link
            to="/playlist/1170578842"
            className={
              location.pathname === "/playlist/1170578842" ? "active" : ""
            }
          >
            <li className="tab">2000s Punjabi</li>
          </Link>
          <Link
            to="/playlist/1167751266"
            className={
              location.pathname === "/playlist/1167751266" ? "active" : ""
            }
          >
            <li className="tab">1990s Hindi</li>
          </Link>
          <Link
            to="/playlist/3379491"
            className={
              location.pathname === "/playlist/3379491" ? "active" : ""
            }
          >
            <li className="tab">Best Of 90s</li>
          </Link>
        </ul>
        <div
          className="icon"
          id="right"
          onClick={() => handleArrowClick("right")}
        >
          <MdOutlineArrowForwardIos />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
