import React from "react";
import "./home.scss";
import Banner from "./Banner";
import Work from "./Work";
import Tools from "./Tools";
import Contact from "./Contact";

export default function Home({ setHideNav }) {
	return (
		<div>
			<div className="sections">
				<Banner />
				<Work setHideNav={setHideNav} />
				<Tools />
			</div>
			<Contact />
		</div>
	);
}
