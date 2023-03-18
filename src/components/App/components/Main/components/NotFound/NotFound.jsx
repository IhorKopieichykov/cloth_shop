import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.scss";

export default function NotFound() {

	return (
		<div className="notfound">
			<div className="notfound__error">404</div>
			<div className="notfound__message">Page Not Found</div>
			<div className="notfound__links">				
				<Link to={"/"} className="notfound__link">
					Go Home
				</Link>
			</div>
		</div>
	);
}
