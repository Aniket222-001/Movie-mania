import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Topmov from './Components/Topmov'
import Hollywod from './Components/Hollywoodmov'
import Bollywod from './Components/Bollywood'
import Webseries from './Components/Webseries'
import Footer from './Components/Footer'

const Main = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Topmov/>
      <Hollywod/>
      <Bollywod/>
      <Webseries/>
      <Footer/>
    </div>
  )
}

export default Main
