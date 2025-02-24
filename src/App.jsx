import React from 'react'
import Navbar from './Components/Navbar/Navbar.jsx'
import './App.css'
import Home from './Pages/Home.jsx'
import Player from './Components/Player/Player.jsx'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Player/>
    </div>
  )
}

export default App
