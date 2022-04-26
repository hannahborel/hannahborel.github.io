import "./app.scss";
import "./global.scss";
import Nav from "./components/nav/Nav";
import { useState, useEffect } from "react";
import ProjectFooter from "./components/projects/ProjectFooter";
import Body from "./components/Body";

// import { StrictMode } from "react";

function App() {
	const [menuOpen, setMenuOpen] = useState(false);
	const [page, setPage] = useState("home");

	useEffect(() => {
		const data = window.localStorage.getItem("PAGE_TARGET");
		if (data) {
			setPage(JSON.parse(data));
		}
	}, []);

	useEffect(() => {
		window.localStorage.setItem("PAGE_TARGET", JSON.stringify(page));
	}, [page]);
	console.log("App render");

	return (
		<div>
			{/* <StrictMode> */}

			<Nav menuOpen={menuOpen} setMenuOpen={setMenuOpen} setPage={setPage} />
			<Body menuOpen={menuOpen} setMenuOpen={setMenuOpen} page={page} setPage={setPage} />
			<ProjectFooter />
			{/* </StrictMode> */}
		</div>
	);
}

export default App;
