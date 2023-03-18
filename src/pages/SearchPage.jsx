import React, { useEffect } from "react";
import { Main } from "../components/App/components/Main";
import { Search } from "../components/App/components/Main/components/Search";

export default function SearchPage() {
	useEffect(() => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "smooth",
		});
	}, []);
	return (
		<Main>
			<Search />
		</Main>
	);
}
