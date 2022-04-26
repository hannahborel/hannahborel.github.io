import React from "react";
import "./body.scss";
import Home from "../components/home/Home";
import Projects from "../components/projects/Projects";
import About from "../components/about/About";
import Menu from "../components/nav/Menu";

import { useState, useEffect } from "react";

export default function Body({ page, setPage, menuOpen, setMenuOpen }) {
	const [featured, setFeatured] = useState(0);
	console.log("featured ", featured);

	useEffect(() => {
		const data = window.localStorage.getItem("FEATURED_PROJECT");
		if (data) {
			setFeatured(JSON.parse(data));
		}
		console.log("data", data);
	}, []);

	useEffect(() => {
		window.localStorage.setItem("FEATURED_PROJECT", JSON.stringify(featured));
	}, [featured]);

	return (
		<div className="body">
			<Menu
				menuOpen={menuOpen}
				setMenuOpen={setMenuOpen}
				setPage={setPage}
				page={page}
				setFeatured={setFeatured}
				featured={featured}
			/>
			<div className="fade-in">
				{page === "home" && <Home setFeatured={setFeatured} setPage={setPage} />}
				{page === "project" && <Projects featured={featured} />}
				{page === "about" && <About />}
			</div>
		</div>
	);
}
