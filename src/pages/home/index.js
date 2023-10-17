import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
// import
import Main from "./main";
import Mision from "./mision";
import Realstate from "./realstate";
import HowItWork from "./howitwork";
import RealWorld from "./realworld";
import MultiSignatureSecurity from "./multisignature";
import Tokenomics from "./tokenomics";
import Invest from "./invests";
import Tabs from "./tabs";

const Home = () => {
  const lang = useSelector((g) => g.global?.lang);
  const { t, i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);
  return (
    <>
      {/* Main */}
      <Main />
      <div className="relative overflow-clip">
        <img
          src="/assets/effects/ef_7.png"
          className="absolute top-1/3 -right-6 w-[400px]"
        />
        {/* Mision */}
        <Mision />
        {/* Real state */}
        <Realstate />
      </div>

      {/* How it work */}
      <HowItWork />

      {/* Real World */}
      <RealWorld />

      {/* MultiSignatureSecurity */}
      <MultiSignatureSecurity />

      {/* Tokenomics */}
      <Tokenomics />

      {/* Investments By Fraction */}
      <Invest />
      {/* tabs */}
      <Tabs />
    </>
  );
};

export default Home;
