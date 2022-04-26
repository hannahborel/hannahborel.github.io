import React from "react";
import "./bodyItem.scss";

export default function BodyItem({ text, img, video }) {
	return (
		<div className="body-item">
			{text && <p className="body-text-content">{text}</p>}
			{img && <img src={img} alt="" />}
			{video && (
				<video id="video" playsInline autoPlay muted loop>
					<source src={video}></source>
				</video>
			)}
		</div>
	);
}
