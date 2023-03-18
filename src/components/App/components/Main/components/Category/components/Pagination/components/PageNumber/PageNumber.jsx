import React from 'react';
import './PageNumber.scss';

export default function PageNumber({index, selected, pageNumbers, number, handlerPage}) {
    return (
        <>
            {
                index === pageNumbers.length-1 && selected < pageNumbers.length - 3 && (<div>...</div>)
            }
            <div className={`pag__page ${selected === index ? "selected" : ''}`}
                key={number}
                onClick={()=>handlerPage(index)}>
                {number}
            </div>  
            {
                index === 0 && selected > 2 && (<div>...</div>)
            }          
            
        </>
    )
}
