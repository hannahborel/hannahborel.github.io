import React from "react";
import "./menu.scss";
import HomeMenu from "./HomeMenu";
import ProjectMenu from "./ProjectMenu";
import AboutMenu from "./AboutMenu";

export default function Menu({ menuOpen, setMenuType, setProject }) {
	return (
		<div className={"menu " + (menuOpen && "active")}>
			{window.location.pathname === "/" ? (
				<HomeMenu setMenuType={setMenuType} />
			) : window.location.pathname === "/projects" ? (
				<ProjectMenu setProject={setProject} />
			) : (
				<AboutMenu setMenuType={setMenuType} />
			)}
			{/* {!projectMenu && <HomeMenu />}
			{projectMenu && <ProjectMenu />} */}
		</div>
	);
}
