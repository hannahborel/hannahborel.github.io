import "./app.scss";
import "./global.scss";
import Nav from "./components/nav/Nav";
import Home from "./components/home/Home";
import Projects from "./components/projects/Projects";
import { HashRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import ScrollToTop from "./components/ScrollToTop";
import About from "./components/about/About";
import Menu from "./components/nav/Menu";
import ProjectFooter from "./components/projects/ProjectFooter";

function App() {
	const [menuOpen, setMenuOpen] = useState(false);
	const [menuType, setMenuType] = useState(window.location.pathname);
	const [project, setProject] = useState(0);

	return (
		<HashRouter>
			<ScrollToTop />
			<Nav menuOpen={menuOpen} setMenuOpen={setMenuOpen} setMenuType={setMenuType} />
			<Menu
				menuOpen={menuOpen}
				setMenuOpen={setMenuOpen}
				setMenuType={setMenuType}
				setProject={setProject}
			/>
			<Routes>
				<Route
					path="/"
					element={
						<Home
							menuType={menuType}
							setMenuType={setMenuType}
							project={project}
							setProject={setProject}
						/>
					}
				/>
				<Route path="/projects" element={<Projects project={project} />} />
				<Route path="/about" element={<About />} />
			</Routes>
			<ProjectFooter />
		</HashRouter>
	);
}

export default App;
