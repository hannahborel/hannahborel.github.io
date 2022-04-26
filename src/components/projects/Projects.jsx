import React from "react";
import ProjectsHeader from "./projectsHeader";
import ProjectsBody from "./ProjectsBody";
import "./projects.scss";
import ScrollToTop from "../../components/ScrollToTop";

import { projectDetails } from "../../data";

export default function Projects({ featured }) {
	const data = projectDetails[featured];

	return (
		<div className="project" id="project">
			<ScrollToTop />
			<ProjectsHeader headerData={data} />
			<ProjectsBody bodyData={data} />
		</div>
	);
}
