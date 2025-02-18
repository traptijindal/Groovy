import React from 'react'
import poster from '/songcard.jpeg'
import { FaPlay } from "react-icons/fa";
import "./Overview.css"

export default function Overview() {
  return (
    <div className='main'>
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
                       <p className='plays'></p>
                  </div>
                  <div className="card">
                  <img src={poster} alt="" />
                       <p className='title'>Sara Adams</p>
                       <p className='plays'></p>
                  </div>
                  <div className="card">
                  <img src={poster} alt="" />
                       <p className='title'>Sara Adams</p>
                       <p className='plays'></p>
                  </div>
                  <div className="card">
                  <img src={poster} alt="" />
                       <p className='title'>Sara Adams</p>
                       <p className='plays'></p>
                  </div>
                  <div className="card">
                  <img src={poster} alt="" />
                       <p className='title'>Sara Adams</p>
                       <p className='plays'></p>
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
                      <div className="card">
                             <p>Dance Beat</p>
                      </div>
                      <div className="card">
                             <p>Electro Pop</p>
                      </div>
                      <div className="card">
                               <p>Alternative Indie</p>
                      </div>
                      <div className="card">
                                 <p>Hip Hop</p>
                      </div>
                      <div className="card">
                             <p>Classical</p>
                      </div>
                      <div className="card">
                               <p>Hip Hop Rap</p>
                      </div>
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
