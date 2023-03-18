import React from 'react';
import './HItemCounter.scss';

export function HItemCounter({item, index, onUpdate, setWindowOpen}){
    return  (
        <div className="hcart__item_counter">
            <div className="hcart__item_counter__option" 
                onClick={(e) => {
                    onUpdate(index, {...item, "count": item.count + 1})
                }}>
                +
            </div>
            <div className="hcart__item_counter__count">{item.count}</div>
            <div className="hcart__item_counter__option" 
                onClick={(e) => {
                    if (item.count <= 1) {
                        setWindowOpen(true);
                    } else {
                        onUpdate(index, {...item, "count": item.count - 1})
                    }
                }}>
                –
            </div>
        </div>
    );
}