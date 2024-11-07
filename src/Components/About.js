import React from "react";

export default function About() {
	return (
		<>
			<div className="container mb-4">
				<h2>About Section</h2>
				<p>
					Here you will find all the information regarding WebDev, we
					have to offer.
				</p>
			</div>
			<div
				className="accordion accordion-flush container"
				id="accordionFlushExample"
			>
				<div className="accordion-item">
					<h2 className="accordion-header">
						<button
							className="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#flush-collapseOne"
							aria-expanded="false"
							aria-controls="flush-collapseOne"
						>
							Information
						</button>
					</h2>
					<div
						id="flush-collapseOne"
						className="accordion-collapse collapse"
						data-bs-parent="#accordionFlushExample"
					>
						<div className="accordion-body">
							Welcome to WebDev, your go-to platform for easy and
							efficient text manipulation. Our website provides a
							variety of tools that allow you to format, process,
							and transform text with just a few clicks. Whether
							you need to change text case, remove unwanted
							characters, or format your text in different ways,
							WebDev offers an intuitive, fast, and free solution
							for all your text processing needs.
						</div>
					</div>
				</div>
				<div className="accordion-item">
					<h2 className="accordion-header">
						<button
							className="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#flush-collapseTwo"
							aria-expanded="false"
							aria-controls="flush-collapseTwo"
						>
							Usage
						</button>
					</h2>
					<div
						id="flush-collapseTwo"
						className="accordion-collapse collapse"
						data-bs-parent="#accordionFlushExample"
					>
						<div className="accordion-body">
							Using WebDev is simple and completely free. Just
							input the text you want to manipulate, choose the
							desired operation (such as converting to uppercase,
							removing extra spaces, etc.), and hit the
							corresponding button to see your results. No account
							or login is required—just start using the tools
							immediately, and perform text transformations
							quickly and effortlessly. WebDev is designed to be
							user-friendly and convenient for everyone.
						</div>
					</div>
				</div>
				<div className="accordion-item">
					<h2 className="accordion-header">
						<button
							className="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#flush-collapseThree"
							aria-expanded="false"
							aria-controls="flush-collapseThree"
						>
							Creator
						</button>
					</h2>
					<div
						id="flush-collapseThree"
						className="accordion-collapse collapse"
						data-bs-parent="#accordionFlushExample"
					>
						<div className="accordion-body">
							WebDev was created by MaYTaS, a developer dedicated
							to making text manipulation tasks accessible and
							simple for everyone. The goal of WebDev is to
							provide users with a fast, reliable, and
							straightforward platform to manipulate text without
							the need for complicated software or sign-ups.
							Feedback is always appreciated to help improve the
							site!
						</div>
					</div>
				</div>
				<div className="accordion-item">
					<h2 className="accordion-header">
						<button
							className="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#flush-collapseFour"
							aria-expanded="false"
							aria-controls="flush-collapseFour"
						>
							Terms & Conditions
						</button>
					</h2>
					<div
						id="flush-collapseFour"
						className="accordion-collapse collapse"
						data-bs-parent="#accordionFlushExample"
					>
						<div className="accordion-body">
							By using WebDev, you agree to use the site and its
							tools responsibly. As there are no user accounts
							required, we do not collect personal data or store
							your text inputs. You are solely responsible for the
							content you input and the way you use the results.
							The website is provided "as-is"—we strive to ensure
							the tools are working correctly, but we cannot
							guarantee error-free performance. Any updates or
							changes to the tools will be reflected on this page.
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
