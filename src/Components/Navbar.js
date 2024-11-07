import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
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

				<Link className="navbar-brand" to="/">
					WebDev
				</Link>

				<div
					className="collapse navbar-collapse"
					id="navbarNavAltMarkup"
				>
					<div className="navbar-nav">
						<Link className="nav-link" aria-current="page" to="/">
							{/* add - "active" class in anchor tag to show the active component. */}
							Home
						</Link>
						<Link className="nav-link" to="/about">
							About
						</Link>
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
