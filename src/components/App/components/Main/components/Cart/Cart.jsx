import React, { useCallback } from 'react';
import './Cart.scss';
import { useContext } from 'react';
import { CartContext } from '../../../CartContext/CartContext';
import CartItem from './CartItem/CartItem';
import { Link } from 'react-router-dom';
import { ProductsContext } from '../../../ProductsContext/ProductsContext';

const symbols = {
    "usd": <>&#36;</>,
    "uah": <>&#8372;</>,
    "eur": <>&#8364;</>,
}

export default function Cart() {
    const { rates, currency } = useContext(ProductsContext);
    const {cart, setItems} = useContext(CartContext);
    
    const getItemsCount = useCallback(() => {
        return cart.reduce((acc, item) => (acc += item.count), 0);
    }, [cart]);

    const updateCartItem = (indexOfItem, newItem) => {
		if (newItem.count <= 0) {
			setItems([...cart.slice(0, indexOfItem), ...cart.slice(indexOfItem + 1)]);
		} else {
			setItems([...cart.slice(0, indexOfItem), newItem, ...cart.slice(indexOfItem + 1)]);
		}		
	}

    const getTotalPrice = useCallback(()=>{
        return (cart.reduce((prev, curr) => prev + curr.price*curr.count, 0)*rates[currency.toUpperCase()]).toFixed(2)
    }, [cart, currency, rates]);

    const getTax = useCallback(()=>{
        const tax = 0.21;
        return (getTotalPrice() * tax).toFixed(2);
    }, [getTotalPrice]);

    return (
        <div className='main__cart cart'>
            <h2 className="cart__title">cart</h2>
            {cart.length 
                ?   <div className="cart__items"> 
                        {
                            cart.map((item, index) => (
                                <CartItem item={item} key={index} index={index} onUpdate={updateCartItem}/>
                            ))
                        }
                    </div>
                :   <div className='cart__empty'>
                        <i className='ic_empty_cart'></i> <br/>
                        <p>Cart is empty!</p>
                        <p>You should add something first to place an order</p>
                    </div>
            }
            
            <div className="cart__summary">
                <div className="cart__tax_title">Tax 21%:</div>
                <div className="cart__tax_value">
                    {
                        symbols[currency.toLowerCase()] && currency !== 'uah'
                        ? symbols[currency.toLowerCase()] 
                        : ''
                    }
                    {
                        getTax()
                    }
                    {   
                        currency.toLowerCase() === 'uah'
                            ?   ' hrn'
                            :   ''
                    }
                </div>
                <div className="cart__quantity_title">Quantity:</div>
                <div className="cart__quantity_value">{getItemsCount()}</div>
                <div className="cart__total_title">Total:</div>
                <div className="cart__total_value">
                    {
                        symbols[currency.toLowerCase()] && currency !== 'uah'
                        ? symbols[currency.toLowerCase()] 
                        : ''
                    }
                    {getTotalPrice()}
                    {   
                        currency.toLowerCase() === 'uah'
                            ?   ' hrn'
                            :   ''
                    }
                </div>
                <Link className={`cart__order_button ${!cart.length ? "disabled" : ''}`}>order</Link>
            </div>
        </div>
    )
}
