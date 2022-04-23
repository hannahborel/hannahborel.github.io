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
							<div className="bg-circle"></div>

							<div className="left">
								<div className="text-content">
									<div className="title">
										<p className="first" key="title-first">
											{d.titleFirst}
										</p>
										<p className="second" key="title-second">
											{d.titleSecond}
										</p>
									</div>
									<div className="sub-title">
										<p className="type" key="type">
											{d.type}
										</p>
										<p className="year" key="year">
											{d.year}
										</p>
									</div>
									{window.innerWidth > 768 && (
										<Link
											to="/projects"
											className="project-link"
											key="proj-state"
											onClick={() => handleProjects("/projects", d.id)}
										>
											View
										</Link>
									)}
								</div>
							</div>
							<div className="right">
								{window.innerWidth <= 768 ? (
									<Link
										to="/projects"
										className="project-link-sm"
										key="proj-state"
										onClick={() => handleProjects("/projects", d.id)}
									>
										<img
											key="proj-img"
											src={d.img}
											alt=""
											className="project-img"
											id={"mobile-img-" + d.id}
										/>
									</Link>
								) : (
									<img
										key="proj-img"
										src={d.img}
										alt=""
										className="project-img"
										id={"mobile-img-" + d.id}
									/>
								)}
							</div>
						</div>
					</div>
				))}
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
