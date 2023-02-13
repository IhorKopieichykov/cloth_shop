import './HCartItem.scss';

function HCartItem(props){
    const item = props.item;
    return (       
        <div className="hcart__item">
            <div className="hcart__item_info">
                <div className="hcart__item_title">{item.name.split(' ')[0]}</div>
                <div className="hcart__item_subtitle">{item.name.split(' ').slice(1).join(' ')}</div>
                <div className="hcart__item_cost">${item.price.toFixed(2)}</div>
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
            <div className="hcart__item_image" >
                <img src={require('../../images/main/women/products/' + item.image)} alt="" />
            </div>
        </div>
    );
}

export default HCartItem;

{/* <div className="hcart__item">
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
</div> */}