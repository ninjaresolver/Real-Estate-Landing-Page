import React, { useEffect } from "react";
import classNames from "../../constants/classNames";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const OpenfabricAi = () => {
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
    const targets = document.querySelectorAll(".presale-openfabrics-subs");

    targets.forEach((target) => {
      target.classList.add("opacity-0");
      observer.observe(target);
    });

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <div>
      <div className="container mx-auto px-4 xl:px-16 lg:px-16 md:px-8 py-4 flex flex-col xl:flex-row lg:flex-row md:flex-row gap-4 xl:gap-24 lg:gap-24 md:gap-16">
        <div className="w-full xl:w-1/2 lg:w-1/2 md:w-1/2 flex flex-col justify-between presale-openfabrics-subs translate-y-20  transform transition-all">
          <h1 className="text-3xl xl:text-6xl lg:text-6xl md:text-4xl">
            {t("openfabric")}
          </h1>
          <div className="mt-8">
            <div>{t("openfabric_description")}</div>
            <div
              className={`mt-8 bg-white bg-opacity-10 p-4 rounded-md ${classNames.cardClass}`}
            >
              <div className="text-xl">{t("vesting")}</div>
              <div>{t("vesting_description")}</div>
            </div>
          </div>
        </div>

        <div
          className={`w-full xl:w-1/2 lg:w-1/2 md:w-1/2rounded-md flex flex-col justify-between presale-openfabrics-subs translate-y-20  transform transition-all ${classNames.cardClass}`}
        >
          <div className="p-4 flex justify-between items-center border-b border-white">
            <div>
              <div>{t("total_rasied")}</div>
              <div className="text-xl font-bold">22 BUSD</div>
            </div>
            <button className={`px-6 py-2rounded-md ${classNames.cardClass}`}>
              1 BUSD = 16.66 CWF
            </button>
          </div>
          <div className="p-4">
            <div>
              <div className="flex justif-between items-center">
                <span>0.00/0 CWF</span>
                <span>{t("progress")} 0.00%</span>
              </div>
              <div
                className={`h-[35px] w-fullrounded-md ${classNames.cardClass}`}
              ></div>
            </div>
            <div className="mt-4 flex justify-between items-center">
              <div>{t("limited")}</div>
              <div>{t("participants")}: 15</div>
            </div>
            <div className="mt-4 flex justify-between items-center">
              <button
                className={`bg-indigo-800 rounded-md px-8 py-3 ${classNames.btnClass}`}
              >
                {t("invest")}
              </button>
              <div>{t("starts_in")} 02:16:30:49</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenfabricAi;
