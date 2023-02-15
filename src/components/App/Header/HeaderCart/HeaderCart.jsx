import { useState } from 'react';
import HCartItem from './HCartItem/HCartItem';
import './HeaderCart.scss';

function HeaderCart({cart, onDelete}){
    let [cartIsShown, setCartIsShown] = useState(false);

    function toggleCart(){
        setCartIsShown(cartIsShown = !cartIsShown);
    }

    return (  
        <div className="header__option-cart">
            <div className={`header__button-cart${cartIsShown ? " active" : ''}`} onClick={toggleCart}>
                <i className='ic_empty_cart'></i>
            </div>  
            <div className={`header__cart_bg ${cartIsShown ? "show" : ""}`} onClick={toggleCart}></div>
            <div className={`header__cart_window hcart ${cartIsShown ? "show" : "hide"}`}>
                <div className="hcart__title"><b>My bag</b><span><b>, </b> 
                    {cart.length} {cart.length === 1 ? "item" : "items"}
                    </span>
                </div>
                {cart.length 
                    ?   <div className="hcart__items">
                            {cart.map((item, index) => 
                                <HCartItem currItem={item} key={index} onDelete={onDelete}/> 
                            )}                                               
                        </div>
                    :   <div className='hcart__empty'>
                            <i className='ic_empty_cart'></i> <br/>
                            <span>Cart is empty</span>
                        </div>
                }
                
                <div className="header__cart-total">
                    <div className="header__cart_total-title">Total</div>
                    <div className="header__cart_total-value">$
                        {
                            cart.reduce((prev, curr) => prev + curr.price, 0).toFixed(2)
                        }
                    </div>                            
                </div>
                <div className="header__cart-buttons">
                    <button className="header__cart-button" id='view'>view bag</button>
                    <button className="header__cart-button" id="check">check out</button>
                </div>
            </div>
        </div>       
        
    );
}

export default HeaderCart;