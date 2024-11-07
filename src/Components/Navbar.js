import React, { useState } from "react";

export default function Navbar(props) {
	const [theme, setTheme] = useState("light");

	const handleTheme = () => {
		if (theme === "light") {
			setTheme("dark");
			document.body.setAttribute("data-bs-theme", "dark");
		} else {
			setTheme("light");
			document.body.setAttribute("data-bs-theme", "light");
		}
	};

	return (
		<nav
			className="navbar navbar-expand-lg bg-body-tertiary border-bottom border-body"
			data-bs-theme={theme}
		>
			<div className="container-fluid">
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNavAltMarkup"
					aria-controls="navbarNavAltMarkup"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>

				<button
					className="navbar-brand"
					style={{ border: "none", backgroundColor: "transparent" }}
					onClick={() => {
						props.setComponent("home");
					}}
				>
					WebDev
				</button>

				<div
					className="collapse navbar-collapse"
					id="navbarNavAltMarkup"
				>
					<div className="navbar-nav">
						<button
							className="nav-link"
							onClick={() => {
								props.setComponent("home");
							}}
						>
							{" "}
							Home
						</button>
						<button
							className="nav-link"
							onClick={() => {
								props.setComponent("about");
							}}
						>
							{" "}
							About
						</button>
					</div>
				</div>
				<div className="form-check form-switch">
					<input
						className="form-check-input"
						onClick={handleTheme}
						type="checkbox"
						role="switch"
						id="flexSwitchCheckDefault"
					/>
					<label
						className="form-check-label"
						htmlFor="flexSwitchCheckDefault"
					>
						{theme === "light" ? "Light" : "Dark"}
					</label>
				</div>
			</div>
		</nav>
	);
}
