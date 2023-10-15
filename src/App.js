import logo from "./logo.svg";
import "./App.css";
import Header from "./layouts/header";
import { useEffect, useState } from "react";
import Main from "./layouts/main";
import Mision from "./layouts/mision";
import Realstate from "./layouts/realstate";
import HowItWork from "./layouts/howitwork";
import RealWorld from "./layouts/realworld";
import MultiSignatureSecurity from "./layouts/multisignature";
import Tokenomics from "./layouts/tokenomics";
import Invest from "./layouts/invests";
import Footer from "./layouts/footer";

function App() {
  return <div className="App dark:bg-black text-[#091E42] dark:text-[#FAFBFB]">
		{/* Header */}
		<Header/>
		{/* Main */}
		<Main/>
		<div className="relative overflow-clip">
			<img src="/assets/effects/ef_7.png" className="absolute top-1/3 -right-6 w-[400px]"/>
			{/* Mision */}
			<Mision/>
			{/* Real state */}
			<Realstate/>
		</div>

		{/* How it work */}
		<HowItWork/>

		{/* Real World */}
		<RealWorld/>

		{/* MultiSignatureSecurity */}
		<MultiSignatureSecurity/>

		{/* Tokenomics */}
		<Tokenomics/>

		{/* Investments By Fraction */}
		<Invest/>

		{/* Footer */}
		<Footer/>

	</div>;
}

export default App;
