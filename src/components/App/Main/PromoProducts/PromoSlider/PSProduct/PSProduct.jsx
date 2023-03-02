import React from 'react';
import './PSProduct.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { CartContext } from '../../../../../CartContext/CartContext';
import { useContext } from 'react';
import { ProductsContext } from '../../../../../ProductsContext/ProductsContext';

const symbols = {
    "usd": <>&#36;</>,
    "uah": <>&#8372;</>,
    "eur": <>&#8364;</>,
}

export default function PSProduct({product}) {
    const [added, setAdded] = useState(false);
    const { cart, setItems } = useContext(CartContext);
    const { currency, setCurrency } = useContext(ProductsContext);

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
        <Link to={`${product.category}/${product.id}`} className="promo_product">
            <div className="promo_product__image">
                <img src={require(`../../../../../../images/products/${product.category}/${product.id}/${product.images[0]}`)} alt="prod_img" />
            </div>
            <div className={`promo_product__addtocart ${added ? "clicked" : ''}`} 
                onClick={(e) => {
                    e.preventDefault();
                    const newItem = {
                        ...product,
                        "size": product.sizes[0],
                        "color": product.colors[0],
                        "count": 1
                    }
                    if (!added) {
                        setAdded(true);
                        const timeout = setTimeout(() => {
                            setAdded(false);
                            clearTimeout(timeout);
                        }, 1000)                        
                    }
                    addToCart(newItem);
                }}>
                {
                    !added 
                    ? <i className='ic_empty_cart'></i>
                    : <div><i className="ic_checkmark"></i></div>
                }
            </div>
            <h3 className="promo_product__title">{product.name}</h3>
            <div className="promo_product__price">
                ${product.price.toFixed(2)}
            </div>                               
        </Link>
    )
}
