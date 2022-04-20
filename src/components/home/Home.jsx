import React from "react";
import "./home.scss";
import Banner from "./Banner";
import Work from "./Work";
import Tools from "./Tools";
import Contact from "./Contact";

export default function Home({ menuType, setMenuType, setProject }) {
	return (
		<div className="sections">
			<Banner />
			<Work menuType={menuType} setMenuType={setMenuType} setProject={setProject} />
			<Tools />
			<Contact />
		</div>
	);
}
