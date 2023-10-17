import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaDiscord, FaPaperPlane } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from "react-redux";

const Footer = () => {
    const lang = useSelector(g => g.global?.lang);
    const { t, i18n } = useTranslation();
    useEffect(() => {
        i18n.changeLanguage(lang);
    }, [lang]);
    return <>
        <div className="w-full bg-white bg-opacity-10 shadow-sm">
             {/* logo */}
            <div className="container mx-auto flex justify-between py-4 px-4 xl:px-16 lg:px-16 md:px-8">
                <Link to={'/'}>
                    <img src="/assets/logo.png" alt="logo" className="h-[50px]"/>
                </Link>
                {/* links */}
                <div className="hidden xl:flex lg:flex justify-start items-center gap-2 xl:gap-12 lg:gap-12 md:gap-8">
                    <Link className="cursor-pointer duration-1000 transition-all hover:opacity-50">{t('home')}</Link>
                    <Link className="cursor-pointer duration-1000 transition-all hover:opacity-50">{t('how_it_works')}</Link>
                    <Link className="cursor-pointer duration-1000 transition-all hover:opacity-50">{t('token_nomics')}</Link>
                    <Link className="cursor-pointer duration-1000 transition-all hover:opacity-50">{t('tech_details')}</Link>
                    <Link className="cursor-pointer duration-1000 transition-all hover:opacity-50">{t('invest')}</Link>
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
    </>
}

export default Footer;