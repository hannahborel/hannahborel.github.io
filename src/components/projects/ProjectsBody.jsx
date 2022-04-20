import React from "react";
import "./projectsBody.scss";
import BodyItem from "./BodyItem";
import ProjectFooter from "./ProjectFooter";

export default function ProjectsBody({ bodyData }) {
	return (
		<div className="project-body">
			<div className="bodyBanner">
				<img src={bodyData.banner} key="banner" alt="" />
			</div>
			{bodyData.body.map((item, index) => (
				<BodyItem key={item.index} text={item.p} img={item.img} video={item.video} />
			))}
			<ProjectFooter />
		</div>
	);
}
