import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../../CartContext/CartContext";
import CatProduct from "./CatProduct/CatProduct";
import "./CatProducts.scss";

function CatProducts({products}){
    const { cart, setItems } = useContext(CartContext);

    const updateItemCount = (searchItem, count) => {
		const indexOfItem = cart.indexOf(searchItem);
		const currItem = cart[indexOfItem];
		const newItem = {
			...currItem,
			"count": currItem.count + count
		}
		setItems([...cart.slice(0, indexOfItem), newItem, ...cart.slice(indexOfItem + 1)]);
	}
	const addToCart = (item) => {
		const searchItem = cart.find(i => i.id === item.id && i.color === item.color && i.size === item.size);
		if (searchItem) {
			updateItemCount(searchItem, 1);			
		} else{
			setItems([...cart, item]);
		}		
	}

    return (
        <div className="cat__products">
            {products.map((product, index) => 
                <CatProduct key={index} product={product} addToCart={addToCart} />
            )}
        </div>
    );
}

export default CatProducts;