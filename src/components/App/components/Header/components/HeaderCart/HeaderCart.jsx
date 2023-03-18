import { useState, useEffect, useRef, useContext, useCallback } from "react";
import { Link } from "react-router-dom";
// import useLocalStorage from '../../../../helpers/useLocalStorage';
import { CartContext } from "../../../../../../store/CartContext";
import { ProductsContext } from "../../../../../../store/ProductsContext";
import { HCartItem } from "./components/HCartItem";
import "./HeaderCart.scss";

const symbols = {
	usd: <>&#36;</>,
	uah: <>&#8372;</>,
	eur: <>&#8364;</>,
};

export function HeaderCart() {
	const { rates, currency } = useContext(ProductsContext);
	const [cartIsShown, setCartIsShown] = useState(false);
	const cartRef = useRef();
	function toggleCart() {
		setCartIsShown(!cartIsShown);
	}
	useEffect(() => {
		const handler = (e) => {
			if (!cartRef.current.contains(e.target)) {
				setCartIsShown(false);
			}
		};
		document.addEventListener("mousedown", handler);
		return () => document.removeEventListener("mousedown", handler);
	});

	const { cart, setItems } = useContext(CartContext);

	const getItemsCount = useCallback(() => {
		return cart.reduce((acc, item) => (acc += item.count), 0);
	}, [cart]);
	const getTotalPrice = useCallback(() => {
		return (
			cart.reduce((prev, curr) => prev + curr.price * curr.count, 0) *
			rates[currency.toUpperCase()]
		).toFixed(2);
	}, [cart, currency, rates]);

	const updateCartItem = (indexOfItem, newItem) => {
		if (newItem.count <= 0) {
			setItems([...cart.slice(0, indexOfItem), ...cart.slice(indexOfItem + 1)]);
		} else {
			setItems([
				...cart.slice(0, indexOfItem),
				newItem,
				...cart.slice(indexOfItem + 1),
			]);
		}
	};

	return (
		<div className="header__cart hcart" ref={cartRef}>
			<div
				className={`hcart_button${cartIsShown ? " active" : ""}`}
				onClick={toggleCart}>
				<i className="ic_empty_cart"></i>
				{cart.length ? (
					<div className="hcart_counter">
						<p>{getItemsCount()}</p>
					</div>
				) : (
					""
				)}
			</div>
			<div
				className={`hcart_bg ${cartIsShown ? "show" : ""}`}
				onClick={toggleCart}></div>
			<div className={`hcart_window hcart_w ${cartIsShown ? "show" : "hide"}`}>
				<div className="hcart_w__title">
					<b>My bag</b>
					<div>
						<b>, </b>
						{getItemsCount()} {cart.length === 1 ? "item" : "items"}
					</div>
				</div>
				{cart.length ? (
					<div className="hcart_w__items">
						{cart.map((item, index) => (
							<HCartItem
								currItem={item}
								key={index}
								index={index}
								onUpdate={updateCartItem}
							/>
						))}
					</div>
				) : (
					<div className="hcart_w__empty">
						<i className="ic_empty_cart"></i> <br />
						<div>Cart is empty</div>
					</div>
				)}

				<div className="hcart_w-total">
					<div className="hcart_w_total-title">Total</div>
					<div className="hcart_w_total-value">
						{symbols[currency.toLowerCase()] && currency !== "uah"
							? symbols[currency.toLowerCase()]
							: ""}
						{getTotalPrice()}
						{currency.toLowerCase() === "uah" ? " hrn" : ""}
					</div>
				</div>
				<div className="hcart_w-buttons">
					<Link
						to={"cart"}
						className="hcart_w-button"
						id="view"
						onClick={() => setCartIsShown(false)}>
						view bag
					</Link>
					<button
						className="hcart_w-button"
						id="check"
						onClick={() => setCartIsShown(false)}>
						check out
					</button>
				</div>
			</div>
		</div>
	);
}
