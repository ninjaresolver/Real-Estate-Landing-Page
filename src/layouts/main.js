import React, { useEffect } from "react";

const Main = () => {
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
    const targets = document.querySelectorAll('.main-subs');

    targets.forEach((target) => {
        target.classList.add('opacity-0');
        observer.observe(target);
    });

    return () => {
        observer.disconnect();
    };
    }, []);
    return <div className="pt-24 pb-24 relative flex flex-col xl:flex-row lg:flex-row gap-6 xl:gap-6 md:gap-5 sm:gap-6 overflow-clip">
        {/* effects */}
        <img src="/assets/effects/ef_1.png" className="absolute top-0 left-0 w-[380px]"/>
        <img src="/assets/effects/ef_2.png" className="absolute top-0 left-0 w-[480px]"/>
        <img src="/assets/effects/ef_6.png" className="absolute top-20 right-20"/>
        <div className="px-4 xl:px-10 lg:px-10 md:px-8 w-full gap-4 xl:gap-8 lg:gap-8 md:gap-8 flex flex-col xl:flex-row lg:flex-row md:flex-row justify-start items-end">
            <img src="/assets/images/main.png" className="w-full xl:w-[500px] lg:w-[500px] md:w-[350px] main-subs translate-y-40 transform transition-transform"/>
            <div className="w-full xl:flex-grow lg:flex-grow md:flex-grow px-4 xl:px-0 lg:px-0 md:px-0 main-subs delay-200 translate-y-40 transform transition-transform">
                <div className="text-5xl xl:text-7xl lg:text-7xl md:text-5xl">
                    <h1><span className="text-indigo-800">Blockchain</span> in</h1>
                    <h1 className="mt-2">Real Estate</h1>
                </div>
                <div className="mt-4 xl:text-2xl lg:text-2xl md:text-xl">
                    Real estate in the blockchain era is undergoing a shift. Blockchain technology revolutionizing property transactions.
                </div>
                <div className="mt-4 flex items-center gap-4">
                    <button className="bg-indigo-800 px-8 xl:px-16 lg:px-16 md:px-12 py-2 rounded-md text-white transition-all duration-1000 hover:opacity-50">Invest</button>
                    <button className="border border-indigo-800 px-8 xl:px-16 lg:px-16 md:px-12 py-2 rounded-md duration-1000 hover:opacity-50">Whitepaper</button>
                </div>
            </div>
        </div>
    </div>
}

export default Main