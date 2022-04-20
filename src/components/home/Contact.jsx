import React from "react";
import "./contact.scss";

export default function Contact() {
	return (
		<div className="contact" id="contact">
			<div className="contact-item">
				<a href="mailto:hannahborel@icloud.com" className="email">
					Email
				</a>
			</div>
			<div className="contact-item">
				<a
					href="https://www.linkedin.com/in/hannah-borel/"
					target="_blank"
					rel="noreferrer"
					className="linkedIn"
				>
					LinkedIn
				</a>
			</div>
			<div className="contact-item">
				<a href="./assets/img/hbResume.pdf" className="resume" target="_blank" rel="noreferrer">
					Resume
				</a>
			</div>
		</div>
	);
}
