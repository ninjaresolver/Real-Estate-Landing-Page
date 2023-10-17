import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const Tabs = () => {
  const lang = useSelector((g) => g.global?.lang);
  const { t, i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);
  const callback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-slide-up");
      } else {
        entry.target.classList.remove("animate-slide-up");
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callback);
    const targets = document.querySelectorAll(".footer-subs");

    targets.forEach((target) => {
      target.classList.add("opacity-0");
      observer.observe(target);
    });

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <div className="relative pt-16 overflow-clip">
      {/* <img src="/assets/effects/ef_9.png" className="absolute left-0 w-full rotate-180 bottom-400 -z-10"/> */}

      <div className="container mx-auto px-4 xl:px-32 lg:px-32 md:px-16 mb-6">
        <div className="relative flex flex-col xl:flex-row lg:flex-row ">
          <img
            src="/assets/images/tab.png"
            alt="..."
            className="absolute top-0 left-0 w-full h-full -z-0 hidden xl:block lg:block"
          />
          <div className="w-full xl:w-1/3 lg:w-1/3 flex flex-col justify-start items-center py-10 group cursor-pointer px-0 xl:lx-4 lg:px-4 md:px-4 footer-subs translate-y-20 transition-all duration-300 trnasform delay-300">
            <div className="w-[90px] h-[90px] bg-indigo-800 bg-opacity-10 border-2 border-indigo-800 rounded-md p-4 flex justify-center items-center group-hover:scale-125 transition-all duration-500">
              <img src="/assets/images/passive.png" alt="..." />
            </div>
            <div className="mt-4">
              <h4 className="font-bold text-xl text-center">
                {t("passive")}
              </h4>
              <div className="text-center mt-4">{t("passive_description")}</div>
            </div>
          </div>
          <div className="w-full xl:w-1/3 lg:w-1/3 flex flex-col justify-start items-center py-10 group cursor-pointer px-0 xl:lx-4 lg:px-4 md:px-4 footer-subs -translate-y-20 transition-all duration-300 trnasform delay-500">
            <div className="w-[90px] h-[90px] bg-indigo-800 bg-opacity-10 border-2 border-indigo-800 rounded-md p-4 flex justify-center items-center group-hover:scale-125 transition-all duration-500">
              <img src="/assets/images/transparency.png" alt="..." />
            </div>
            <div className="mt-4">
              <h4 className="font-bold text-xl text-center">
                {t("transparency")}
              </h4>
              <div className="text-center mt-4">{t("transparency_description")}</div>
            </div>
          </div>
          <div className="w-full xl:w-1/3 lg:w-1/3 flex flex-col justify-start items-center py-10 group cursor-pointer px-0 xl:lx-4 lg:px-4 md:px-4 footer-subs translate-y-20 transition-all duration-300 trnasform delay-300">
            <div className="w-[90px] h-[90px] bg-indigo-800 bg-opacity-10 border-2 border-indigo-800 rounded-md p-4 flex justify-center items-center group-hover:scale-125 transition-all duration-500">
              <img src="/assets/images/multi-signature.png" alt="..." />
            </div>
            <div className="mt-4">
              <h4 className="font-bold text-xl text-center">
                {t("multi_singnature")}
              </h4>
              <div className="text-center mt-4">{t("multi_singnature_description")}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
