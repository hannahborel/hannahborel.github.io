import React from "react";
import "./progressBar.scss";

export default function ProgressBar({ changeWidth }) {
	return (
		<div className="progressBar">
			<div className="pb_container">
				<div className="pb_fill" style={{ width: changeWidth + "%" }}></div>
			</div>
		</div>
	);
}
