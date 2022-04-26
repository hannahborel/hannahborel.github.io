import React from "react";
import { sliderData } from "../../data";
import "./projectMenu.scss";

export default function ProjectMenu({ featured, setFeatured }) {
	const boldTarget = featured;
	console.log("project-menu", boldTarget);

	return (
		<div>
			<ul>
				{sliderData.map((item, index) => (
					<li key={index}>
						<p
							key={index}
							id={boldTarget.toString() === index.toString() ? "bold" : "null"}
							onClick={() => setFeatured(index)}
						>
							{item.titleFirst}
							{item.titleSecond}
						</p>
					</li>
				))}
			</ul>
		</div>
	);
}
