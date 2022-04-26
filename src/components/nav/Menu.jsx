import React from "react";
import "./menu.scss";
import HomeMenu from "./HomeMenu";
import ProjectMenu from "./ProjectMenu";
import AboutMenu from "./AboutMenu";

export default function Menu({ page, setPage, menuOpen, setFeatured, featured }) {
	return (
		<div className={"menu " + (menuOpen && "active")}>
			{page === "home" && <HomeMenu setPage={setPage} />}
			{page === "project" && <ProjectMenu setFeatured={setFeatured} featured={featured} />}
			{page === "about" && <AboutMenu setPage={setPage} />}
		</div>
	);
}
