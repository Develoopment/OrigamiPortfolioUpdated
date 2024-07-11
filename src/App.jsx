import React from 'react'
import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import AboutMe from "./Components/AboutMe"
import GalleryPreview from "./Components/GalleryPreview"
import Footer from "./Components/Footer"

function App() {

  return (
    <div className='pt-[12rem] flex flex-col gap-28 lg:gap-40 px-12'>
      <Navbar />

      <Hero additionalClasses={"px-24"} />
      <AboutMe />
      <GalleryPreview />
      <Footer />
    </div>
  )
}

export default App
