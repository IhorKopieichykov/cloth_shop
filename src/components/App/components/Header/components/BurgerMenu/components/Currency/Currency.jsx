import './Currency.scss';
import { ProductsContext } from '../../../../ProductsContext/ProductsContext';
import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const symbols = {
    "usd": <>&#36;</>,
    "uah": <>&#8372;</>,
    "eur": <>&#8364;</>,
}

function Currency(){
    const { rates, currency, changeCurrency } = useContext(ProductsContext);
    const [open, setOpen] = useState(false);
    const currRef = useRef();
    const [selected, setSelected] = useState(currency);
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(()=>{
        const handler = (e) =>{
            if (!currRef.current.contains(e.target)) {
                setOpen(false);
            }
        }
        document.addEventListener('mousedown', handler);
        return ()=>document.removeEventListener('mousedown', handler);
    })

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
        setOpen(false);
        changeCurrency(curr.toLowerCase());
        setSelected(curr.toLowerCase());
    }, [changeCurrency])

    return (
        <div className="hmenu__currency_select" ref={currRef}>
            <div className={`hmenu__currency_button expand ${open ? "clicked" :''}`} onClick={()=>setOpen(!open)}>
                {symbols[selected.toLowerCase()]}
                <i className='ic_angle-down'></i>
            </div>  
            <div className={`hmenu__currency_list ${open ? "show" : "hide"}`} >
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