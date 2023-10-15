import React from "react";

const Realstate = () => {
    return <div className="relative overflow-clip py-16">
        <img src="/assets/effects/ef_5.png" className="absolute -bottom-64 w-[800px] rotate-180 right-0"/>
        <div className="px-4 xl:px-64 lg:px-64 md:px-24">
            <h1 className="text-2xl xl:text-4xl lg:text-4xl md:text-4xl text-center">Real state by Fractions & Green Energy</h1>
            <div className="mt-8 flex flex-col xl:flex-row lg:flex-row md:flex-row justify-between gap-8 xl:gap-8 lg:gap-8 md:gap-8">
                <div className="w-full xl:w-1/2 lg:w-1/2 md:w-1/2">
                    <img src="/assets/images/realstate1.png" className="w-full"/>
                </div>
                <div className="w-full xl:w-1/2 lg:w-1/2 md:w-1/2">
                    <img src="/assets/images/realstate2.png" className="w-full"/>
                </div>
            </div>
        </div>
    </div>
}

export default Realstate;