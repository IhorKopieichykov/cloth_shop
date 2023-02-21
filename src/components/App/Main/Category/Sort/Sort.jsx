import './Sort.scss';
import { useState, useRef, useEffect, useCallback, useMemo } from 'react';

export default function Sort({products, setGoods, field, order, setSearchParams}){
    const [open, setOpen] = useState(false);    
    const sortRef = useRef();

    useEffect(() => {
        const closeSelect = (e) => {
            if(!sortRef.current.contains(e.target)){
                setOpen(false);
            }            
        }
        document.addEventListener("mousedown", closeSelect);
        return () => document.removeEventListener("mousedown", closeSelect);
    })

    const sortings = useMemo(() => [
        { 
            "title": "Default",
            "field": '',
            "order": '',
        }, 
        { 
            "title": "Name (A-z)",
            "field": 'name',
            "order": 'asc',
        },
        { 
            "title": "Name (z-A)",
            "field": 'name',
            "order": 'desc',
        },
        { 
            "title": "Price (High-Low)", 
            "field": 'price',
            "order": 'desc',
        },
        { 
            "title": "Price (Low-High)",
            "field": 'price',
            "order": 'asc',
        },
    ], []);
    const [selected, setSelected] = useState(0);   

    const sortGoods = useCallback((field, order) => {
        const byField = (field) => {
            return (a, b) => a[field] > b[field] ? 1 : -1;
        }        
        let forSort = products.slice(0);
        let result = forSort.sort(byField(field));
        if (order === 'desc') {
            result.reverse();
        }
        return result;
    }, [products])

    useEffect(() => {
        const index = sortings.indexOf(sortings.find((sort)=>sort.field === field && sort.order === order)) || 0;
        setSelected(index);
        if (field && order) {
            setGoods(sortGoods(field, order));        
        } else {
            setGoods(products);
        }
        // setGoods(sortGoods(field, order));  
    }, [field, order, products, setGoods, sortGoods, sortings]);

    const onSelect = useCallback((i) => {        
        setOpen(false);
        setSelected(i);
        let params = { };
        if (sortings[i].field) params.sortBy = sortings[i].field;
        if (sortings[i].order) params.order = sortings[i].order;
        setSearchParams(params);
    }, [setSearchParams, setSelected, sortings])

    return(
        <div className="sort" ref={sortRef}>
            <div className="sort__title">Sort by</div>
            <div className={"sort__placeholder " + (open ? "active" : '')} onClick={() => setOpen(!open)}>
                {sortings[selected].title}
                <i className="ic_angle-down"></i>
            </div>
            <div className={"sort__values " + (open ? "show" : '')}>
                {sortings.map((item, index) =>[
                    <div 
                    className={`sort__value ${index === selected ? "selected" : ''}`} 
                    key={index} 
                    onClick={()=>onSelect(index)}>
                        {item.title}
                    </div>
                ])}                
            </div>
        </div>
    );
}