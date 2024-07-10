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

            <div className="lg:flex lg:flex-row-reverse gap-20 lg:text-left text-center">

                <div className="lg:w-1/2 lg:h-[40rem] relative bottom-10 right-10">
                    <Spline className={`hidden lg:block`} scene="https://prod.spline.design/O7J-RGatlVMPcOzk/scene.splinecode" />
                </div>  

                <div className="relative my-auto lg:w-[500px]">
                    <h1 className="text-[8rem]">Hey!</h1>
                    <p className="text-[1.8rem] mt-5">Nice to Meet You! My name is Neerraj and I am an Origamist on a journey!</p>
                </div>

            </div>

            <div className="mt-20">
                <h3 className="text-center text-xl mb-4 tracking-widest uppercase">Come See How It All Began!</h3>
                <img className="relative mx-auto" src={CTASvg} alt="Scroll Down" />
            </div>
           
        </div>
    )
}

export default Hero;