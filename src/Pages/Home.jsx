import React from 'react'
import Sidebar from '../Components/Sidebar/Sidebar.jsx'
import Overview from '../Components/Overview/Overview.jsx'
import "./Home.css"
import Slider from '../Components/Slider/Slider.jsx'

const Home = ({token}) => {
  return (
    <div>
      <Sidebar />
      <div className="main-content">
      {/* <Slider token={token}/> */}
        <Overview token={token}/>
      </div>
   </div>
  )
}

export default Home