import { Main } from "../components/App/components/Main";
import { Slider } from "../components/App/components/Main/components/Slider";
import { PromoProducts } from "../components/App/components/Main/components/PromoProducts";
import { PromoCategories } from "../components/App/components/Main/components/PromoCategories";
import { useContext } from "react";
import { ProductsContext } from "../store/ProductsContext";

import { useEffect, useMemo } from "react";

function Home() {
	const { rates, currency, products } = useContext(ProductsContext);
	const slider_products_1 = useMemo(
		() =>
			products.filter(
				(prod) => prod.price / rates[currency.toUpperCase()] <= 50
			),
		[currency, products, rates]
	);
	const slider_products_2 = useMemo(
		() =>
			products.filter(
				(prod) => prod.price / rates[currency.toUpperCase()] > 50
			),
		[currency, products, rates]
	);
	useEffect(() => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "smooth",
		});
	}, []);
	return (
		<Main outOfCont={<Slider />}>
			<PromoProducts title={"Brand new models"} products={slider_products_2} />
			<PromoCategories />
			<PromoProducts title={"Hot prices"} products={slider_products_1} />
		</Main>
	);
}

export default Home;
