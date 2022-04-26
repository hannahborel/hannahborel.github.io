import React from "react";
import "./home.scss";
import Banner from "./Banner";
import Work from "./Work";
import Tools from "./Tools";
import Contact from "./Contact";

export default function Home({ setFeatured, setPage }) {
	return (
		<div className="sections">
			<Banner />
			<Work setFeatured={setFeatured} setPage={setPage} />
			<Tools />
			<Contact />
		</div>
	);
}
