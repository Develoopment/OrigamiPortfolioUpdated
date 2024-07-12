import Spline from "@splinetool/react-spline"
import {CTASvg} from "../assets"

import {useRef} from 'react'

const Hero = ({additionalClasses}) => {

    const craneModel = useRef();

    const loadModel = (spline) => {
        const obj = spline.findObjectByName('origami-crane');

        craneModel.current = obj;
        console.log(craneModel.current);
    }


    return(
        <div className={`${additionalClasses} h-[48rem]`}>

            <div className="lg:flex lg:flex-row-reverse gap-20 lg:text-left text-center relative">

                {/* 3d model imported from spline */}
                <div className="lg:w-1/2 lg:h-[35rem] relative bottom-10 right-10">
                    <Spline className={`hidden lg:block`} scene="https://prod.spline.design/O7J-RGatlVMPcOzk/scene.splinecode" />
                </div>  
                
                <div className="relative my-auto lg:w-[500px] w-full">
                    <h1 className="text-[5rem] md:text-[8rem] lg:text-[6rem]">Hey!</h1>
                    <p className="text-[1.5rem] md:text-[1.8rem] lg:text-[1.3rem] mt-5">Nice to Meet You! My name is Neerraj and I am an Origamist on a journey!</p>
                </div>

            </div>

            <div className="mt-40 md:mt-80 lg:mt-0">
                <h3 className="text-center text-md md:text-lg mb-4 tracking-widest uppercase">Come See How It All Began!</h3>
                <img className="relative mx-auto" src={CTASvg} alt="Scroll Down" />
            </div>
           
        </div>
    )
}

export default Hero;