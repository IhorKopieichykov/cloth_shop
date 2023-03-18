import React, { useMemo } from "react";
import "./Navigation.scss";
import { Breadcrumbs } from "./components/Breadcrumbs";
import { BackBtn } from "./components/BackBtn";
import { useLocation } from "react-router-dom";

export function Navigation() {
	const location = useLocation();
	const path = useMemo(() => {
		return location.pathname.split("/").filter((crumb) => crumb !== "");
	}, [location]);

	return (
		<>
			{path.length ? (
				<div className="main__navigation">
					<BackBtn />
					<Breadcrumbs />
				</div>
			) : (
				""
			)}
		</>
	);
}
