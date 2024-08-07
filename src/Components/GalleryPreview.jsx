import {recentModels} from "../constants"
import Heading from "../Typography/Heading"

const GalleryPreview = () => {
    return (
        // main container
        <div id="gallery" className="relative">

            <Heading className={"text-center"}>My Recent Models</Heading>

            <div className="relative grid md:grid-cols-2 xl:grid-cols-4 place-items-center">

                {recentModels.map((model, index) => (
                    
                    <div key={index} className="py-8 w-full h-full flex flex-col justify-center 
                    items-center gap-4 transition-all hover:shadow-xl 
                    hover:border-2">
                        
                        <div className="md:w-[20rem] md:h-[20rem]">
                            <img className="h-full w-full object-cover" 
                            src={model.imgUrl} 
                            alt={model.name} />
                        </div>

                        {/* text and subtext of the card */}
                        <div className="md:w-[20rem]">
                            <h3 className="text-2xl font-medium">{model.name} by {model.designer}</h3>
                            <p className="italic text-gray-500">Folded {model.dateFolded}</p>
                        </div>

                    </div>

                ))}
                
            </div>
            
        </div>
    )
}

export default GalleryPreview;