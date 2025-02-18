import React from 'react'
import poster from '/songcard.jpeg'
import { FaPlay } from "react-icons/fa";
import "./Overview.css"

export default function Overview() {
  const genreList = [
    { name: "Dance Beat", color: "#476a8a" },
    { name: "Electro Pop", color: "#a49b7d" },
    { name: "Alternative Indie", color: "#a24c33" },
    { name: "Hip Hop", color: "#184145" },
    { name: "Classical", color: "#9f7a92" },
    { name: "Hip Hop Rap", color: "#55489f" }
  ];
  return (
    <div className='main-overview'>
      <div className='left'> 
          <div className="top">
               <div className="heading">
                 <p>Top Artists</p>
                 <p>See all</p>
               </div>
               <div className="artists">
                  <div className="card">
                      <img src={poster} alt="" />
                       <p className='title'>Sara Adams</p>
                       <p className='plays'>44M Plays</p>
                  </div>
                  <div className="card">
                  <img src={poster} alt="" />
                       <p className='title'>Sara Adams</p>
                       <p className='plays'>44M Plays</p>
                  </div>
                  <div className="card">
                  <img src={poster} alt="" />
                       <p className='title'>Sara Adams</p>
                       <p className='plays'>44M Plays</p>
                  </div>
                  <div className="card">
                  <img src={poster} alt="" />
                       <p className='title'>Sara Adams</p>
                       <p className='plays'>44M Plays</p>
                  </div>
                  <div className="card">
                  <img src={poster} alt="" />
                       <p className='title'>Sara Adams</p>
                       <p className='plays'>44M Plays</p>
                  </div>
               </div>
          </div>

          <div className='below'>
            <div className='left'>
                   <div className="heading">
                    <p>Genre</p>
                    <p>See all</p>
                   </div>

                   <div className="genre">
  {genreList.map((genre, index) => (
    <div 
      key={index} 
      className="card" 
      style={{ backgroundColor: genre.color }}
    >
      <p className='genre-name'>{genre.name}</p>
    </div>
  ))}
</div>
            </div>

            <div className='right'>
                  <div className="heading">
                    <p>TopCharts</p>
                    <p>See all</p>
                  </div>

                  <div className='charts'>
                    <div className='chart'>
                        <p>01</p>
                        <div className='title'>
                            <img src={poster} alt="" />
                            <p>Sara Adams</p>
                        </div>
                        <p className="time">3:45</p>
                        <FaPlay className='icon'/>
                    </div>
                    <div className='chart'>
                        <p>01</p>
                        <div className='title'>
                            <img src={poster} alt="" />
                            <p>Sara Adams</p>
                        </div>
                        <p className="time">3:45</p>
                        <FaPlay className='icon'/>
                    </div>
                    <div className='chart'>
                        <p>01</p>
                        <div className='title'>
                            <img src={poster} alt="" />
                            <p>Sara Adams</p>
                        </div>
                        <p className="time">3:45</p>
                        <FaPlay className='icon'/>
                    </div>
                    <div className='chart'>
                        <p>01</p>
                        <div className='title'>
                            <img src={poster} alt="" />
                            <p>Sara Adams</p>
                        </div>
                        <p className="time">3:45</p>
                        <FaPlay className='icon'/>
                    </div>
                  </div>
            </div>
          </div>
      </div>

      <div className='right'>

      </div>
    </div>
  )
}
