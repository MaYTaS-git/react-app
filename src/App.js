import "./App.css";
import Navbar from "./Components/Navbar";
import Alert from "./Components/Alert";
import { useState, useRef, useEffect } from "react";
import Footer from "./Components/Footer";
import TheBase from "./Components/theBase";

function App() {
	const [alert, setAlert] = useState(null);
	const timeoutRef = useRef(null);
	const [component, setComponent] = useState("home");

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
		<>
			<Navbar setComponent={setComponent} />
			<Alert alert={alert} />
			<TheBase comp={component || "home"} showAlert={showAlert} />
			<Footer />
		</>
	);
}

export default App;
