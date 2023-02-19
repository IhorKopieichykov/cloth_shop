import './Filter.scss';
import { useState, useRef, useEffect, useCallback } from 'react';

export default function Filter({title, values, selected, onFilter}){
    const [open, setOpen] = useState(false);    
    const filterRef = useRef();

    useEffect(() => {
        const closeSelect = (e) => {
            if(!filterRef.current.contains(e.target)){
                setOpen(false);
            }            
        }
        document.addEventListener("mousedown", closeSelect);
        return () => document.removeEventListener("mousedown", closeSelect);
    })

    const onSelect = useCallback((i) => {
        setOpen(false);
        onFilter(i);
    }, [onFilter])

    return(
        <div className="filter" ref={filterRef}>
            <div className="filter__title">{title}</div>
            <div className={"filter__placeholder " + (open ? "active" : '')} onClick={() => setOpen(!open)}>
                {values[selected]}
                <i className="ic_angle-down"></i>
            </div>
            <div className={"filter__values " + (open ? "show" : '')}>
                {values.map((item, index) =>[
                    <div 
                    className={`filter__value ${index === selected ? "selected" : ''}`} 
                    key={index} 
                    onClick={()=>onSelect(index)}>
                        {item}
                    </div>
                ])}                
            </div>
        </div>
    );
}