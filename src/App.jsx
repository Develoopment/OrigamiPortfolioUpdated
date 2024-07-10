import React from 'react'
import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import AboutMe from "./Components/AboutMe"

function App() {

  return (
    <div className='pt-[12rem]'>
      <Navbar />

      <Hero additionalClasses={"px-24 mb-40"} />
      <AboutMe />
    </div>
  )
}

export default App
