import React from "react";
import "./work.scss";
import { sliderData } from "../../data";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Work({ setHideNav }) {
	const [currentSlide, setCurrentSlide] = useState(0);

	const handleClick = (way) => {
		way === "left"
			? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
			: setCurrentSlide(currentSlide < sliderData.length - 1 ? currentSlide + 1 : 0);
	};

	return (
		<div className="work" id="work">
			<div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
				{sliderData.map((d, i) => (
					<div className="container">
						<div className="item">
							<div className={d.circle}></div>
							<div className="left">
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
									state={d.id}
									className="project-link"
									onClick={() => setHideNav(true)}
								>
									View Project
								</Link>
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
				src="./assets/img/icons/arrow-gray.png"
				alt=""
				onClick={() => handleClick("left")}
			/>
			<img
				className="arrow right"
				src="./assets/img/icons/arrow-gray.png"
				alt=""
				onClick={() => handleClick()}
			/>
		</div>
	);
}
