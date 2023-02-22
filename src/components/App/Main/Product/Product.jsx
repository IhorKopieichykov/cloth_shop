import React, { useContext, useEffect, useState, useCallback } from 'react';
import { CartContext } from '../../../CartContext/CartContext';
import './Product.scss';
import ProductOption from './ProductOption/ProductOption';


export default function Product({product, isLoading}) {
    const {cart, setItems} = useContext(CartContext);
    const [image, setImage] = useState(product.images[0]);
    const [size, setSize] = useState('');
    const [color, setColor] = useState('');
    const [disabled, setDisabled] = useState(true);
  
    const setColorImage = useCallback((color) => {
        setColor(color);
        if (color) {
            setImage(product.images[product.colors.indexOf(color)]);            
        } else {
            setImage(product.images[0]);
        }
    }, [product.colors, product.images])

    useEffect(()=>{
        if (color && size) {
            setDisabled(false);
        } else {
            setDisabled(true);
        } 
    }, [color, size])

    const updateItemCount = useCallback((searchItem, count) => {
        const indexOfItem = cart.indexOf(searchItem);
        const currItem = cart[indexOfItem];
        const newItem = {
            ...currItem,
            "count": currItem.count + count
        }
        setItems([...cart.slice(0, indexOfItem), newItem, ...cart.slice(indexOfItem + 1)]);
    }, [cart, setItems])

    const addToCart = useCallback((size, color)=>{
        const newItem = {
            ...product,
            "size": size,
            "color": color,
            "count": 1
        }
        const searchItem = cart.find(i => i.id === newItem.id && i.color === newItem.color && i.size === newItem.size);        
		if (searchItem) {
			updateItemCount(searchItem, 1);			
		} else{
			setItems([...cart, newItem]);
		}
    }, [cart, product, setItems, updateItemCount])


    return (product 
            ?   <div className='main__product product'>
                    <div className="product__preview">
                        <div className="product__preview_select-photos product__select_images">
                            <ul>
                                {
                                    product?.images.map((img, index)=>(
                                        <li key={index}
                                        className={img === image ? "selected" : ''}>
                                            <img src={require(`../../../../images/products/${product.category}/${product.id}/${img}`)} alt="prod_img" className="product__select_image" 
                                            onClick={()=>setImage(img)}/>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className="product__preview_photo product__photo">
                            <img src={require(`../../../../images/products/${product.category}/${product.id}/${image}`)} alt="prod_img" className="product__photo_image" />
                        </div>
                    </div>
                    <div className="product__summary">    
                        <div className="product__title">{product.name.split(' ')[0]}</div>    
                        {product.name.split(' ').length > 1 ? <div className="product__subtitle">{product.name.split(' ').slice(1).join(' ')}</div> : ''}
                        <div className="product__options">
                            <ProductOption type={"size"} values={product.sizes} value={size} setValue={setSize}/>
                            <ProductOption type={"color"} values={product.colors} value={color} setValue={setColorImage}/>
                        </div>
                        <div className="product__price">
                            <div className="product__price_title">Price:</div>
                            <div className="product__price_value">${product.price.toFixed(2)}</div>
                        </div>
                        <div className="product__addtocart">
                            <button 
                            className="product__addtocart_button" 
                            disabled={disabled}                            
                            title={disabled ? "Choose the options above!" : ''}
                            onClick={()=>addToCart(size, color)}>
                                add to cart
                            </button>
                        </div>            
                    </div>   
                    <div className="product__description">
                        <div className="product__desc_title">About</div>
                        <div className="product__desc_text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam quaerat fuga eveniet nulla corrupti minus inventore. Vero fuga iure natus molestias ex, iste possimus illo obcaecati ad cumque earum maxime?</div>
                    </div>
                </div>
            : <></>
    )
}
