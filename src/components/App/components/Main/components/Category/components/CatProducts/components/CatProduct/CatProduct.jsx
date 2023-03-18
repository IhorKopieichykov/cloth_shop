import React, { useContext, useState } from 'react';
import './CatProduct.scss';
import { Link } from 'react-router-dom';
import { ProductsContext } from '../../../../../../../../../../store/ProductsContext';

const symbols = {
    "usd": <>&#36;</>,
    "uah": <>&#8372;</>,
    "eur": <>&#8364;</>,
}

export function CatProduct({product, addToCart}) {
    const [added, setAdded] = useState(false);
    const {currency} = useContext(ProductsContext);

    return (
        <Link to={`${product.id}`} className="cat__product" key={product.id}>
            <div className="cat__product_image">
                <img src={require(`../../../../../../../../../../shared/images/products/${product.category}/${product.id}/${product.images[0]}`)} alt={product.id} />
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
                    if(!added){
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
            <div className="cat__product_title">{product.name}</div>
            <div className="cat__product_price">
                {
                    symbols[currency.toLowerCase()] && currency !== 'uah'
                    ? symbols[currency.toLowerCase()] 
                    : ''
                }
                {product.price.toFixed(2)} 
                {   
                    currency.toLowerCase() === 'uah'
                        ?   ' hrn'
                        :   ''
                }
            </div>
            
        </Link>
    )
}
