import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
const HowItWork = () => {
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
    const targets = document.querySelectorAll(".how-it-work-subs");

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
        <h1 className="text-2xl xl:text-4xl lg:text-4xl md:text-4xl font-bold text-center how-it-work-subs delay-200 translate-y-20 transform transition-transform">
          {t("how_it_work")}
        </h1>

        <img
          src="/assets/images/howitwork.png"
          alt="..."
          className="mt-6 xl:mt-16 lg:mt-16 md:mt-8 w-full how-it-work-subs delay-200 translate-y-20 transform transition-transform"
        />
      </div>
    </div>
  );
};

export default HowItWork;
