import { useState, useEffect, useRef, useContext, useCallback } from 'react';
import { Link } from 'react-router-dom';
// import useLocalStorage from '../../../../helpers/useLocalStorage';
import { CartContext } from '../../../CartContext/CartContext';
import HCartItem from './HCartItem/HCartItem';
import './HeaderCart.scss';

function HeaderCart(){
    let [cartIsShown, setCartIsShown] = useState(false);   
    const cartRef = useRef();
    function toggleCart(){
        setCartIsShown(cartIsShown = !cartIsShown);
    }
    useEffect(() => {        
        const handler = (e) => {
            if (!cartRef.current.contains(e.target)) {
                setCartIsShown(false);
            }
        }
        document.addEventListener('mousedown', handler);
        return () => document.removeEventListener('mousedown', handler);
    });    

    const {cart, setItems} = useContext(CartContext);

    const getItemsCount = useCallback(() => {
        return cart.reduce((acc, item) => (acc += item.count), 0);
    }, [cart]);
    const getTotalPrice = useCallback(()=>{
        return cart.reduce((prev, curr) => prev + curr.price*curr.count, 0).toFixed(2)
    }, [cart]);

    const updateCartItem = (indexOfItem, newItem) => {
		if (newItem.count <= 0) {
			setItems([...cart.slice(0, indexOfItem), ...cart.slice(indexOfItem + 1)]);
		} else {
			setItems([...cart.slice(0, indexOfItem), newItem, ...cart.slice(indexOfItem + 1)]);
		}		
	}

    return (  
        <div className="header__option-cart" ref={cartRef}>
            <div className={`header__button-cart${cartIsShown ? " active" : ''}`} onClick={toggleCart}>
                <i className='ic_empty_cart'></i>
                {cart.length ? <div className="header__cart_counter"><p>{getItemsCount()}</p></div> : ""}
            </div>  
            {/* <div className={`header__cart_bg ${cartIsShown ? "show" : ""}`} onClick={toggleCart}></div> */}
            <div className={`header__cart_window hcart ${cartIsShown ? "show" : "hide"}`}>
                <div className="hcart__title"><b>My bag</b><div><b>, </b> 
                    {getItemsCount()} {cart.length === 1 ? "item" : "items"}
                    </div>
                </div>
                {cart.length 
                    ?   <div className="hcart__items">
                            {cart.map((item, index) => 
                                <HCartItem currItem={item} key={index} index={index} onUpdate={updateCartItem}/> 
                            )}                                               
                        </div>
                    :   <div className='hcart__empty'>
                            <i className='ic_empty_cart'></i> <br/>
                            <div>Cart is empty</div>
                        </div>
                }
                
                <div className="header__cart-total">
                    <div className="header__cart_total-title">Total</div>
                    <div className="header__cart_total-value">$
                        {
                            getTotalPrice()
                        }
                    </div>                            
                </div>
                <div className="header__cart-buttons">
                    <Link to={'cart'} className="header__cart-button" id='view' onClick={()=>setCartIsShown(false)}>view bag</Link>
                    <button className="header__cart-button" id="check" onClick={()=>setCartIsShown(false)}>check out</button>
                </div>
            </div>
        </div>       
        
    );
}

export default HeaderCart;