// import "./App.css";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Alert from "./Components/Alert";
import { useState, useRef, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";

function App() {
	const [alert, setAlert] = useState(null);
	const timeoutRef = useRef(null);

	const showAlert = (type, message, duration = 2000) => {
		setAlert({
			msg: message,
			type: type,
		});

		// Clear the existing timeout if there's a pending one
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}

		// Set a new timeout to clear the alert after 2 seconds
		timeoutRef.current = setTimeout(() => {
			setAlert(null);
		}, duration);
	};

	useEffect(() => {
		return () => clearTimeout(timeoutRef.current); // Clear timeout on component unmount to prevent memory leaks
	}, []);

	return (
		<Router>
			<Navbar />
			<Alert alert={alert} />
			<Routes>
				<Route
					element={<Home showAlert={showAlert} />}
					exact
					path={"/"}
				/>
				<Route exact path={"/about"} element={<About />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
