import React from "react";
import "./projectsBody.scss";
import BodyItem from "./BodyItem";

export default function ProjectsBody({ bodyData }) {
	console.log("bodyData: ", bodyData.body);
	return (
		<div className="project-body">
			<div className="bodyBanner">
				<img src={bodyData.banner} alt="" />
			</div>
			{bodyData.body.map((item, index) => (
				<BodyItem key={item.index} text={item.p} img={item.img} video={item.video} />
			))}
		</div>
	);
}
