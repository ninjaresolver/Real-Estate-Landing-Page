 import React, { useState } from "react";
 import { FaDiscord, FaFlagUsa, FaPaperPlane } from "react-icons/fa"
import Switcher from "../Switcher";

const Header = () => {
    const [toggle, setToggle] = useState(false)
    return <header className={ `fixed flex justify-between top-0 w-full z-50 py-4 px-4 xl:px-16 lg:px-16 md:px-8 bg-indigo-100 dark:bg-white dark:bg-opacity-10 shadow-sm` }>

        {/* logo */}
        <img src="/assets/logo.png" className="h-[50px]"/>
        {/* other */}
        <div className="flex justify-end items-center gap-2 xl:gap-12 lg:gap-12 md:gap-8">
            {/* links */}
            <div className="hidden xl:flex justify-start items-center gap-2 xl:gap-12 lg:gap-12 md:gap-8">
                <a className="cursor-pointer hover:opacity-50 transition-all duration-1000">How it Works</a>
                <a className="cursor-pointer hover:opacity-50 transition-all duration-1000">Presale dapp</a>
                <a className="cursor-pointer hover:opacity-50 transition-all duration-1000">Staking dapp</a>
                <a className="cursor-pointer hover:opacity-50 transition-all duration-1000">Tokennomics</a>
                <a className="cursor-pointer hover:opacity-50 transition-all duration-1000">Invest</a>
                <a className="cursor-pointer hover:opacity-50 transition-all duration-1000">Traducer</a>
            </div>
            {/* site controls */}
            <div className="flex justify-end items-center gap-2 xl:gap-4 lg:gap-4 md:gap-4">
                <div className="flex items-center gap-2 xl:gap-4 lg:gap-4 md:gap-4">
                    <button className="rounded-full border border-indigo-700 bg-indigo-700 bg-opacity-30 dark:border-indigo-400  dark:bg-indigo-800 w-[30px] h-[30px] flex justify-center items-center p-2  transition-all duration-1000 hover:opacity-50">
                        <FaPaperPlane/>
                    </button>
                    <button className="rounded-full border border-indigo-700 bg-indigo-700 bg-opacity-30 dark:border-indigo-400  dark:bg-indigo-800 w-[30px] h-[30px] flex justify-center items-center p-2 transition-all duration-1000 hover:opacity-50">
                        <FaDiscord/>
                    </button>
                    <Switcher/>
                </div>
                <div className="relative" tabIndex={1} onBlur={ () => setToggle(false) }>
                    <button className="flex items-center gap-2 px-3 py-2 rounded-md border border-indigo-700 bg-indigo-300 dark:border-indigo-400  dark:bg-indigo-800 hover:opacity-50 transition-all duration-1000" onClick={() => setToggle(!toggle)}>
                        <img src="/assets/icons/toggle.png" className="h-[22px]"/>
                        English
                        <img src="/assets/icons/angle-down.png" className=""/>
                    </button>
                    {
                        toggle && 
                        <div className="absolute top-full mt-2 w-full rounded-lg border border-indigo-700 bg-indigo-300 dark:border-indigo-400  dark:bg-indigo-800 ">
                            < ul>
                                <li className="flex items-center gap-2  px-3 py-2 hover:bg-white rounded-md cursor-pointer">English</li>
                                <li className="flex items-center gap-2  px-3 py-2 hover:bg-white rounded-md cursor-pointer">Spanish</li>
                            </ul>
                        </div>
                    }
                    
                </div>
            </div>
        </div>
    </header>
}

export default Header
