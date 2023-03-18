import './Sort.scss';
import { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

export function Sort({products, setProducts}){
    const [open, setOpen] = useState(false);    
    const sortRef = useRef();
    const [searchParams, setSearchParams] = useSearchParams();    
    const field = useMemo(() => searchParams.get('sortBy') || '', [searchParams]);
    const order = useMemo(() => searchParams.get('order') || '', [searchParams]);

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
        if (field && order && index > 0) {
            setProducts(sortGoods(field, order));        
        } else {
            setProducts(products);
        }
        // setProducts(sortGoods(field, order));  
    }, [field, order, products, setProducts, sortGoods, sortings]);

    const onSelect = useCallback((i) => {        
        setOpen(false);
        setSelected(i);
        if (sortings[i].field && sortings[i].order) {
            searchParams.set("sortBy", sortings[i].field);
            searchParams.set("order", sortings[i].order);
            setSearchParams(searchParams);
        } else {
            searchParams.delete("sortBy");
            searchParams.delete("order");
            setSearchParams(searchParams);
        }
    }, [searchParams, setSearchParams, setSelected, sortings])

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