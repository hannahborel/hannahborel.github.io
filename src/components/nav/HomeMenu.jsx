import React from "react";
import { Link } from "react-router-dom";

export default function HomeMenu({ setMenuType }) {
	return (
		<div>
			<ul>
				<li>
					<a href="#work">Work</a>
				</li>
				<li>
					<a href="#tools">Tools </a>
				</li>
				<li>
					<Link to="/about" id="#about" onClick={() => setMenuType("/about")}>
						About
					</Link>
				</li>
				<li>
					<a href="#contact" className="menuItem">
						{" "}
						Contact
					</a>
				</li>
			</ul>
		</div>
	);
}
