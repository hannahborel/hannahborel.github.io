import React from "react";

export default function HomeMenu({ setPage }) {
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
					<p onClick={() => setPage("about")}>About</p>
				</li>
				<li>
					<a href="#contact" className="menuItem">
						Contact
					</a>
				</li>
			</ul>
		</div>
	);
}
