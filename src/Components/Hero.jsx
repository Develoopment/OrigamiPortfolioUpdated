import Spline from "@splinetool/react-spline"
import {CTASvg} from "../assets"

import {useRef} from 'react'

const Hero = () => {

    const craneModel = useRef();

    const loadModel = (spline) => {
        const obj = spline.findObjectByName('origami-crane');

        craneModel.current = obj;
        console.log(craneModel.current);
    }


    return(
        <div className="text-center">

            <div className="lg:flex lg:flex-row-reverse">

                <div className="lg:w-1/2 lg:h-[40rem]">
                    <Spline className={`hidden lg:block`} onLoad={loadModel} scene="https://prod.spline.design/O7J-RGatlVMPcOzk/scene.splinecode" />
                </div>  

                <div className="relative my-auto lg:w-1/2 lg:left-12 lg:top-10">
                    <h1 className="text-[11rem]">Hey!</h1>
                    <p className="text-[1.8rem]">My name is Neerraj and I am an Origamist on a journey!</p>
                </div>

            </div>

            <div className="mt-20">
                <h3 className="text-xl mb-4 tracking-widest uppercase">Come See How It All Began!</h3>
                <img className="relative mx-auto" src={CTASvg} alt="Scroll Down" />
            </div>
           
        </div>
    )
}

export default Hero;