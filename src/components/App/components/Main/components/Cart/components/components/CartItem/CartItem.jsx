import React, { useContext, useEffect, useRef, useState } from 'react';
import { ProductsContext } from '../../../../ProductsContext/ProductsContext';
import './CartItem.scss';
import CartItemCounter from './CartItemCounter/CartItemCounter';
import CartItemOption from './CartItemOption/CartItemOption';

const symbols = {
    "usd": <>&#36;</>,
    "uah": <>&#8372;</>,
    "eur": <>&#8364;</>,
}

export default function CartItem({item, index, onUpdate}) {
    const {rates, currency} = useContext(ProductsContext);
    const [wcdIsShown, setWcdIsShown] = useState(false);
    const wcdRef = useRef();

    useEffect(()=>{
        const handlerWindow = (e) => {
            if (!wcdRef.current.contains(e.target)) {
                setWcdIsShown(false);
            }
        }
        document.addEventListener('mousedown', handlerWindow);
        return ()=>document.removeEventListener('mousedown', handlerWindow);
    }, [])

    return (
        <div className='cart__item'>
            <div className="cart__info">
                <div className="cart__item_title">{item.name.split(' ')[0]}</div>
                {item.name.split(' ').length > 1 ? <div className="cart__item_subtitle">{item.name.split(' ').slice(1).join(' ')}</div> : ''}
                <div className="cart__item_cost">
                    {
                        symbols[currency.toLowerCase()] && currency !== 'uah'
                        ? symbols[currency.toLowerCase()] 
                        : ''}
                    {(item.price*rates[currency.toUpperCase()]).toFixed(2)} 
                    {   
                        currency.toLowerCase() === 'uah'
                            ?   ' hrn'
                            :   ''
                    }
                </div>
                <CartItemOption type={"size"} item={item} index={index} onUpdate={onUpdate}/>
                <CartItemOption type={"color"} item={item} index={index} onUpdate={onUpdate}/>
            </div>
            <CartItemCounter item={item} index={index} onUpdate={onUpdate} setWindowOpen={setWcdIsShown}/>
            <div className="cart__item_image" >
                <img src={require(`../../../../../images/products/${item.category}/${item.id}/${item.images[item.colors.indexOf(item.color)]}`)} alt="item_img" />
                <div className="cart__item_delete" 
                onClick={() => {
                    setWcdIsShown(true);
                }}>
                    <i className="ic_trash"></i>
                </div>        
            </div>
            <div className={`cart_window_confirm_deletion wcd ${wcdIsShown?"show":"hide"}`}
                ref={wcdRef}>
                <div className="wcd__content">
                    <div className="wcd__message">
                        Are you sure you want to <b>remove</b> this <b>item from</b> your shopping <b>cart?</b>
                    </div>
                    <div className="wcd__buttons">
                        <div className="wcd__button" id='cancel' onClick={()=>setWcdIsShown(false)}>No, cancel</div>
                        <div className="wcd__button" id='remove'
                            onClick={() => {
                                setWcdIsShown(false)
                                onUpdate(index, {...item, "count": 0});
                            }}>
                            Yes, remove it
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
