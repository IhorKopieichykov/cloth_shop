import { Category } from "../components/App/components/Main/components/Category";
import { Main } from "../components/App/components/Main";
import { useEffect } from "react";

function Women() {
	useEffect(() => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "smooth",
		});
	}, []);
	return (
		<Main>
			<Category title="Women" category={"women"} />
		</Main>
	);
}

export default Women;
