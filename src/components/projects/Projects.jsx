import React from "react";
import ProjectsHeader from "./projectsHeader";
import ProjectsBody from "./ProjectsBody";
import "./projects.scss";
import { projectDetails } from "../../data";
import { useLocation } from "react-router-dom";

export default function Projects(props) {
	const location = useLocation();
	const state = location.state;
	console.log("data from works: ", state);

	let data = projectDetails[state];
	console.log(data);

	return (
		<div className="project">
			<ProjectsHeader headerData={data} />
			<ProjectsBody bodyData={data} />
		</div>
	);
}
