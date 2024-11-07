import React from "react";

export default function Alert(props) {
	return (
		<div style={{ height: "40px" }} className="my-2 mx-1">
			{props.alert && (
				<div
					className={`alert alert-${props.alert.type} alert-dismissible py-2 fade show`}
					role="alert"
				>
					<strong>{props.alert.msg}</strong>
				</div>
			)}
		</div>
	);
}
