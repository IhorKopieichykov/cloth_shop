import React from 'react';
import './App.scss';
import Header from "./Header/Header";
import Main from './Main/Main';
import Footer from './Footer/Footer';
import women_products from "../../other/women_products.json";

export default class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			cart: [],
			products: {
				women: women_products,
				men: '',
				kids: '',
			}
		}
	}
	render(){
		return (
			<div className='wrapper'>    
				<Header cart={this.state.cart} onDelete={this.deleteFromCart}/>
				<Main products={this.state.products.women} onAdd={this.addToCart}/>
				<Footer/>
			</div>
		);
	}

	addToCart = (item) => {
		this.setState(
			{
				cart: [...this.state.cart, item]
			}
		);
	}

	deleteFromCart = (dItem) => {
		this.setState(
			{
				cart: this.state.cart.filter(item => item.id !== dItem.id && item.color !== dItem.color && item.size !== dItem.size)
			}
		);
	}
}
