import './Currency.scss';
import { ProductsContext } from '../../../../../../store/ProductsContext';
import { useCallback, useContext, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const symbols = {
    "usd": <>&#36;</>,
    "uah": <>&#8372;</>,
    "eur": <>&#8364;</>,
}

export function Currency(){
    const { rates, currency, changeCurrency } = useContext(ProductsContext);
    const [selected, setSelected] = useState(currency);
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(()=>{
        if (searchParams.has('currency')) {
            const curr = searchParams.get('currency');
            if (selected.toLowerCase() !== curr.toLowerCase()) {
                if (Object.keys(rates).includes(curr.toUpperCase())) {
                    setSelected(curr);
                }                
            }
        } else {
            searchParams.set('currency', selected.toLowerCase());
            setSearchParams(searchParams);
        }
    }, [rates, searchParams, selected, setSearchParams])

    const handleSelect = useCallback((curr)=>{
        changeCurrency(curr.toLowerCase());
        setSelected(curr.toLowerCase());
    }, [changeCurrency])

    return (
        <div className="header__currency">
            <div className='header__currency_button expand'>
                {symbols[selected.toLowerCase()]}
                <i className='ic_angle-down'></i>
            </div>  
            <div className="header__currency_list">
                <ul>
                    {
                        Object.keys(rates).map((rate)=>{
                            return (
                                <li key={rate}
                                    className={rate.toLowerCase() === selected.toLowerCase() ? "selected" : ''}
                                    onClick={()=>handleSelect(rate)}>
                                    {symbols[rate.toLowerCase()] ? symbols[rate.toLowerCase()] : ''} {rate.toUpperCase()}
                                </li>
                            );
                        })
                    }
                </ul>
            </div>          
        </div>        
    );
}
