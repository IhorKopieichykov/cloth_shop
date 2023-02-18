import React, { useState } from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import women_products from "../../products/women_products.json";
import men_products from "../../products/men_products.json";
import kids_products from "../../products/kids_products.json";
import Home from '../../pages/Home';
import Women from '../../pages/Women';
import Men from '../../pages/Men';
import Kids from '../../pages/Kids';

export default function App () {
	let [cart, setCart] = useState([]);
	let [products, setProducts] = useState({
		women: women_products,
		men: men_products,
		kids: kids_products,
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
	const updateCartItem = (indexOfItem, newItem) => {
		if (newItem.count <= 0) {
			setCart([...cart.slice(0, indexOfItem), ...cart.slice(indexOfItem + 1)]);
		} else {
			setCart([...cart.slice(0, indexOfItem), newItem, ...cart.slice(indexOfItem + 1)]);
		}		
	}
	
	return (
		<>
			<Routes>
				<Route path='/' element={<Layout cart={cart} onUpdate={updateCartItem}/>}>
					<Route index element={<Home/>}/>
					<Route path='women' element={<Women products={products.women} onAdd={addToCart}/>}/>
					<Route path='men' element={<Men products={products.men} onAdd={addToCart}/>}/>
					<Route path='kids' element={<Kids products={products.kids} onAdd={addToCart}/>}/>
				</Route>
			</Routes>			
		</>
		// <div className='wrapper'>    
		// 	<Header cart={cart} onUpdate={updateCartItem}/>
		// 	<Main products={products.women} onAdd={addToCart}/>
		// 	<Footer/>
		// </div>
	);
}
