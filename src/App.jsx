import React from 'react'
import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import AboutMe from "./Components/AboutMe"

function App() {

  return (
    <div className='pt-[12rem] flex flex-col gap-28 lg:gap-40'>
      <Navbar />

      <Hero additionalClasses={"px-24"} />
      <AboutMe />
    </div>
  )
}

export default App
