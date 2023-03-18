import "./HCartItem.scss";
import { HItemCounter } from "./components/HItemCounter";
import { HItemOption } from "./components/HItemOption";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { ProductsContext } from "../../../../../../../../store/ProductsContext";

const symbols = {
	usd: <>&#36;</>,
	uah: <>&#8372;</>,
	eur: <>&#8364;</>,
};

export function HCartItem({ currItem, index, onUpdate }) {
	const { currency, rates } = useContext(ProductsContext);
	const [hwcdIsShown, setHwcdIsShown] = useState(false);
	const hwcdRef = useRef();

	useEffect(() => {
		const handlerWindow = (e) => {
			if (!hwcdRef.current.contains(e.target)) {
				setHwcdIsShown(false);
			}
		};
		document.addEventListener("mousedown", handlerWindow);
		return () => document.removeEventListener("mousedown", handlerWindow);
	}, []);

	const getItemPrice = useCallback(
		(currItem) => {
			return (currItem.price * rates[currency.toUpperCase()]).toFixed(2);
		},
		[currency, rates]
	);

	return (
		<div className="hcart__item">
			<div className="hcart__item_info">
				<div className="hcart__item_title">{currItem.name.split(" ")[0]}</div>
				{currItem.name.split(" ").length > 1 ? (
					<div className="hcart__item_subtitle">
						{currItem.name.split(" ").slice(1).join(" ")}
					</div>
				) : (
					""
				)}
				<div className="hcart__item_cost">
					{symbols[currency.toLowerCase()] && currency !== "uah"
						? symbols[currency.toLowerCase()]
						: ""}
					{getItemPrice(currItem)}
					{currency.toLowerCase() === "uah" ? " hrn" : ""}
				</div>
				<HItemOption
					item={currItem}
					index={index}
					type={"size"}
					onUpdate={onUpdate}
				/>
				<HItemOption
					item={currItem}
					index={index}
					type={"color"}
					onUpdate={onUpdate}
				/>
			</div>
			<HItemCounter
				item={currItem}
				index={index}
				onUpdate={onUpdate}
				setWindowOpen={setHwcdIsShown}
			/>
			<div className="hcart__item_image">
				<img
					src={require(`../../../../../../../../shared/images/products/${
						currItem.category
					}/${currItem.id}/${
						currItem?.images[currItem.colors.indexOf(currItem.color)]
					}`)}
					alt="item_img"
				/>
			</div>
			<div
				className="hcart__item_delete"
				onClick={() => {
					setHwcdIsShown(true);
					// onUpdate(index, {...currItem, "count": 0});
				}}>
				<i className="ic_trash"></i>
			</div>

			<div
				className={`hcart_window_confirm_deletion hwcd ${
					hwcdIsShown ? "show" : "hide"
				}`}
				ref={hwcdRef}>
				<div className="hwcd__content">
					<div className="hwcd__message">
						Are you sure you want to <b>remove</b> this <b>item from</b> your
						shopping <b>cart?</b>
					</div>
					<div className="hwcd__buttons">
						<div
							className="hwcd__button"
							id="cancel"
							onClick={() => setHwcdIsShown(false)}>
							No, cancel
						</div>
						<div
							className="hwcd__button"
							id="remove"
							onClick={() => {
								setHwcdIsShown(false);
								onUpdate(index, { ...currItem, count: 0 });
							}}>
							Yes, remove it
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
