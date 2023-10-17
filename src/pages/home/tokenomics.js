import React, { useEffect } from "react";
import { ApexChart } from "react-apexcharts";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const Tokenomics = () => {
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
    const targets = document.querySelectorAll(".token-subs");

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
        <h1 className="text-2xl xl:text-4xl lg:text-4xl md:text-4xl font-bold text-center token-subs translate-y-20 transform transition-transform">
          {t("token_nomics")}
        </h1>

        <div
          className={`mt-6 xl:mt-16 lg:mt-16 md:mt-8 w-full token-subs delay-400 translate-y-20 transform transition-transform`}
        >
          <div className="flex flex-col xl:flex-row lg:flex-row md:flex-row gap-4 xl:gap-12 lg:gap-12 md:gap-12">
            <div className="w-full xl:w-1/2 lg:w-1/2 md:w-1/2">
              {/* <ApexChart
                    series={[44, 55, 41, 17, 15]}
                  /> */}
            </div>
            <div className="w-full xl:w-1/2 lg:w-1/2 md:w-1/2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
