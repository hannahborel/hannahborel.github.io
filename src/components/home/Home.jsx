import React from "react";
import "./home.scss";
import Banner from "./Banner";
import Work from "./Work";
import Tools from "./Tools";

export default function Home({ setHideNav }) {
	return (
		<div className="sections">
			<Banner />
			<Work setHideNav={setHideNav} />
			<Tools />
		</div>
	);
}
