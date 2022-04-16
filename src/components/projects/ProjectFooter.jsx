import "./projectFooter.scss";

export default function ProjectFooter() {
	const scrollTopHandler = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};
	return (
		<footer>
			<div className="scrollUp" onClick={scrollTopHandler}>
				<img src="./assets/img/scrollUp.png" alt="" />
			</div>
			<p>back to top</p>
		</footer>
	);
}
