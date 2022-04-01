import "./nav.scss";

export default function Nav() {
	return (
		<div className="nav">
			<div className="wrapper">
				<div className="navItem left">
					<a href="#section" className="logo">
						HB
					</a>
				</div>
				<div className="navItem right">
					<div className="menuItem">Projects</div>
					<div className="menuItem">Contact</div>
				</div>
			</div>
		</div>
	);
}
