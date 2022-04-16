import "./nav.scss";
import { Link } from "react-router-dom";

export default function Nav({ hideNav, setHideNav }) {
	console.log(hideNav);
	return (
		<div className="nav">
			<div className="wrapper">
				<div className="navItem left">
					<Link to="/" className="logo" onClick={() => setHideNav(false)}>
						HANNAH BOREL
					</Link>
				</div>
				<div className={"navItem right " + (hideNav && "hide")}>
					<a href="#work" className="menuItem">
						Work
					</a>
					<a href="#tools" className="menuItem">
						Tools
					</a>
					<Link to="/about" class="menuItem" id="#about">
						About
					</Link>
				</div>
			</div>
		</div>
	);
}
