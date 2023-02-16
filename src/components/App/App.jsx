import React, { useState } from 'react';
import './App.scss';
import Header from "./Header/Header";
import Main from './Main/Main';
import Footer from './Footer/Footer';
import women_products from "../../other/women_products.json";

export default function App () {

	let [cart, setCart] = useState([]);
	let [products, setProducts] = useState({
		women: women_products,
		men: '',
		kids: '',
	});	

	const updateItemCount = (searchItem, count) => {
		const indexOfItem = cart.indexOf(searchItem);
		const currItem = cart[indexOfItem];
		const newItem = {
			...currItem,
			"count": currItem.count + count
		}
		setCart([...cart.slice(0, indexOfItem), newItem, ...cart.slice(indexOfItem + 1)]);
	}

	const addToCart = (item) => {
		const searchItem = cart.find(i => i.id === item.id && i.color === item.color && i.size === item.size);
		if (searchItem) {
			updateItemCount(searchItem, 1);			
		} else{
			setCart(prevCart => [...prevCart, item]);
		}		
	}

	const deleteFromCart = (item, count) => {
		if (item.count <= count) {
			setCart(prevCart => prevCart.filter(i => i.id !== item.id && i.color !== item.color && i.size !== item.size));
		} else {
			const searchItem = cart.find(i => i.id === item.id && i.color === item.color && i.size === item.size);
			if (searchItem) {
				updateItemCount(searchItem, -count);	
			}
		}			
	}

	const updateCartItem = (indexOfItem, newItem) => {
		if (newItem.count <= 0) {
			setCart([...cart.slice(0, indexOfItem), ...cart.slice(indexOfItem + 1)]);
		} else {
			setCart([...cart.slice(0, indexOfItem), newItem, ...cart.slice(indexOfItem + 1)]);
		}		
	}
	
	return (
		<div className='wrapper'>    
			<Header cart={cart} onUpdate={updateCartItem}/>
			<Main products={products.women} onAdd={addToCart}/>
			<Footer/>
		</div>
	);
}
