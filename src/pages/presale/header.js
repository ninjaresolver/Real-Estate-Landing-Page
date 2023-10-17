import React, { useEffect } from "react";
import classNames from "../../constants/classNames";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const Header = () => {
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
    const targets = document.querySelectorAll(".presale-heaader-subs");

    targets.forEach((target) => {
      target.classList.add("opacity-0");
      observer.observe(target);
    });

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <div className="page-header pt-20">
      <div className="container mx-auto px-4 xl:px-16 lg:px-16 md:px-8 py-4 presale-heaader-subs translate-y-20 transform transition-transform">
        <div className="flex justify-between items-center">
          <div className="">
            <h1 className="text-xl xl:text-4xl lg:text-4xl md:text-2xl">
              {t("fwcc")}{" "}
              <span className="text-indigo-800">{t("pre")}</span>{" "}
              {t("sale")}
            </h1>
            <div className="">
              {t("sale_ens")} : 7 {t("days")}, 19{" "}
              {t("hours")} {t("and")} 16 {t("minutes")}
            </div>
          </div>
          <button
            className={`flex justify-between items-center gap-2 rounded-md px-4 py-2 ${classNames.btnClass}`}
          >
            <div className="text-left">
              <div>{t("connect")}</div>
              <div>{t("wallet")}</div>
            </div>
            <img src="/assets/icons/wallet.png" alt="wallet" />
          </button>
        </div>
      </div>
      <div className="my-10 bg-indigo-800 h-[2px]"></div>
    </div>
  );
};

export default Header;
