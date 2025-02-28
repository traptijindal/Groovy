import React from 'react'
import Sidebar from '../Components/Sidebar/Sidebar.jsx'
import Overview from '../Components/Overview/Overview.jsx'
import "./Home.css"

const Home = ({token}) => {
  return (
    <div>
      <Sidebar />
      <div className="main-content">
        <Overview token={token}/>
      </div>
   </div>
  )
}

export default Home