import React, { useEffect } from "react";
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from "react-redux";
import Header from "./header";
import OpenfabricAi from "./openfabricai";
import Infos from "./infos";

const PreSale = () => {
  const lang = useSelector((g) => g.global?.lang);
  const { t, i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);
  
  return (
    <div className="relative overflow-clip">
      <img
        src="/assets/effects/ef_10.png"
        alt="effect"
        className="absolute -top-60 -right-12"
      />
      <img
        src="/assets/effects/ef_10.png"
        alt="effect"
        className="absolute top-full -mt-80 right-0"
      />
      <img
        src="/assets/effects/ef_11.png"
        alt="effect"
        className="absolute top-1/3 right-5"
      />
      <img
        src="/assets/effects/ef_11.png"
        alt="effect"
        className="absolute top-2/3 left-5"
      />
      <img
        src="/assets/effects/ef_12.png"
        alt="effect"
        className="absolute bottom-1/3 right-10"
      />
      <img
        src="/assets/effects/ef_12.png"
        alt="effect"
        className="absolute bottom-16 right-0"
      />
      {/* page header */}
      <Header />
      {/*  */}
      <OpenfabricAi />
      {/* infos */}
      <Infos />
    </div>
  );
};

export default PreSale;
