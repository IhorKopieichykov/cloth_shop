import React from 'react';
import './ProductOption.scss';

export default function ProductOption({type, values, value, setValue}) {
    return (
        <div className="product__option">
            <div className="product__option-title">{type}:</div>
            <div className="product__option-select">
                {   values.map((val, index) => 
                    type === 'size' 
                    ? <div 
                    className={`product__option_select-size${val === value ? ' selected' : ''}`} 
                    key={val} 
                    onClick={()=>{
                        if (val === value) {
                            setValue('');
                        } else {
                            setValue(val);
                        }                        
                    }}>
                        {val}
                    </div>
                    : type === 'color'
                    ? <div 
                    className={`product__option_select-color${val === value ? ' selected' : ''}`} 
                    key={val} 
                    style={{backgroundColor: val}}
                    onClick={()=>{
                        if (val === value) {
                            setValue('');
                        } else {
                            setValue(val);
                        } 
                    }}>
                    </div>
                    : '')
                }
            </div>
        </div>
    )
}
