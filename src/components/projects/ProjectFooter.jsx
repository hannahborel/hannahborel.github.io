import "./projectFooter.scss";

export default function ProjectFooter() {
	const scrollTopHandler = () => {
		console.log("cilick");
		console.log(window);
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<footer>
			<div className="scrollUp">
				<img src="./assets/img/scrollUp.png" alt="" onClick={scrollTopHandler} />
			</div>
		</footer>
	);
}
