import "./nav.scss";

export default function Nav({ menuOpen, setMenuOpen, setPage }) {
	return (
		<div className={"nav " + (menuOpen && "active")}>
			<div className="wrapper">
				<div className="left">
					<p className="logo" onClick={() => setPage("home")}>
						<span className="logo-lg">Hannah Borel</span> <span className="logo-sm">HB</span>
					</p>
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
