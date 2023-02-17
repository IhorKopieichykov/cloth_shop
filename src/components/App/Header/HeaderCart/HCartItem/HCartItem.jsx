import { useState } from 'react';
import './HCartItem.scss';
import HItemOption from './HItemOption/HItemOption';
import HItemCounter from './HItemCounter/HItemCounter';

function HCartItem({currItem, index, onUpdate}){
    return (       
        <div className="hcart__item">
            <div className="hcart__item_info">
                <div className="hcart__item_title">{currItem.name.split(' ')[0]}</div>
                <div className="hcart__item_subtitle">{currItem.name.split(' ').slice(1).join(' ')}</div>
                <div className="hcart__item_cost">${currItem.price.toFixed(2)}</div>
                <HItemOption item={currItem} index={index} onUpdate={onUpdate} type={"size"}/>
                <HItemOption item={currItem} index={index} onUpdate={onUpdate} type={"color"}/>                
            </div>
            <HItemCounter item={currItem} index={index} onUpdate={onUpdate}/>
            <div className="hcart__item_image" >
                <img src={require('../../../../../images/main/women/products/' + currItem.image)} alt="" />
            </div>
            <div className="hcart__item_delete" onClick={(e) => onUpdate(index, {...currItem, "count": 0})}><i className="ic_trash"></i></div>
        </div>
    );
}

export default HCartItem;
