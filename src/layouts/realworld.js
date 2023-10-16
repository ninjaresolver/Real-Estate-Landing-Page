import React, { useEffect } from "react";

const RealWorld = () => {
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
        const targets = document.querySelectorAll('.real-world-subs');

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
            <h1 className="text-2xl xl:text-4xl lg:text-4xl md:text-4xl font-bold text-center mx-auto real-world-subs translate-y-40 transform transition-transform">Real World & Virtual World Off-plan Projects </h1>
            <div className="real-world-subs delay-200 translate-y-40 transform transition-transform">
                <div className="mt-6 xl:mt-16 lg:mt-16 md:mt-8 relative">
                    <img src="/assets/effects/ef_9.png" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"/>
                    <img src="/assets/images/realworld1.svg" className="mt-6 xl:mt-16 lg:mt-16 md:mt-8 w-full"/>
                </div>

                <div className="mt-4 text-xl text-center mx-auto leading-[1.5]">
                    <div>
                        Each property is represented in an ERC-1400 Token, a security standard for  
                        <div>
                            realty
                        </div>
                    </div>
                    <div className="font-bold">
                        1 Token = 10 m2 built  
                    </div>
                </div>
            </div>

        </div>
    </div>
}

export default RealWorld