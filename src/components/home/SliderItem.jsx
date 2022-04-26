import React from "react";
import "./sliderItem.scss";

export default function SliderItem({ item, setFeatured, setPage }) {
	const handleViewProject = (item, page) => {
		setFeatured(item);
		setPage(page);
	};

	return (
		<div className="container">
			<div className="item" onClick={() => handleViewProject(item.id, "project")}>
				<div className="bg-circle"></div>
				<div className="left">
					<div className="text-content">
						<div className="title">
							<p className="first">{item.titleFirst}</p>
							<p className="second">{item.titleSecond}</p>
						</div>
						<div className="sub-title">
							<p className="type">{item.type}</p>
							<p className="year">{item.year}</p>
						</div>
						<p className="project-link">View</p>
					</div>
				</div>
				<div className="right">
					<img src={item.img} alt="" className="project-img" id={"mobile-img-" + item.id} />
				</div>
			</div>
		</div>
	);
}
