import "./about.scss";

export default function About() {
	return (
		<div className="about">
			<div className="about-item left">
				<img src="" alt="" />
			</div>
			<div className="about-item right">
				<div className="about-text-content">
					<p className="large">
						I'm Hannah. I am a UI/UX designer and developer currently working in Houston, TX.
					</p>
					<p className="sub-text">
						I've spent the last 10 years working across different areas of digital design in the
						graphic video and now web and mobile space.
					</p>
					<p className="sub-text">
						My background was shaped from my role as a creative producer and videograhper in the
						commercial space and a Creative Dirctor for a non-profit that brought educational
						resourcse to children in Cambodia. You can view my producer reel
						<span>
							<a
								className="reel"
								target="_blank"
								rel="noreferrer"
								href="https://www.youtube.com/watch?v=VvRy_8V89Sg"
							>
								HERE
							</a>
						</span>
					</p>
					<p className="sub-text">
						These days, my time is spent researching, designing, prototyping, and coding. Out of the
						office you’ll find me powerlifting, learning spanish and the ukelele and diving into
						books about neuroplasticity.
					</p>
				</div>
			</div>
		</div>
	);
}
