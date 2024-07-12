// use a index.js file in assets folder and export the images for easy destructruing later
import Logo from "../assets/Logo.svg"
import MenuSvg from "./MenuSvg"

import {useState} from 'react'

import { disablePageScroll, enablePageScroll } from "scroll-lock";

const Navbar = () => {


    const [openNavigation, setOpenNavigation] = useState(false);

    const toggleNavigation = () => {
        if (openNavigation) {
            setOpenNavigation(false);
            enablePageScroll();
        }else{
            setOpenNavigation(true);
            disablePageScroll();
        }
    }

    const handleClick = () => {
        setOpenNavigation(false);
        enablePageScroll();
    }

    return(
        // main container
        <div className={`fixed top-0 left-0 z-50 w-full`}>
            {/* holds the rest of the items: logo and links */}
            <div className="flex items-center px-5 lg:px-7.5 lg:py-2 lg:px-24 xl:px-10 max-lg:py-4 bg-white">

                {/* logo */}
                <a className="block" href="#hero">
                    <img src={Logo} width={55} height={55} alt="main logo" />
                </a>

               {/* links */}
               {/* the top-0 left-0 and bottom-0 stretch out the div with a flex to take over the entire screen */}
                <nav className={`${openNavigation ? `flex` : `hidden`} fixed top-[6.5rem] left-0 right-0 bottom-0 bg-white lg:static lg:flex lg:mr-0 lg:ml-auto`}>
                    <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row gap-8">
                        <a  
                        href="#aboutme"
                        className={
                            `block relative text-2xl text-black text-center transition-colors hover:text-blue-500 
                            px-20 py-6 md:py-8 lg:-mr-0.25 lg:text-lg
                            lg:leading-5 xl:px-12`
                        }
                        
                        onClick={handleClick}>
                            About Me
                        </a>
                        
                        <a  
                        href="#gallery"
                        className={
                            `block relative text-2xl text-black transition-colors hover:text-blue-500 
                            px-20 py-6 md:py-8 lg:-mr-0.25 lg:text-lg
                            lg:leading-5 xl:px-12`
                        }
                        
                        onClick={handleClick}>
                            Gallery
                        </a>

                        <a  
                        href="#contact"
                        className={
                            `block relative text-2xl text-black transition-colors hover:text-blue-500 
                            px-20 py-6 md:py-8 lg:-mr-0.25 lg:text-lg
                            lg:leading-5 xl:px-12`
                        }
                        
                        onClick={handleClick}
                        >
                            Contact
                        </a>

                        <a  
                        href="#blog"
                        className={
                            `block relative text-2xl text-black transition-colors hover:text-blue-500 
                            px-20 py-6 md:py-8 lg:-mr-0.25 lg:text-lg
                            lg:leading-5 xl:px-12`
                        }
                        
                        onClick={handleClick}>
                            Blog
                        </a>
                    </div>

                    {/* this is the div that displays on mobile devices */}
                </nav>


                {/* hamburger menu button */}
                <button onClick={toggleNavigation} className="ml-auto lg:hidden">
                    <MenuSvg openNavigation={openNavigation}/>
                </button>

            </div>

        </div>
    )
}

export default Navbar;