import {AboutPfp} from "../assets"
import Heading from "../Typography/Heading"

const AboutMe = () => {
    return(
        <div id="aboutme" className="p-10 flex flex-col items-center lg:gap-20 gap-4 lg:flex-row lg:justify-center">
            
            <div>
                <img width={500} src={AboutPfp} alt="picture of myself holding up origami" />
            </div>

            <div className="">
                <Heading>About Me</Heading>

                <p className="text-lg max-w-[37.5rem] leading-normal">
                    Hey! My name is Neerraj and I have been folding origami since I was 5 years old.
                    I love folding because it's relaxing though I often lose myself and the time flies.
                    Although the time I have to do origami has gone down a lot because of high school,
                    I hope that I can pick it up again soon.
                </p>
            </div>

            
        </div>
    )
}

export default AboutMe;