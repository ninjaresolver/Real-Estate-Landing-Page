import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const RealWorld = () => {
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
    const targets = document.querySelectorAll(".real-world-subs");

    targets.forEach((target) => {
      target.classList.add("opacity-0");
      observer.observe(target);
    });

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <div className="relative overflow-clip py-16">
      <div className="container mx-auto px-4 xl:px-64 lg:px-64 md:px-24">
        <h1 className="text-2xl xl:text-4xl lg:text-4xl md:text-4xl font-bold text-center mx-auto real-world-subs translate-y-20 transform transition-transform">
          {t("real_world")}
        </h1>
        <div className="real-world-subs delay-200 translate-y-20 transform transition-transform">
          <div className="mt-6 xl:mt-16 lg:mt-16 md:mt-8 relative">
            <img
              src="/assets/effects/ef_9.png"
              alt="..."
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
            <img
              src="/assets/images/realworld1.svg"
              alt="..."
              className="mt-6 xl:mt-16 lg:mt-16 md:mt-8 w-full"
            />
          </div>

          <div className="mt-4 text-xl text-center mx-auto leading-[1.5]">
            <div>
              {t("real_world_desp_1")}
              <div>{t("real_world_desp_2")}</div>
            </div>
            <div className="font-bold">{t("real_world_desp_3")}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealWorld;
