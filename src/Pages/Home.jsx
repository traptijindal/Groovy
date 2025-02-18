import React from 'react'
import Sidebar from '../Components/Sidebar/Sidebar.jsx'
import Overview from '../Components/Overview/Overview.jsx'
import "./Home.css"

const Home = () => {
  return (
    <div>
      <Sidebar />
      <div className="main-content">
        <Overview/>
      </div>
   </div>
  )
}

export default Home