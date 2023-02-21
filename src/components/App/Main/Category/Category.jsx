import "./Category.scss";
import CatProducts from "./CatProducts/CatProducts";
import Filter from './Filter/Filter';
import { useEffect, useState, useMemo, useCallback } from "react";

function Category({title, products, onAdd}){
    const sortings = useMemo(()=>["Default", "Name (A-z)", "Name (z-A)", "Price (High-Low)", "Price (Low-High)"], []);
    const [sortId, setSortId] = useState(0);
    const [goods, setGoods] = useState(products);    

    const sortGoods = useCallback((i) => {
        const byField = (field) => {
            return (a, b) => a[field] > b[field] ? 1 : -1;
        }
        let forSort = products.slice(0);
        let result = [];
        switch (i) {
            case 0:
                result = forSort;
                break;

            case 1:
                result = forSort.sort(byField("name"));
                break;

            case 2:
                result = forSort.sort(byField("name")).reverse();
                break;

            case 3:                
                result = forSort.sort(byField("price")).reverse();
                break;

            case 4:
                result = forSort.sort(byField("price"));
                break;
        
            default:
                result = forSort;
                break;
        }
        return result;
    }, [products])

    useEffect(() => {        
        setGoods(sortGoods(sortId));                   
    }, [sortGoods, sortId]);

    return (
        <section className="main__category cat">
            <div className="cat__header">
                <h2 className="cat__title">{title}</h2>                
                <div className="cat__filters filters">
                    <div className="filter__count">
                        {goods.length > 1 ? (goods.length + " items") : (goods.length + " item")}
                    </div>
                    <Filter title={"sort by"} values={sortings} selected={sortId} onFilter={setSortId}/>
                </div>
            </div>
            <CatProducts products={goods} onAdd={onAdd}/>
            
        </section>
    );
}

export default Category;