import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const Mision = () => {
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
    const targets = document.querySelectorAll(".our-mission-subs");

    targets.forEach((target) => {
      target.classList.add("opacity-0");
      observer.observe(target);
    });

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <div className="relative py-32 overflow-clip">
      <img
        src="/assets/effects/ef_7.png"
        alt="..."
        className="absolute -left-20 bottom-0 w-[400px]"
      />
      <div className="container mx-auto px-4 xl:px-16 lg:px-16 md:px-12 w-full  gap-4 xl:gap-8 lg:gap-8 md:gap-8 flex flex-col xl:flex-row lg:flex-row justify-start items-center">
        <img
          src="/assets/images/mision.png"
          alt="..."
          className="w-full xl:w-[500px] lg:w-[500px] our-mission-subs translate-y-20 transform transition-transform"
        />
        <div className="flex-grow px-0 xl:px-16 lg:px-12 md:px-10 our-mission-subs translate-y-20 transform transition-transform">
          <h1 className="text-2xl xl:text-4xl lg:text-4xl md:text-4xl font-bold">
            {t("ourmission")}
          </h1>
          <div className="mt-6 text-xl">
            <div>{t("ourmission_desp_1")}</div>
            <div className="mt-6">{t("ourmission_desp_2")}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mision;
