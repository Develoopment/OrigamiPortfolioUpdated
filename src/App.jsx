import React from 'react'
import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import AboutMe from "./Components/AboutMe"

function App() {

  return (
    <div className='pt-[9rem] px-24'>
      <Navbar />

      <Hero />
      <AboutMe />
    </div>
  )
}

export default App
