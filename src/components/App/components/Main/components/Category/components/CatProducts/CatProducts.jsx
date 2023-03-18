import { useContext } from "react";
import { CatProduct } from "./components/CatProduct";
import { CatProductSkeleton } from "./components/CatProductSkeleton";
import "./CatProducts.scss";
import { ProductsContext } from "../../../../../../../../store/ProductsContext";
import { CartContext } from "../../../../../../../../store/CartContext";

export function CatProducts({ products, isLoading }) {
	const { cart, setItems } = useContext(CartContext);
	const { rates, currency } = useContext(ProductsContext);

	const updateItemCount = (searchItem, count) => {
		const indexOfItem = cart.indexOf(searchItem);
		const currItem = cart[indexOfItem];
		const newItem = {
			...currItem,
			count: currItem.count + count,
		};
		setItems([
			...cart.slice(0, indexOfItem),
			newItem,
			...cart.slice(indexOfItem + 1),
		]);
	};
	const addToCart = (item) => {
		const searchItem = cart.find(
			(i) => i.id === item.id && i.color === item.color && i.size === item.size
		);
		if (searchItem) {
			updateItemCount(searchItem, 1);
		} else {
			item.price = item.price / rates[currency.toUpperCase()];
			setItems([...cart, item]);
		}
	};

	const showSkeleton = (count) => {
		let counter = [];
		for (let i = 0; i < count; i++) {
			counter.push(i + 1);
		}
		return counter.map((number) => <CatProductSkeleton key={number} />);
	};

	return (
		<div className="cat__products">
			{isLoading
				? showSkeleton(8)
				: products.map((product, index) => (
						<CatProduct key={index} product={product} addToCart={addToCart} />
				  ))}
		</div>
	);
}

export default CatProducts;
