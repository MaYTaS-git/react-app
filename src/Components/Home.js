import React from "react";
import { useState } from "react";

export default function Home(props) {
	const [text, setText] = useState("");

	const capitalize = (text) => {
		return text.replace(/\b\w+\b/g, (word) => {
			return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
		});
	};

	const readFileContent = (file) => {
		let reader = new FileReader();

		reader.onerror = (error) => {
			props.showAlert("danger", "Error occurred while reading the file.");
		};

		reader.onload = (e) => {
			try {
				let fileData = e.target.result;
				setText(text + "\n" + fileData);
			} catch (error) {
				props.showAlert(
					"danger",
					"Error occurred while processing the file."
				);
			}
		};

		try {
			reader.readAsText(file);
		} catch (error) {
			props.showAlert("danger", "Error occurred while reading the file.");
		}
	};

	const handleTextAreaChange = (event) => {
		setText(event.target.value);
	};

	const handleCapitalize = () => {
		let textarea = document.getElementById("main-textarea");
		let start = textarea.selectionStart;
		let end = textarea.selectionEnd;

		if (start !== end) {
			let preText = textarea.value.slice(0, start);
			let postText = textarea.value.slice(end);

			let selectedText = textarea.value.slice(start, end);
			let changedText = capitalize(selectedText);
			let finalText = preText + changedText + postText;
			if (text !== finalText) {
				setText(finalText);
				props.showAlert("info", "Capitalized the selected text.");
			} else {
				props.showAlert(
					"warning",
					"Selected text already capitalized."
				);
			}
		} else {
			let finalText = capitalize(text);
			if (text !== finalText) {
				setText(finalText);
				props.showAlert("info", "Capitalized the document.");
			} else {
				props.showAlert("warning", "Nothing to capitalize.");
			}
		}
	};

	const handleUpperCase = () => {
		let textarea = document.getElementById("main-textarea");
		let start = textarea.selectionStart;
		let end = textarea.selectionEnd;

		if (start !== end) {
			let preText = textarea.value.slice(0, start);
			let postText = textarea.value.slice(end);

			let selectedText = textarea.value.slice(start, end);
			let changedText = selectedText.toUpperCase();
			let finalText = preText + changedText + postText;
			if (text !== finalText) {
				setText(finalText);
				props.showAlert(
					"info",
					"Converted selected text to upper case."
				);
			} else {
				props.showAlert("warning", "Nothing to upper.");
			}
		} else {
			let finalText = text.toUpperCase();
			if (text !== finalText) {
				setText(finalText);
				props.showAlert("info", "Converted document to upper case.");
			} else {
				props.showAlert("warning", "Nothing to upper.");
			}
		}
	};

	const handleLowerCase = () => {
		let textarea = document.getElementById("main-textarea");
		let start = textarea.selectionStart;
		let end = textarea.selectionEnd;

		if (start !== end) {
			let preText = textarea.value.slice(0, start);
			let postText = textarea.value.slice(end);

			let selectedText = textarea.value.slice(start, end);
			let changedText = selectedText.toLowerCase();
			let finalText = preText + changedText + postText;
			if (text !== finalText) {
				setText(finalText);
				props.showAlert(
					"info",
					"Converted selected text to lower case."
				);
			} else {
				props.showAlert("warning", "Nothing to lower.");
			}
		} else {
			let finalText = text.toLowerCase();
			if (text !== finalText) {
				setText(finalText);
				props.showAlert("info", "Converted document to lower case.");
			} else {
				props.showAlert("warning", "Nothing to lower.");
			}
		}
	};

	const handleRemoveSpaces = () => {
		let textarea = document.getElementById("main-textarea");
		let start = textarea.selectionStart;
		let end = textarea.selectionEnd;

		if (start !== end) {
			let preText = textarea.value.slice(0, start);
			let postText = textarea.value.slice(end);

			let selectedText = textarea.value.slice(start, end);
			let changedText = selectedText.split(/[ ]+/);
			changedText = changedText.join(" ");
			let finalText = preText + changedText + postText;

			if (text !== finalText) {
				setText(finalText);
				props.showAlert("info", "Removed selected extra spaces.");
			} else {
				props.showAlert("warning", "No extra spaces to remove.");
			}
		} else {
			let finalText = text.split(/[ ]+/).join(" ");
			if (text !== finalText) {
				setText(finalText);
				props.showAlert(
					"info",
					"Removed all the extra spaces in the document."
				);
			} else {
				props.showAlert("warning", "No extra spaces to remove.");
			}
		}
	};

	const handleClearAll = () => {
		setText("");
		props.showAlert("danger", "Cleared the document.");
	};

	const handleCopyToCB = () => {
		let textarea = document.getElementById("main-textarea");
		let start = textarea.selectionStart;
		let end = textarea.selectionEnd;

		if (start !== end) {
			let selectedText = textarea.value.slice(start, end);
			navigator.clipboard.writeText(selectedText);
			props.showAlert("info", "Copied selection to Clipboard.");
		} else {
			navigator.clipboard.writeText(text);
			props.showAlert("info", "Copied document to Clipboard.");
		}
	};

	const handleInputChange = (event) => {
		const file = event.target.files[0];
		const allowedTypes = ["text/plain"];

		if (file && allowedTypes.includes(file.type)) {
			readFileContent(file);
			props.showAlert(
				"success",
				`Imported: ${file.name} | ${
					file.size / 1024 > 1 ? file.size / 1024 : file.size
				} ${
					file.size / 1024 > 1024
						? "mb"
						: file.size / 1024 < 1
						? "bytes"
						: "kb"
				}`,
				3000
			);
		} else {
			props.showAlert("danger", "Only .txt format is allowed.", 5000);
			event.target.value = "";
		}
	};

	const handleExportTXT = () => {
		let docData = document.getElementById("main-textarea").value;
		// Create a Blob from the text content
		const blob = new Blob([docData], { type: "text/plain" });

		props.showAlert(
			"success",
			"Exported to .txt file. starting download!",
			3000
		);
		// Create an object URL for the Blob
		const link = document.createElement("a");
		link.href = URL.createObjectURL(blob);
		link.download = "exported-file.txt"; // The default filename for the download
		link.click(); // Simulate a click to start the download
	};

	return (
		<div className="container d-flex flex-column my-4">
			<div className="container preview-text-area">
				<div className="mb-3">
					<h5 className="mx-3">Editor</h5>
					<textarea
						className="form-control"
						id="main-textarea"
						rows="8"
						value={text}
						style={{ resize: "none" }}
						placeholder="Enter text here OR Upload a .txt/ .doc/ .pdf file."
						onChange={handleTextAreaChange}
					></textarea>
					<p className="my-2 mx-2">
						Words:{" "}
						{
							text.split(/\s+/).filter((ele) => {
								return ele.length !== 0;
							}).length
						}{" "}
						Chars: {text.length}.
					</p>
				</div>
			</div>
			<div className="container d-flex flex-column my-4">
				<h5 className="mx-3">Availabe actions</h5>
				<div className="container form-control action-section  mb-3">
					<div className="row my-1">
						<button
							className="btn btn-outline-primary col mx-1 my-1"
							onClick={handleUpperCase}
							disabled={text.length === 0}
						>
							Upper Case
						</button>
						<button
							className="btn btn-outline-primary col mx-1 my-1"
							onClick={handleLowerCase}
							disabled={text.length === 0}
						>
							Lower Case
						</button>
						<button
							className="btn btn-outline-primary col mx-1 my-1"
							onClick={handleCapitalize}
							disabled={text.length === 0}
						>
							Capitalize
						</button>

						<button
							className="btn btn-outline-primary col mx-1 my-1"
							onClick={handleRemoveSpaces}
							disabled={text.length === 0}
						>
							Remove spaces
						</button>
						<button
							className="btn btn-outline-danger col mx-1 my-1"
							onClick={handleClearAll}
							disabled={text.length === 0}
						>
							Clear all
						</button>
						<button
							className="btn btn-outline-primary col mx-1 my-1"
							onClick={handleCopyToCB}
							disabled={text.length === 0}
						>
							Copy to clipboard
						</button>
					</div>
				</div>

				<div className="container form-control input-group my-2">
					<input
						type="file"
						className="form-control btn btn-outline-secondary"
						id="uploadedFile"
						accept=".txt"
						onChange={handleInputChange}
						onClick={(event) => {
							event.target.value = "";
						}}
					/>
				</div>
				<div className="container d-flex form-control mb-2">
					<p
						className="input-group-text my-0 "
						style={{
							marginRight: "0.5rem",
							border: "none",
							backgroundColor: "transparent",
						}}
					>
						Export to:{" "}
					</p>
					<button
						className="btn btn-outline-secondary mx-1"
						onClick={handleExportTXT}
						disabled={text.length === 0}
					>
						.txt
					</button>
				</div>
			</div>
		</div>
	);
}
