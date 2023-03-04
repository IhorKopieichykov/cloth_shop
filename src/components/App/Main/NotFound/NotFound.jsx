import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./NotFound.scss";

export default function NotFound() {
	const navigate = useNavigate();

	return (
		<div className="notfound">
			<div className="notfound__error">404</div>
			<div className="notfound__message">Page Not Found</div>
			<div className="notfound__links">
				{/* <div className="notfound__link" onClick={() => navigate(-1)}>
					Go Back
				</div> */}
				<Link to={"/"} className="notfound__link">
					Go Home
				</Link>
			</div>
		</div>
	);
}
