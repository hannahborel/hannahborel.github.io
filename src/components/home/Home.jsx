import React from "react";
import "./home.scss";
import Banner from "./Banner";
import Work from "./Work";
import Tools from "./Tools";

export default function Home() {
	return (
		<div className="app">
			<Banner />
			<Work />
			<Tools />
		</div>
	);
}
