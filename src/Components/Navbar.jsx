// use a index.js file in assets folder and export the images for easy destructruing later
import Logo from "../assets/Logo.svg"
import HamburgerMenu from "./HamburgerMenu"
import MenuSvg from "../assets/MenuSvg"

import {useState} from 'react'

const Navbar = () => {


    const [openNavigation, setOpenNavigation] = useState(false);

    const toggleNavigation = () => {
        if (openNavigation) {
            setOpenNavigation(false);
        }else{
            setOpenNavigation(true);
        }
    }

    const handleClick = () => {
        setOpenNavigation(false);
    }

    return(
        // main container
        <div className={`fixed top-5 left-0 z-50 w-full`}>
            {/* holds the rest of the items: logo and links */}
            <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">

                {/* logo */}
                <a className="block" href="#hero">
                    <img src={Logo} width={75} height={75} alt="main logo" />
                </a>

               {/* links */}
               {/* the top-0 left-0 and bottom-0 stretch out the div with a flex to take over the entire screen */}
                <nav className={`${openNavigation ? `flex` : `hidden`} fixed top-[5rem] left-0 right-0 bottom-0 lg:static lg:flex lg:mr-0 lg:ml-auto`}>
                    <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
                        <a  
                        href="#gallery"
                        className={
                            `block relative text-2xl text-black transition-colors hover:text-blue-500 
                            px-20 py-6 md:py-8 lg:-mr-0.25 lg:text-s
                            lg:leading-5 xl:px-12`
                        }
                        
                        onClick={handleClick}>
                            Gallery
                        </a>
                        
                        <a  
                        href="#blog"
                        className={
                            `block relative text-2xl text-black transition-colors hover:text-blue-500 
                            px-20 py-6 md:py-8 lg:-mr-0.25 lg:text-s
                            lg:leading-5 xl:px-12`
                        }
                        
                        onClick={handleClick}>
                            Blog
                        </a>

                        <a  
                        href="#contact"
                        className={
                            `block relative text-2xl text-black transition-colors hover:text-blue-500 
                            px-20 py-6 md:py-8 lg:-mr-0.25 lg:text-s
                            lg:leading-5 xl:px-12`
                        }
                        
                        onClick={handleClick}
                        >

                            Contact
                        </a>
                    </div>

                    {/* this is the div that displays on mobile devices */}
                    <HamburgerMenu />
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