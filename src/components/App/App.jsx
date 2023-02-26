import React from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import { ProductsProvider } from '../ProductsContext/ProductsContext';
import { CartProvider } from '../CartContext/CartContext';
import Layout from './Layout/Layout';
import Home from '../../pages/Home';
import Women from '../../pages/Women';
import Men from '../../pages/Men';
import Kids from '../../pages/Kids';
import ProductPage from '../../pages/ProductPage';
import CartPage from '../../pages/CartPage';
import SearchPage from '../../pages/SearchPage';

export default function App () {	
	return (
		<ProductsProvider>
			<CartProvider>
				<Routes>
					<Route path='/' element={<Layout />}>
						<Route index element={<Home/>}/>
						<Route path='women' element={<Women />}/>
						<Route path='men' element={<Men />}/>
						<Route path='kids' element={<Kids />}/>
						<Route path=':category/:productId' element={<ProductPage />}/>
						<Route path='cart' element={<CartPage />}/>
						<Route path='search' element={<SearchPage />}/>
					</Route>
				</Routes>
			</CartProvider>
		</ProductsProvider>
	);
}
