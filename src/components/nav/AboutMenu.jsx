import React from "react";
import "./aboutMenu.scss";

export default function AboutMenu({ setPage }) {
	return (
		<div>
			<ul>
				<li>
					<p onClick={() => setPage("home")}> Home</p>
				</li>
				<li>
					<p onClick={() => setPage("project")}>Projects</p>
				</li>
			</ul>
		</div>
	);
}
