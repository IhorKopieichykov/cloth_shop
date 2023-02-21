import React, { useState } from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import { ProductsProvider } from '../ProductsContext/ProductsContext';
import Layout from './Layout/Layout';
import Home from '../../pages/Home';
import Women from '../../pages/Women';
import Men from '../../pages/Men';
import Kids from '../../pages/Kids';

export default function App () {
	let [cart, setCart] = useState([]);	

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
		<ProductsProvider>
			<Routes>
				<Route path='/' element={<Layout cart={cart} onUpdate={updateCartItem}/>}>
					<Route index element={<Home/>}/>
					<Route path='women' element={<Women onAdd={addToCart}/>}/>
					<Route path='men' element={<Men onAdd={addToCart}/>}/>
					<Route path='kids' element={<Kids onAdd={addToCart}/>}/>
				</Route>
			</Routes>			
		</ProductsProvider>
	);
}
