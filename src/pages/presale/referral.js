import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import classNames from "../../constants/classNames";
const Referal = () => {
  const lang = useSelector((g) => g.global?.lang);
  const { t, i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);
  return (
    <div className="bg-white bg-opacity-10 py-6">
      <div className="container px-4 xl:px-32 lg:px-32 md:px-24 flex flex-col xl:flex-row lg:flex-row md:flex-row gap-6">
        <div className="w-full xl:w-1/2 lg:w-1/2 md:w-1/2">
          <img
            src="/assets/images/referal.png"
            alt="..."
            className="w-full xl:w-[300px] lg:w-[300px] md:w-[300px] mx-auto block"
          />
        </div>
        <div className="w-full xl:w-1/2 lg:w-1/2 md:w-1/2">
          <h3 className="text-2xl xl:text-4xl lg:text-4xl md:text-3xl font-bold">
            {t("referal")}
          </h3>
          <div className="mt-6">{t("referal_description")}</div>
          <div className="mt-6">
            <button className={`px-12 py-3 rounded-md ${classNames.btnClass}`}>
              {t("copy_link")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Referal;
