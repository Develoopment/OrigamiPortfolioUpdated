import {AboutPfp} from "../assets"

const AboutMe = () => {
    return(
        <div className="p-10 flex flex-col items-center lg:gap-20 gap-4 lg:flex-row lg:justify-center">
            
            <div>
                <img width={600} src={AboutPfp} alt="picture of myself holding up origami" />
            </div>

            <div className="">
                <h1 className="text-5xl my-4">About Me</h1>
                <p className="text-xl max-w-[37.5rem] leading-normal">
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