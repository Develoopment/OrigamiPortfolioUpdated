import {AboutPfp} from "../assets"

const AboutMe = () => {
    return(
        <div className=" p-10 flex flex-col items-center gap-10">

            <div>
                <img width={600} src={AboutPfp} alt="picture of myself holding up origami" />
            </div>

            <h1 className="text-5xl">About Me</h1>
            <p className="text-2xl max-w-[30rem]">
                Hey! My name is Neerraj and I have been folding origami since I was 5 years old.
                I love folding because it's relaxing though I often lose myself and the time flies.
                Although the time I have to do origami has gone down a lot because of high school,
                I hope that I can pick it up again soon.
            </p>

            
        </div>
    )
}

export default AboutMe;