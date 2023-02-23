import React from 'react';
import './CartItemOption.scss';

export default function CartItemOption({item, index, onUpdate, type}) {
    return (
        <div className="cart__item_option">
            <div className="cart__item_option-title">{type[0].toUpperCase() + type.slice(1)}:</div>
                <div className="cart__item_option-select">
                    {   type === "size" ?                        
                        item.sizes.map((size) => (
                            <div 
                            className={`cart_item__size-select__option ${item.size === size ? "selected" : ""}`}
                            key={size}
                            onClick={() => onUpdate(index, {...item, "size": size})}>
                                {size.toUpperCase()}
                            </div>
                        )) : type === "color" ?
                        item.colors.map((color) => (
                            <div 
                            className={`cart_item__color-select__option ${item.color === color ? "selected" : ""}`}
                            key={color} 
                            style={{backgroundColor: color}}
                            onClick={() => onUpdate(index, {...item, "color": color})}></div>
                        )) : ""                       
                    }
                </div>
        </div>
    )
}
