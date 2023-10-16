import React from "react";
import { FaDiscord, FaPaperPlane } from "react-icons/fa";

const Footer = () => {
    return <div className="relative pt-16 overflow-clip">
        <img src="/assets/effects/ef_9.png" className="absolute left-0 w-full rotate-180 bottom-0 -z-10"/>

        <div className="flex flex-col xl:flex-row lg:flex-row px-4 xl:px-32 lg:px-32 md:px-16">
            <div className="w-full xl:w-1/3 lg:w-1/3 flex flex-col justify-start items-center py-10">
                <div className="w-[90px] h-[90px] bg-indigo-800 bg-opacity-10 border-2 border-indigo-800 rounded-md p-4 flex justify-center items-center">
                    <img src="/assets/images/passive.png"/>
                </div>
                <div className="mt-4">
                    <h4 className="font-bold text-xl text-center">
                        Passive Income
                    </h4>
                    <div className="text-center mt-4">
                        Earn rental income and receive quarterly deposits
                    </div>
                </div>
            </div>
            <div className="w-full xl:w-1/3 lg:w-1/3 flex flex-col justify-start items-center py-10">
                <div className="w-[90px] h-[90px] bg-indigo-800 bg-opacity-10 border-2 border-indigo-800 rounded-md p-4 flex justify-center items-center">
                    <img src="/assets/images/transparency.png"/>
                </div>
                <div className="mt-4">
                    <h4 className="font-bold text-xl text-center">
                        Transparency in processes
                    </h4>
                    <div className="text-center mt-4">
                        We use blockchain and a dapp of governance to inspect each Process and authorize disbursements by stages of constructionWe use blockchain and a dapp of governance to inspect each Process and authorize disbursements by stages of construction
                    </div>
                </div>
            </div>
            <div className="w-full xl:w-1/3 lg:w-1/3 flex flex-col justify-start items-center py-10">
                <div className="w-[90px] h-[90px] bg-indigo-800 bg-opacity-10 border-2 border-indigo-800 rounded-md p-4 flex justify-center items-center">
                    <img src="/assets/images/multi-signature.png"/>
                </div>
                <div className="mt-4">
                    <h4 className="font-bold text-xl text-center">
                        Multi-signature security (22-41)
                    </h4>
                    <div className="text-center mt-4">
                        Digital security is legal Compatible and tangible for investors Qualified
                    </div>
                </div>
            </div>
        </div>


        <div className="flex justify-between top-0 w-full z-50 py-4 px-4 xl:px-16 lg:px-16 md:px-8 bg-indigo-100 dark:bg-white dark:bg-opacity-10 shadow-sm">
             {/* logo */}
            <img src="/assets/logo.png" className="h-[50px]"/>
            {/* links */}
            <div className="hidden xl:flex lg:flex justify-start items-center gap-2 xl:gap-12 lg:gap-12 md:gap-8">
                <a className="cursor-pointer duration-1000 transition-all hover:opacity-50">Home</a>
                <a className="cursor-pointer duration-1000 transition-all hover:opacity-50">How it Works</a>
                <a className="cursor-pointer duration-1000 transition-all hover:opacity-50">Tokennomics</a>
                <a className="cursor-pointer duration-1000 transition-all hover:opacity-50">Tech Details</a>
                <a className="cursor-pointer duration-1000 transition-all hover:opacity-50">Invest</a>
            </div>
            {/* site controls */}
            <div className="flex justify-end items-center gap-2 xl:gap-4 lg:gap-4 md:gap-4">
                <div className="flex items-center gap-2 xl:gap-4 lg:gap-4 md:gap-4">
                    <button className="rounded-full border border-indigo-700 bg-indigo-700 bg-opacity-30 dark:border-indigo-400  dark:bg-indigo-800 w-[30px] h-[30px] flex justify-center items-center p-2 cursor-pointer duration-1000 transition-all hover:opacity-50">
                        <FaPaperPlane/>
                    </button>
                    <button className="rounded-full border border-indigo-700 bg-indigo-700 bg-opacity-30 dark:border-indigo-400  dark:bg-indigo-800 w-[30px] h-[30px] flex justify-center items-center p-2 cursor-pointer duration-1000 transition-all hover:opacity-50">
                        <FaDiscord/>
                    </button>
                </div>
            </div>
        </div>
    </div>
}

export default Footer;