import React, { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Carousel } from "@material-tailwind/react";
import { setActive } from "@material-tailwind/react/components/Tabs/TabsContext";

const Invest = () => {
    
    return <div className="relative py-32">
        <div className="px-4 xl:px-32 lg:px-32 md:px-24">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl xl:text-4xl lg:text-4xl md:text-4xl font-bold">Investments By Fraction</h1>
            </div>
            <Carousel
                className="-mt-8"
                nextArrow={ ({ handleNext }) => (
                    <button className="w-[30px] h-[30px] absolute top-0 right-[42px] rounded-full flex justify-center items-center text-indigo-800 border-2 border-indigo-900 duration-200 hover:text-white hover:bg-indigo-800" onClick={handleNext}>
                        <FaAngleLeft/>
                    </button>
                ) }
                prevArrow={ ({ handlePrev }) => (
                    <button className="w-[30px] h-[30px] absolute top-0 right-0 rounded-full flex justify-center items-center text-indigo-800 border-2 border-indigo-900 duration-200 hover:text-white hover:bg-indigo-800" onClick={handlePrev}>
                        <FaAngleRight/>
                    </button>
                ) }
                navigation={ () => {  } }
                >
                <div className="mt-16 flex flex-col xl:flex-row lg:flex-row justify-between gap-4 xl:gap-8 lg:gap-8 md:gap-8">
                    <img src="/assets/images/realstate2.png" className="w-full xl:w-[360px] lg:w-[360px]"/>
                    <div className="flex-grow">
                        <div className="flex flex-grow justify-between flex-col xl:flex-row lg:flex-row md:flex-row gap-4">
                            <div>
                                <div className="font-bold text-xl ">A charm in the mountains</div>
                                <div className="mt-2">San Andress islands. Colombia </div>
                            </div>
                            <div>
                                <div className="font-bold text-xl ">A charm in the mountains</div>
                                <div className="mt-2 text-xl font-bold text-indigo-800">Build Time: 115D: 17H: 40M </div>
                            </div>
                        </div>
                        <hr className="opacity-100 border-indigo-800 my-16 xl:my-12 lg:my-12 md:my-8"/>
                        <div>
                            <div className="flex gap-8 xl:gap-16 lg:gap-16 md:gap-12 flex-col xl:flex-row lg:flex-row md:flex-row">
                                <div className="font-bold text-xl ">A charm in the mountains</div>
                                <div className="font-bold text-xl ">Cost per share: 2,100 USDT</div>
                            </div>
                            <div className="mt-2 flex justify-between gap-4 flex-col xl:flex-row lg:flex-row md:flex-row">
                                <div className="leading-[2]">
                                    <div>Softcap: 22 TinyHouses</div>
                                    <div>Security: Prooft reserve + Multising protocol(Safe)</div>
                                    <div>Rent Value: 6,000 USD / month</div>
                                </div>
                                <div className="flex flex-col justify-between gap-4">
                                    <div className="font-bold text-xl ">Goal 1 : 86,100 USD</div>
                                    <button className="bg-indigo-800 px-16 py-2 rounded-sm text-white duration-1000 hover:opacity-50">Invest NOW</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-16 flex flex-col xl:flex-row lg:flex-row justify-between gap-4 xl:gap-8 lg:gap-8 md:gap-8">
                    <img src="/assets/images/realstate2.png" className="w-full xl:w-[360px] lg:w-[360px]"/>
                    <div className="flex-grow">
                        <div className="flex flex-grow justify-between flex-col xl:flex-row lg:flex-row md:flex-row gap-4">
                            <div>
                                <div className="font-bold text-xl ">A charm in the mountains</div>
                                <div className="mt-2">San Andress islands. Colombia </div>
                            </div>
                            <div>
                                <div className="font-bold text-xl ">A charm in the mountains</div>
                                <div className="mt-2 text-xl font-bold text-indigo-800">Build Time: 115D: 17H: 40M </div>
                            </div>
                        </div>
                        <hr className="opacity-100 border-indigo-800 my-16 xl:my-12 lg:my-12 md:my-8"/>
                        <div>
                            <div className="flex gap-8 xl:gap-16 lg:gap-16 md:gap-12 flex-col xl:flex-row lg:flex-row md:flex-row">
                                <div className="font-bold text-xl ">A charm in the mountains</div>
                                <div className="font-bold text-xl ">Cost per share: 2,100 USDT</div>
                            </div>
                            <div className="mt-2 flex justify-between gap-4 flex-col xl:flex-row lg:flex-row md:flex-row">
                                <div className="leading-[2]">
                                    <div>Softcap: 22 TinyHouses</div>
                                    <div>Security: Prooft reserve + Multising protocol(Safe)</div>
                                    <div>Rent Value: 6,000 USD / month</div>
                                </div>
                                <div className="flex flex-col justify-between gap-4">
                                    <div className="font-bold text-xl ">Goal 1 : 86,100 USD</div>
                                    <button className="bg-indigo-800 px-16 py-2 rounded-sm text-white duration-1000 hover:opacity-50">Invest NOW</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel>
        </div>
    </div>
}

export default Invest