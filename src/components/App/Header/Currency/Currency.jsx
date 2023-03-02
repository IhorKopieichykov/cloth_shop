import './Currency.scss';
import { ProductsContext } from '../../../ProductsContext/ProductsContext';
import { useCallback, useContext, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const symbols = {
    "usd": <>&#36;</>,
    "uah": <>&#8372;</>,
    "eur": <>&#8364;</>,
}

function Currency(){
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
        <div className="header__option-currency">
            <div className='header__button-currency expand'>
                {symbols[selected.toLowerCase()]}
                <i className='ic_angle-down'></i>
            </div>  
            <div className="header__list-currency">
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

export default Currency;