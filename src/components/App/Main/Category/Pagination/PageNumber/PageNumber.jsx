import React from 'react';
import './PageNumber.scss';

export default function PageNumber({countOfPages, index, selected, pageNumbers, number, handlerPage}) {
    return (
        <>
            {
                (((selected !== pageNumbers.length-1 && selected >= 3 && index === selected-1) 
                || (selected === pageNumbers.length-1 && index ===selected-2)) && countOfPages > 4)
                ?   <div>...</div>
                :   ''
            }
            <div className={`pag__page ${selected === index ? "selected" : ''}`}
                key={number}
                onClick={()=>handlerPage(index)}>
                {number}
            </div>            
            {
                (((selected !== 0 && selected <= pageNumbers.length-4 && index === selected+1) 
                || (selected === 0 && index === selected+2)) && countOfPages > 4)
                ?   <div>...</div>
                :   ''
            }            
        </>
    )
}
