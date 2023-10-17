import React, { useEffect } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Carousel } from "@material-tailwind/react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const Invest = () => {
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
    const targets = document.querySelectorAll(".invest");

    targets.forEach((target) => {
      target.classList.add("opacity-0");
      observer.observe(target);
    });

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <div className="relative py-32">
      <div className="container mx-auto px-4 xl:px-32 lg:px-32 md:px-24 invest translate-y-20 transition-transform transform ">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl xl:text-4xl lg:text-4xl md:text-4xl font-bold">
            {t("investments")}
          </h1>
        </div>
        <Carousel
          className="-mt-8"
          nextArrow={({ handleNext }) => (
            <button
              className="w-[30px] h-[30px] absolute top-0 right-[42px] rounded-full flex justify-center items-center text-indigo-800 border-2 border-indigo-900 duration-200 hover:text-white hover:bg-indigo-800"
              onClick={handleNext}
            >
              <FaAngleLeft />
            </button>
          )}
          prevArrow={({ handlePrev }) => (
            <button
              className="w-[30px] h-[30px] absolute top-0 right-0 rounded-full flex justify-center items-center text-indigo-800 border-2 border-indigo-900 duration-200 hover:text-white hover:bg-indigo-800"
              onClick={handlePrev}
            >
              <FaAngleRight />
            </button>
          )}
          navigation={() => {}}
        >
          <div className="mt-16 flex flex-col xl:flex-row lg:flex-row justify-between gap-4 xl:gap-8 lg:gap-8 md:gap-8">
            <img
              src="/assets/images/realstate2.png"
              alt="..."
              className="w-full xl:w-[360px] lg:w-[360px]"
            />
            <div className="flex-grow">
              <div className="flex flex-grow justify-between flex-col xl:flex-row lg:flex-row md:flex-row gap-4">
                <div>
                  <div className="font-bold text-xl ">{t("invest_heading")}</div>
                  <div className="mt-2">{t("san_address")} </div>
                </div>
                <div>
                  <div className="font-bold text-xl ">{t("invest_heading")}</div>
                  <div className="mt-2 text-xl font-bold text-indigo-800">
                    {t("build_time")}: 115D: 17H: 40M{" "}
                  </div>
                </div>
              </div>
              <hr className="opacity-100 border-indigo-800 my-16 xl:my-12 lg:my-12 md:my-8" />
              <div>
                <div className="flex gap-8 xl:gap-16 lg:gap-16 md:gap-12 flex-col xl:flex-row lg:flex-row md:flex-row">
                  <div className="font-bold text-xl ">{t("staking_dapp")}</div>
                  <div className="font-bold text-xl ">
                    {t("cost_per")}: 2,100 USDT
                  </div>
                </div>
                <div className="mt-2 flex justify-between gap-4 flex-col xl:flex-row lg:flex-row md:flex-row">
                  <div className="leading-[2]">
                    <div>{t("soft_cap")}: {t("soft_value")}</div>
                    <div>
                      {t("security")}: { t('security_value') }
                    </div>
                    <div>
                      {t("rent_value")}: 6,000 USD / {t("month")}
                    </div>
                  </div>
                  <div className="flex flex-col justify-between gap-4">
                    <div className="font-bold text-xl ">
                      {t("goal")} 1 : 86,100 USD
                    </div>
                    <button className="bg-indigo-800 px-16 py-2 rounded-sm text-white duration-1000 hover:opacity-50">
                      {t("invest_now")}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 flex flex-col xl:flex-row lg:flex-row justify-between gap-4 xl:gap-8 lg:gap-8 md:gap-8">
            <img
              src="/assets/images/realstate2.png"
              alt="..."
              className="w-full xl:w-[360px] lg:w-[360px]"
            />
            <div className="flex-grow">
              <div className="flex flex-grow justify-between flex-col xl:flex-row lg:flex-row md:flex-row gap-4">
                <div>
                  <div className="font-bold text-xl ">{t("invest_heading")}</div>
                  <div className="mt-2">{t("san_address")} </div>
                </div>
                <div>
                  <div className="font-bold text-xl ">{t("invest_heading")}</div>
                  <div className="mt-2 text-xl font-bold text-indigo-800">
                    {t("build_time")}: 115D: 17H: 40M{" "}
                  </div>
                </div>
              </div>
              <hr className="opacity-100 border-indigo-800 my-16 xl:my-12 lg:my-12 md:my-8" />
              <div>
                <div className="flex gap-8 xl:gap-16 lg:gap-16 md:gap-12 flex-col xl:flex-row lg:flex-row md:flex-row">
                  <div className="font-bold text-xl ">{t("staking_dapp")}</div>
                  <div className="font-bold text-xl ">
                    {t("cost_per")}: 2,100 USDT
                  </div>
                </div>
                <div className="mt-2 flex justify-between gap-4 flex-col xl:flex-row lg:flex-row md:flex-row">
                  <div className="leading-[2]">
                    <div>{t("soft_cap")}: {t("soft_value")}</div>
                    <div>
                      {t("security")}: { t('security_value') }
                    </div>
                    <div>
                      {t("rent_value")}: 6,000 USD / {t("month")}
                    </div>
                  </div>
                  <div className="flex flex-col justify-between gap-4">
                    <div className="font-bold text-xl ">
                      {t("goal")} 1 : 86,100 USD
                    </div>
                    <button className="bg-indigo-800 px-16 py-2 rounded-sm text-white duration-1000 hover:opacity-50">
                      {t("invest_now")}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Invest;
