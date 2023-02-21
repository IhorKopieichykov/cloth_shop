import './Sort.scss';
import { useState, useRef, useEffect, useCallback } from 'react';

export default function Sort({values, selected, setSelected, setSearchParams}){
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

    const onSelect = useCallback((i) => {        
        setOpen(false);
        setSelected(i);
        let params = { };
        if (values[i].field) params.sortBy = values[i].field;
        if (values[i].order) params.order = values[i].order;
        setSearchParams(params);
    }, [setSearchParams, setSelected, values])

    return(
        <div className="sort" ref={sortRef}>
            <div className="sort__title">Sort by</div>
            <div className={"sort__placeholder " + (open ? "active" : '')} onClick={() => setOpen(!open)}>
                {values[selected].title}
                <i className="ic_angle-down"></i>
            </div>
            <div className={"sort__values " + (open ? "show" : '')}>
                {values.map((item, index) =>[
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