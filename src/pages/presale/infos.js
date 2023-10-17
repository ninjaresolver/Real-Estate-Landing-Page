import React, { useEffect } from "react";
import classNames from "../../constants/classNames";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const Infos = () => {
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
    const targets = document.querySelectorAll(".presale-info-subs");

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
      <div className="container mx-auto px-4 xl:px-24 lg:px-24 md:px-16 py-16 flex flex-col xl:flex-row lg:flex-row md:flex-row gap-4 xl:gap-24 lg:gap-24 md:gap-16">
        <div className="w-full xl:w-1/2 lg:w-1/2 md:w-1/2 presale-info-subs translate-y-20  transform transition-all">
          <h2 className="text-2xl xl:text-4xl lg:text-4xl md:text-3xl">
            {t("token_information")}
          </h2>
          <div className="mt-6">
            <div
              className={`p-2 rounded-sm flex justify-between mb-2 ${classNames.cardClass}`}
            >
              <span>{t("token_ticker")}</span>
              <span>CWF</span>
            </div>
            <div
              className={`p-2 rounded-sm flex justify-between mb-2 ${classNames.cardClass}`}
            >
              <span>{t("token_supply")}</span>
              <span>700000000</span>
            </div>
            <div
              className={`p-2 rounded-sm flex justify-between mb-2 ${classNames.cardClass}`}
            >
              <span>{t("network")}</span>
              <span className="font-bold">CWF</span>
            </div>
            <div
              className={`p-2 rounded-sm flex justify-between mb-2 ${classNames.cardClass}`}
            >
              <span>{t("token_address")}</span>
              <span className="font-bold">0x7B78....23c76d5</span>
            </div>
            <div
              className={`p-2 rounded-sm flex justify-between mb-2 ${classNames.cardClass}`}
            >
              <span>{t("decimal")}</span>
              <span className="font-bold">20</span>
            </div>
          </div>
        </div>

        <div className="w-full xl:w-1/2 lg:w-1/2 md:w-1/2 presale-info-subs translate-y-20  transform transition-all">
          <h2 className="text-2xl xl:text-4xl lg:text-4xl md:text-3xl">
            {t("decimal")}
          </h2>
          <div className="mt-6">
            <div
              className={`p-2 rounded-sm flex justify-between mb-2 ${classNames.cardClass}`}
            >
              <span>{t("token_distribution")}</span>
              <span>100000</span>
            </div>
            <div
              className={`p-2 rounded-sm flex justify-between mb-2 ${classNames.cardClass}`}
            >
              <span>{t("min_allocation")}</span>
              <span>0.01 BUSD</span>
            </div>
            <div
              className={`p-2 rounded-sm flex justify-between mb-2 ${classNames.cardClass}`}
            >
              <span>{t("max_allocation")}</span>
              <span>0.01 BUSD</span>
            </div>
            <div
              className={`p-2 rounded-sm flex justify-between mb-2 ${classNames.cardClass}`}
            >
              <span>{t("min_swap_level")}</span>
              <span>10</span>
            </div>
            <div
              className={`p-2 rounded-sm flex justify-between mb-2 ${classNames.cardClass}`}
            >
              <span>{t("access_type")}</span>
              <span>{t("public")}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Infos;
