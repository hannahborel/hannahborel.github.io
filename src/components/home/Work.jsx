import React from "react";
import "./work.scss";
import { sliderData } from "../../data";
import { useState } from "react";
import ProgressBar from "./ProgressBar";
import SliderItem from "./SliderItem";

export default function Work({ setFeatured, setPage }) {
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

	return (
		<div className="work" id="work">
			<div className="section-title">My Work</div>

			<div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
				{sliderData.map((data, i) => (
					<SliderItem key={i} item={data} setFeatured={setFeatured} setPage={setPage} />
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
