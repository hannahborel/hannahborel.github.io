import "./projectsHeader.scss";

export default function projectHeader(props) {
	let d = props.headerData;

	return (
		<div className="header" id="header">
			<div className="header-content">
				<div className="sub-section left">
					<div className="row-first">
						<div className="item">
							<h2 className="title" id="year">
								Year
							</h2>
							<div className="text-content">{d.year}</div>
						</div>
					</div>
					<div className="row-second">
						<div className="item" id="deliverables">
							<h2 className="title">Deliverables</h2>
							<div className="text-content">
								<ul>
									{d.deliverables.map((item) => (
										<li>{item}</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className="sub-section right" id="description">
					<h2 className="title">
						{d.title}
						<span>{d.tagline}</span>
					</h2>

					<div className="icons">
						{d.icons.map((icon) => (
							<img src={icon} alt="" className="icon" />
						))}
					</div>

					<div className="content-container">
						<p className="text-content">{d.description}</p>

						<div className="links">
							<div className="link-item">
								<a href={d.website} target="_blank" rel="noreferrer">
									launch site
								</a>
								<img src="./assets/img/scrollUp.png" alt="" />
							</div>
							{d.github && (
								<div className="link-item">
									<a href={d.github} target="_blank" rel="noreferrer">
										{" "}
										view github
									</a>
									<img src="./assets/img/scrollUp.png" alt="" />
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
