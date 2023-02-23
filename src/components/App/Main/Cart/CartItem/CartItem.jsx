import React from 'react';
import './CartItem.scss';
import CartItemCounter from './CartItemCounter/CartItemCounter';
import CartItemOption from './CartItemOption/CartItemOption';

export default function CartItem({item, index, onUpdate}) {
  return (
    <div className='cart__item'>
        <div className="cart__info">
            <div className="cart__item_title">{item.name.split(' ')[0]}</div>
            {item.name.split(' ').length > 1 ? <div className="cart__item_subtitle">{item.name.split(' ').slice(1).join(' ')}</div> : ''}
            <div className="cart__item_cost">${item.price.toFixed(2)}</div>
            <CartItemOption type={"size"} item={item} index={index} onUpdate={onUpdate}/>
            <CartItemOption type={"color"} item={item} index={index} onUpdate={onUpdate}/>
        </div>
        <CartItemCounter item={item} index={index} onUpdate={onUpdate}/>
        <div className="cart__item_image" >
            <img src={require(`../../../../../images/products/${item.category}/${item.id}/${item.images[item.colors.indexOf(item.color)]}`)} alt="item_img" />
            <div className="cart__item_delete" 
            onClick={() => {
                onUpdate(index, {...item, "count": 0});
            }}>
                <i className="ic_trash"></i>
            </div>        
        </div>
    </div>
  )
}
