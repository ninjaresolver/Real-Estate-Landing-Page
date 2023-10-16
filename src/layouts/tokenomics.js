import React, { useEffect } from "react";

const Tokenomics = () => {
    const callback = (entries) => {
        entries.forEach((entry) => {
          console.log(entry)
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
          } else {
            entry.target.classList.remove('animate-slide-up');
          }
        });
      };
    
    useEffect(() => {
        const observer = new IntersectionObserver(callback);
        const targets = document.querySelectorAll('.token-subs');

        targets.forEach((target) => {
            target.classList.add('opacity-0');
            observer.observe(target);
        });

        return () => {
            observer.disconnect();
        };
    }, []);
    return <div className="relative overflow-clip py-16">
        <div className="px-4 xl:px-64 lg:px-64 md:px-24">
            <h1 className="text-2xl xl:text-4xl lg:text-4xl md:text-4xl font-bold text-center token-subs translate-y-40 transform transition-transform">Tokenomics</h1>

            <img src="/assets/images/tokenomics.png" className="mt-6 xl:mt-16 lg:mt-16 md:mt-8 w-full token-subs delay-400 translate-y-40 transform transition-transform"/>

        </div>
    </div>
}

export default Tokenomics;