import React from "react";
import { sliderData } from "../../data";
import "./projectMenu.scss";

export default function ProjectMenu({ setProject }) {
	return (
		<div>
			<ul>
				{sliderData.map((item, index) => (
					<li id={item.key}>
						<p key={index} onClick={() => setProject(index)}>
							{item.titleFirst}
							{item.titleSecond}
						</p>
					</li>
				))}
			</ul>
		</div>
	);
}
