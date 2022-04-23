import "./nav.scss";
import { Link } from "react-router-dom";

export default function Nav({ menuOpen, setMenuOpen, setMenuType }) {
	return (
		<div className={"nav " + (menuOpen && "active")}>
			<div className="wrapper">
				<div className="left">
					<Link to="/" className="logo" onClick={() => setMenuType("/")}>
						<span className="logo-lg">Hannah Borel</span> <span className="logo-sm">HB</span>
					</Link>
					<div></div>
				</div>
				<div className="right">
					<div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
						<span className="line1"></span>
						<span className="line2"></span>
						<span className="line3"></span>
					</div>
				</div>
			</div>
		</div>
	);
}
