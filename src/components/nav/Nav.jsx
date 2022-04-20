import "./nav.scss";
import { Link } from "react-router-dom";
// import HomeNav from "./HomeNav";

export default function Nav({ menuOpen, setMenuOpen, setMenuType }) {
	return (
		<div className={"nav " + (menuOpen && "active")}>
			<div className="wrapper">
				<div className="left">
					<Link to="/" className="logo" onClick={() => setMenuType("/")}>
						Hannah Borel
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

				{/* {!hideNav && <HomeNav />} */}
			</div>
		</div>
	);
}
