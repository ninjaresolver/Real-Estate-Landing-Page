import React, { useEffect } from "react";

const Realstate = () => {
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
        const targets = document.querySelectorAll('.real-estate-subs');

        targets.forEach((target) => {
            target.classList.add('opacity-0');
            observer.observe(target);
        });

        return () => {
            observer.disconnect();
        };
    }, []);
    return <div className="relative overflow-clip py-16">
        <img src="/assets/effects/ef_5.png" className="absolute -bottom-64 w-[800px] rotate-180 right-0"/>
        <div className="px-4 xl:px-64 lg:px-64 md:px-24">
            <h1 className="text-2xl xl:text-4xl lg:text-4xl md:text-4xl font-bold text-center real-estate-subs delay-200 -translate-y-20 transform transition-transform">Real state by Fractions & Green Energy</h1>
            <div className="mt-8 flex flex-col xl:flex-row lg:flex-row md:flex-row justify-between gap-8 xl:gap-8 lg:gap-8 md:gap-8">
                <div className="w-full xl:w-1/2 lg:w-1/2 md:w-1/2 real-estate-subs delay-600 translate-y-40 transform transition-transform">
                    <img src="/assets/images/realstate1.png" className="w-full"/>
                </div>
                <div className="w-full xl:w-1/2 lg:w-1/2 md:w-1/2 real-estate-subs delay-600 translate-y-40 transform transition-transform">
                    <img src="/assets/images/realstate2.png" className="w-full"/>
                </div>
            </div>
        </div>
    </div>
}

export default Realstate;