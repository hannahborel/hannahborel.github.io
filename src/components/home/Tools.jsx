import React from "react";
import "./tools.scss";

export default function Tools() {
	return (
		<div className="tools" id="tools">
			<div className="wrapper">
				<div className="title">My Tools</div>
				<div className="iconRow first">
					<img className="icon" src="./assets/img/icons/ps.png" alt="" />
					<img className="icon" src="assets/img/icons/ai.png" alt="" />
					<img className="icon" src="assets/img/icons/id.png" alt="" />
					<img className="icon" src="assets/img/icons/pr.png" alt="" />
					<img className="icon" src="assets/img/icons/ae.png" alt="" />
					<img className="icon" src="assets/img/icons/lr.png" alt="" />
				</div>
				<div className="iconRow second">
					<img className="icon" src="assets/img/icons/sketch.png" alt="" />
					<img className="icon" src="assets/img/icons/js.png" alt="" />
					<img className="icon" src="assets/img/icons/html.png" alt="" />
					<img className="icon" src="assets/img/icons/react.png" alt="" />
					<img className="icon" src="assets/img/icons/node.png" alt="" />
					<img className="icon" src="assets/img/icons/vsCode.png" alt="" />
				</div>
			</div>
		</div>
	);
}
