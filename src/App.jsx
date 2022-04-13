import "./app.scss";
import Nav from "./components/nav/Nav";
import Home from "./components/home/Home";
import Projects from "./components/projects/Projects";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
	const [hideNav, setHideNav] = useState(false);

	return (
		<BrowserRouter>
			<div className="app">
				<Nav hideNav={hideNav} setHideNav={setHideNav} />
				<div className="content">
					<Routes>
						<Route path="/" element={<Home hideNav={hideNav} setHideNav={setHideNav} />} />
						<Route path="/projects" element={<Projects />} />
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
