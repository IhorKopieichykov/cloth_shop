import React, { useState } from 'react';
import './CatProduct.scss';
import { Link } from 'react-router-dom';


export default function CatProduct({product, addToCart}) {
    const [added, setAdded] = useState(false);

    return (
        <Link to={`${product.id}`} className="cat__product" key={product.id}>
            <div className="cat__product_image">
                <img src={require(`../../../../../../images/products/${product.category}/${product.id}/${product.images[0]}`)} alt={product.id} />
            </div>                                
            <div className={`cat__product_addtocart ${added ? "clicked" : ''}`} 
                onClick={(e) => {
                    e.preventDefault();
                    const newItem = {
                        ...product,
                        "size": product.sizes[0],
                        "color": product.colors[0],
                        "count": 1
                    }
                    setAdded(true);
                    const timeout = setTimeout(() => {
                        setAdded(false);
                        clearTimeout(timeout);
                    }, 1000)
                    addToCart(newItem);
                    }}>
                {
                    !added 
                    ? <i className='ic_empty_cart'></i>
                    : <div><i className="ic_checkmark"></i></div>
                }
            </div>
            <div className="cat__product_title">{product.name}</div>
            <div className="cat__product_price">${product.price.toFixed(2)}</div>
            
        </Link>
    )
}
