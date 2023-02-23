import React from 'react';
import './CartItemCounter.scss';


export default function CartItemCounter({item, index, onUpdate}) {
  return (
    <div className="cart__item_counter">
            <div className="cart__item_counter__option" onClick={(e) => onUpdate(index, {...item, "count": item.count + 1})}>+</div>
            <div className="cart__item_counter__count">{item.count}</div>
            <div className="cart__item_counter__option" onClick={(e) => onUpdate(index, {...item, "count": item.count - 1})}>–</div>
    </div>
  )
}
