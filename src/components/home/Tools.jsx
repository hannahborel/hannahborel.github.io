import React from "react";
import "./tools.scss";

export default function Tools() {
	return (
		<div className="tools">
			<div className="wrapper">
				<div className="title">My Tools</div>
				<div className="iconRow first">
					<img className="icon" src="assets/img/ps.png" alt="" />
					<img className="icon" src="assets/img/ai.png" alt="" />
					<img className="icon" src="assets/img/id.png" alt="" />
					<img className="icon" src="assets/img/pr.png" alt="" />
					<img className="icon" src="assets/img/ae.png" alt="" />
					<img className="icon" src="assets/img/lr.png" alt="" />
				</div>
				<div className="iconRow second">
					<img className="icon" src="assets/img/sketch.png" alt="" />
					<img className="icon" src="assets/img/js.png" alt="" />
					<img className="icon" src="assets/img/html.png" alt="" />
					<img className="icon" src="assets/img/react.png" alt="" />
					<img className="icon" src="assets/img/node.png" alt="" />
					<img className="icon" src="assets/img/vsCode.png" alt="" />
				</div>
			</div>
		</div>
	);
}
