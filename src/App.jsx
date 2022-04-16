import "./app.scss";
import Nav from "./components/nav/Nav";
import Home from "./components/home/Home";
import Projects from "./components/projects/Projects";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import ScrollToTop from "./components/ScrollToTop";
import About from "./components/about/About";

function App() {
	const [hideNav, setHideNav] = useState(false);

	return (
		<BrowserRouter>
			<ScrollToTop />
			<Nav hideNav={hideNav} setHideNav={setHideNav} />
			<Routes>
				<Route path="/" element={<Home hideNav={hideNav} setHideNav={setHideNav} />} />
				<Route path="/projects" element={<Projects setHideNav={setHideNav} />} />
				<Route path="/about" element={<About />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
