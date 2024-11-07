import React from "react";
import Home from "./Home";
import About from "./About";

export default function TheBase(props) {
	return (
		<>
			{props.comp === "home" ? (
				<Home showAlert={props.showAlert} />
			) : (
				<About />
			)}
		</>
	);
}
