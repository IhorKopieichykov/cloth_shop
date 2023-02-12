import './HeaderCart.scss';

function HeaderCart(){
    return (  
        <div className="header__option-cart">
            <div className='header__button-cart'>
                <i className='ic_empty_cart'></i>
            </div>  
            <div className="header__cart">
                <div className="header__cart_window hcart">
                    <div className="hcart__title">My bag, <span>3 items</span></div>
                    <div className="hcart__items">
                        <div className="hcart__item">
                            <div className="hcart__item_info">
                                <div className="hcart__item_title">Apollo</div>
                                <div className="hcart__item_subtitle">Running Short</div>
                                <div className="hcart__item_cost">$50.00</div>
                                <div className="hcart__item_size">
                                    <div className="hcart__item_size-title">Size:</div>
                                    <div className="hcart__item_size-picker">
                                        <div className="hcart__item_size-select">
                                            <div className="cart_item__size-select__option">xs</div>
                                            <div className="cart_item__size-select__option selected">s</div>
                                            <div className="cart_item__size-select__option">m</div>
                                            <div className="cart_item__size-select__option">l</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="hcart__item_color">
                                    <div className="hcart__item_color-title">Color:</div>
                                    <div className="hcart__item_color-picker">
                                        <div className="hcart__item_color-select">
                                            <div className="cart_item__color-select__option" data-color="#D3D2D5"></div>
                                            <div className="cart_item__color-select__option" data-color="#2B2B2B"></div>
                                            <div className="cart_item__color-select__option" data-color="#0F6450"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="hcart__item_counter">
                                <div className="hcart__item_counter__option">+</div>
                                <div className="hcart__item_counter__count">1</div>
                                <div className="hcart__item_counter__option">–</div>
                            </div>
                            <div className="hcart__item_image" data-product="d">
                            </div>
                        </div>
                        <div className="hcart__item">
                            <div className="hcart__item_info">
                                <div className="hcart__item_title">Jupiter</div>
                                <div className="hcart__item_subtitle">Wayfarer</div>
                                <div className="hcart__item_cost">$75.00</div>
                                <div className="hcart__item_size">
                                    <div className="hcart__item_size-title">Size:</div>
                                    <div className="hcart__item_size-picker">
                                        <div className="hcart__item_size-select">
                                            <div className="cart_item__size-select__option selected">s</div>
                                            <div className="cart_item__size-select__option">m</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="hcart__item_color">
                                    <div className="hcart__item_color-title">Color:</div>
                                    <div className="hcart__item_color-picker">
                                        <div className="hcart__item_color-select">
                                            <div className="cart_item__color-select__option" data-color="#1D1F22"></div>
                                            <div className="cart_item__color-select__option" data-color="#15A4C3"></div>
                                            <div className="cart_item__color-select__option" data-color="#EA8120"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="hcart__item_counter">
                                <div className="hcart__item_counter__option">+</div>
                                <div className="hcart__item_counter__count">2</div>
                                <div className="hcart__item_counter__option">–</div>
                            </div>
                            <div className="hcart__item_image" data-product="s">
                            </div>
                        </div>
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