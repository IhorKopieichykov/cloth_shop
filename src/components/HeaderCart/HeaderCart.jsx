import { useState } from 'react';
import HCartItem from '../HCartItem/HCartItem';
import './HeaderCart.scss';

function HeaderCart(props){
    let [cartIsShown, setCartIsShown] = useState(false);

    return (  
        <div className="header__option-cart">
            <div className='header__button-cart' onClick={() => setCartIsShown(cartIsShown = !cartIsShown)}>
                <i className='ic_empty_cart'></i>
            </div>  
            <div className={`header__cart ${cartIsShown ? "show" : "hide"}`}>
                <div className="header__cart_window hcart">
                    <div className="hcart__title">My bag, <span>1 item</span></div>
                    <div className="hcart__items">
                        {props.cart.map(item => 
                            <HCartItem item={item} key={item.id}/> 
                        )}                                               
                    </div>
                    <div className="header__cart-total">
                        <div className="header__cart_total-title">Total</div>
                        <div className="header__cart_total-value">$200.00</div>                            
                    </div>
                    <div className="header__cart-buttons">
                        <button className="header__cart-button" id='view'>view bag</button>
                        <button className="header__cart-button" id="check">check out</button>
                    </div>
                </div>
            </div>
        </div>       
        
    );
}

export default HeaderCart;