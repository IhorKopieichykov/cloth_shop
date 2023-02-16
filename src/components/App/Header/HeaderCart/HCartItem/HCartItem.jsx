import { useState } from 'react';
import './HCartItem.scss';

function HCartItem({currItem, index, onUpdate}){
    return (       
        <div className="hcart__item">
            <div className="hcart__item_info">
                <div className="hcart__item_title">{currItem.name.split(' ')[0]}</div>
                <div className="hcart__item_subtitle">{currItem.name.split(' ').slice(1).join(' ')}</div>
                <div className="hcart__item_cost">${currItem.price.toFixed(2)}</div>

                <div className="hcart__item_size">
                    <div className="hcart__item_size-title">Size:</div>
                    <div className="hcart__item_size-picker">
                        <div className="hcart__item_size-select">
                            {
                                currItem.sizes.map((size) => (
                                    <div 
                                    className={`cart_item__size-select__option ${currItem.size === size ? "selected" : ""}`}
                                    key={size} 
                                    data-size={size}
                                    onClick={(e) => onUpdate(index, {...currItem, "size": e.target.dataset.size})}>
                                        {size.toUpperCase()}
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>

                <div className="hcart__item_color">
                    <div className="hcart__item_color-title">Color:</div>
                    <div className="hcart__item_color-picker">
                        <div className="hcart__item_color-select">
                            {
                                currItem.colors.map((color) => (
                                    <div 
                                    className={`cart_item__color-select__option ${currItem.color === color ? "selected" : ""}`}
                                    key={color} 
                                    data-color={color}
                                    style={{backgroundColor: color}}
                                    onClick={(e) => onUpdate(index, {...currItem, "color": e.target.dataset.color})}></div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="hcart__item_counter">
                <div className="hcart__item_counter__option" onClick={(e) => onUpdate(index, {...currItem, "count": currItem.count + 1})}>+</div>
                <div className="hcart__item_counter__count">{currItem.count}</div>
                <div className="hcart__item_counter__option" onClick={(e) => onUpdate(index, {...currItem, "count": currItem.count - 1})}>–</div>
            </div>
            <div className="hcart__item_image" >
                <img src={require('../../../../../images/main/women/products/' + currItem.image)} alt="" />
            </div>
            <div className="hcart__item_delete" onClick={(e) => onUpdate(index, {...currItem, "count": 0})}><i className="ic_trash"></i></div>
        </div>
    );
}

export default HCartItem;
