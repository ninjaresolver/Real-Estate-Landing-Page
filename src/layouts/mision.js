import React from "react";

const Mision = () => {
    return <div className="relative py-32 overflow-clip">
        <img src="/assets/effects/ef_7.png" className="absolute -left-20 bottom-0 w-[400px]"/>
        <div className="px-4 xl:px-16 lg:px-16 md:px-12 w-full  gap-4 xl:gap-8 lg:gap-8 md:gap-8 flex flex-col xl:flex-row lg:flex-row justify-start items-center">
            <img src="/assets/images/mision.png" className="w-full xl:w-[500px] lg:w-[500px] "/>
            <div className="flex-grow px-0 xl:px-16 lg:px-12 md:px-10">
                <h1 className="text-2xl xl:text-4xl lg:text-4xl md:text-4xl">OUR MISION</h1>
                <div className="mt-6 text-xl">
                    <div>
                        Our mission is to join forces in the fight against unemployment rates, climate change, and the housing crisis affecting homeless families. 
                    </div>
                    <div className="mt-6">
                        We pledge to use real-world assets to promote sustainable and eco-friendly tourism, reduce carbon footprint, and create a positive social impact.
                    </div>

                </div>
            </div>
        </div>
    </div>
}

export default Mision;