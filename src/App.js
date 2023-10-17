import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import Header from "./layouts/header";
import Footer from "./layouts/footer";
import PreSale from "./pages/presale";
import Home from "./pages/home";
import { Provider } from "react-redux";

import store from "./store";


function App() {

	return <BrowserRouter>
		<div className="App dark:bg-black text-[#091E42] dark:text-[#FAFBFB]">
			<Provider store={ store }>
				{/* Header */}
				<Header/>
					<Routes>
						<Route path="/" element={ <Home/> } />
						<Route path="/presale" element={ <PreSale/> } />
					</Routes>
				{/* Footer */}
				<Footer/>
			</Provider>
		</div>
	</BrowserRouter>
}

export default App;
