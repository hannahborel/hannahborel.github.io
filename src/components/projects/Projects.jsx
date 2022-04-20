import React from "react";
import ProjectsHeader from "./projectsHeader";
import ProjectsBody from "./ProjectsBody";

import "./projects.scss";
import { projectDetails } from "../../data";
// import { useLocation } from "react-router-dom";
// import {useState } from "react";

export default function Projects({ project }) {
	let data = projectDetails[project];

	return (
		<div className="project" id="project">
			<ProjectsHeader headerData={data} />
			<ProjectsBody bodyData={data} />
		</div>
	);
}
