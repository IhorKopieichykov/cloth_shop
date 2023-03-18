import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import './Filter.scss';

export default function Filter({type, title, values, defValue, callback}) {
    const [open, setOpen] = useState(false);    
    const filterRef = useRef();
    const [searchParams, setSearchParams] = useSearchParams();
    const [selected, setSelected] = useState(defValue);
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
        setSelected(i);
        if(values[i].value !== undefined) {
            searchParams.set(type, values[i].value);
            setSearchParams(searchParams);
        }
    }, [searchParams, setSearchParams, setSelected, values, type])

    useEffect(()=>{
        if (searchParams.has(`${type}`)) {
            const filterValue = searchParams.get(`${type}`);
            let index = values.indexOf(values.find((val)=>val.value === Number(filterValue)));
            if (index < 0) {
                index = defValue;
            }
            setSelected(index);
            callback(values[index].value);
        } else {
            if(values[selected].value) searchParams.set(type, values[selected].value);
            setSearchParams(searchParams);
        }
    }, [searchParams, setSearchParams, type, callback, values, defValue, selected])

    return (
        <div className={`filter filter__${type}`} ref={filterRef}>
            <div className="filter__title">{title}</div>
            <div className={"filter__placeholder " + (open ? "active" : '')} onClick={() => setOpen(!open)}>
                {values[selected].title}
                <i className="ic_angle-down"></i>
            </div>
            <div className={"filter__values " + (open ? "show" : '')}>
                {
                    values.map((value, index)=>(
                        <div className={`filter__value ${index === selected ? "selected" : ''}`}
                            key={index}
                            onClick={()=>onSelect(index)}>
                            {value.title}
                        </div>
                    ))
                }                      
            </div>
        </div>
    )
}
