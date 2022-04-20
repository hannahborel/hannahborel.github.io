import React from "react";
import "./work.scss";
import { sliderData } from "../../data";
import { useState } from "react";
import { Link } from "react-router-dom";
import ProgressBar from "./ProgressBar";

export default function Work({ setMenuType, setProject }) {
	const progressUnit = 100 / sliderData.length;
	const [currentSlide, setCurrentSlide] = useState(0);
	const [progressWidth, setProgressWidth] = useState(100 / sliderData.length);
	const handleClick = (way) => {
		way === "left"
			? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 0)
			: setCurrentSlide(currentSlide < sliderData.length - 1 ? currentSlide + 1 : 0);
	};

	const handleProgressBar = (way) => {
		if (way === "right" && progressWidth !== 100) {
			setProgressWidth(progressWidth + progressUnit);
		} else if (way === "left" && progressWidth > progressUnit) {
			setProgressWidth(progressWidth - progressUnit);
		} else setProgressWidth(progressUnit);
		// } else if (way === "right" && progressWidth === 100) {
		// 	setProgressWidth(progressUnit);
	};

	const handleProjects = (page, num) => {
		setMenuType(page);
		setProject(num);
	};

	return (
		<div className="work" id="work">
			<div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
				{sliderData.map((d, i) => (
					<div className="container">
						<div className="item">
							<div className={d.circle}></div>
							<div className="left">
								<div className="text-content">
									<div className="title">
										<p className="first">{d.titleFirst}</p>
										<p className="second">{d.titleSecond}</p>
									</div>
									<div className="sub-title">
										<p className="type">{d.type}</p>
										<p className="year">{d.year}</p>
									</div>
									<Link
										to="/projects"
										className="project-link"
										onClick={() => handleProjects("/projects", d.id)}
									>
										View Project
									</Link>
								</div>
							</div>
							<div className="right">
								<img src={d.img} alt="" className="project-img" />
							</div>
						</div>
					</div>
				))}
				;
			</div>
			<img
				className="arrow left"
				src="./assets/img/icons/arrow-dark-left.png"
				alt=""
				onClick={() => {
					handleProgressBar("left");
					handleClick("left");
				}}
			/>
			<img
				className="arrow right"
				src="./assets/img/icons/arrow-dark-round.png"
				alt=""
				onClick={() => {
					handleProgressBar("right");
					handleClick();
				}}
			/>
			<ProgressBar changeWidth={progressWidth} />
		</div>
	);
}
