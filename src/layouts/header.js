import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; 
import { FaDiscord, FaPaperPlane } from "react-icons/fa"
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from "react-redux";
import Switcher from "../helper/Switcher";
import { setLang } from './../actions/globalActions';


const Header = () => {
    const lang = useSelector(g => g.global?.lang);
    const [language, setLanguage] = useState('english')
    const { t, i18n } = useTranslation();
    useEffect(() => {
        i18n.changeLanguage(lang);
        switch(lang) {
            case 'en': setLanguage('english'); break;
            case 'es': setLanguage('spanish'); break;
            case 'ru': setLanguage('russian'); break;
            case 'ch': setLanguage('chinesse'); break;
            case 'ar': setLanguage('arabic'); break;
            default: setLanguage('english'); break;
                
        }
    }, [lang]);
    const dispatch = useDispatch();
    const [toggle, setToggle] = useState(false);
    const handleTrans = ( code ) => {
        dispatch(setLang(code))
        setToggle(false);
    }
    return <header className={ `fixed top-0 w-full z-50 bg-white bg-opacity-10 shadow-sm` }>
        <div className="container mx-auto flex justify-between py-4 px-4 xl:px-16 lg:px-16 md:px-8 ">
            {/* logo */}
            <Link to={'/'}>
                <img src="/assets/logo.png" alt="logo" className="h-[50px]"/>
            </Link>
            {/* other */}
            <div className="flex justify-end items-center gap-2 xl:gap-12 lg:gap-12 md:gap-8">
                {/* links */}
                <div className="hidden xl:flex justify-start items-center gap-2 xl:gap-12 lg:gap-12 md:gap-8">
                    <Link className="cursor-pointer hover:opacity-50 transition-all duration-1000">{t('how_it_works')}</Link>
                    <Link className="cursor-pointer hover:opacity-50 transition-all duration-1000" to={'/presale'}>{t('pre_sale_app')}</Link>
                    <Link className="cursor-pointer hover:opacity-50 transition-all duration-1000">{t('staking_dapp')}</Link>
                    <Link className="cursor-pointer hover:opacity-50 transition-all duration-1000">{t('token_nomics')}</Link>
                    <Link className="cursor-pointer hover:opacity-50 transition-all duration-1000">{t('invest')}</Link>
                    <Link className="cursor-pointer hover:opacity-50 transition-all duration-1000">{t('traducer')}</Link>
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
                    <div className="relative" tabIndex={1} onBlur={ () => setTimeout(() => { if(toggle) setToggle(false) }, 200) }>
                        <button className="flex items-center gap-2 px-3 py-2 rounded-md border border-indigo-700 bg-indigo-300 dark:border-indigo-400  dark:bg-indigo-800 hover:opacity-50 transition-all duration-1000" onClick={() => setToggle(!toggle)}>
                            <img src="/assets/icons/toggle.png" className="h-[22px]"/>
                            {t(language)}
                            <img src="/assets/icons/angle-down.png" className=""/>
                        </button>
                        {
                            toggle && 
                            <div className="absolute top-full mt-2 w-full rounded-lg border border-indigo-700 bg-indigo-300 dark:border-indigo-400  dark:bg-indigo-800 ">
                                <ul>
                                    {
                                        ([
                                            { label: t('english'), code: 'en' },
                                            { label: t('spanish'), code: 'es' },
                                            { label: t('russian'), code: 'ru' },
                                            { label: t('chinesse'), code: 'ch' },
                                            { label: t('arabic'), code: 'ar' },
                                        ]).map((d, index) => 
                                            <li className="flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer hover:bg-white hover:bg-opacity-50" key={index} onClick={ () => handleTrans(d.code) }>{ d.label }</li>
                                        )
                                    }
                                </ul>
                            </div>
                        }
                        
                    </div>
                </div>
            </div>
        </div>
    </header>
}

export default Header
