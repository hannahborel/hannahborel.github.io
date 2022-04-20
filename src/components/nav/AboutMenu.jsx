import React from "react";
import { Link } from "react-router-dom";
import "./aboutMenu.scss";

export default function AboutMenu(setMenuType) {
	return (
		<div>
			<ul>
				<li>
					<Link to="/" onClick={() => setMenuType("/")}>
						Home
					</Link>
				</li>
				<li>
					<Link to="/projects" state={0} onClick={() => setMenuType("/about")}>
						Projects
					</Link>
				</li>
			</ul>
		</div>
	);
}
