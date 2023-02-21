import "./Category.scss";
import CatProducts from "./CatProducts/CatProducts";
import Sort from './Sort/Sort';
import { useState, useMemo, useEffect, useCallback } from "react";
import { useSearchParams } from "react-router-dom";

function Category({title, products}){
    const [goods, setGoods] = useState(products);  
    const [searchParams, setSearchParams] = useSearchParams();

    const field = useMemo(() => searchParams.get('sortBy') || '', [searchParams]);
    const order = useMemo(() => searchParams.get('order') || '', [searchParams]);
    
    useEffect(() => {
        setGoods(products)
    }, [products]);
    
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
    const [sortId, setSortId] = useState(0);   

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
        const index = sortings.indexOf(sortings.find((sort)=>sort.field === field && sort.order === order));
        setSortId(index);
        if (field && order) {
            setGoods(sortGoods(field, order));            
        } else {
            setGoods(products);
        }
    }, [sortings, field, order, sortGoods, products]);

    return (
        <section className="main__category cat">
            <div className="cat__header">
                <h2 className="cat__title">{title}</h2>                
                <div className="cat__filters filters">
                    <div className="filter__count">
                        {goods.length === 1 ? (goods.length + " item") : (goods.length + " items")}
                    </div>
                    <Sort values={sortings} selected={sortId} setSelected={setSortId} setSearchParams={setSearchParams}/>
                </div>
            </div>
            <CatProducts products={goods}/>
            
        </section>
    );
}

export default Category;