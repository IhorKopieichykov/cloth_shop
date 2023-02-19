import "./Category.scss";
import CatProducts from "./CatProducts/CatProducts";
import Filter from './Filter/Filter';
import { useEffect, useState, useMemo } from "react";

function Category({title, products, onAdd}){
    const sortings = useMemo(()=>["Default", "Name", "Newest", "Price (High-Low)", "Price (Low-High)", "Rating"], []);
    const [sortId, setSortId] = useState(0);
    const [goods, setGoods] = useState(products);    

    useEffect(() => {
        const byField = (field) => {
            return (a, b) => a[field] > b[field] ? 1 : -1;
        }
        let forSort = products.slice(0);
        let result = [];
        switch (sortId) {
            case 0:
                result = forSort;
                break;

            case 1:
                result = forSort.sort(byField("name"));
                break;

            case 2:
                result = forSort.sort(byField("name"));
                break;

            case 3:                
                result = forSort.sort(byField("price")).reverse();
                break;

            case 4:
                result = forSort.sort(byField("price"));
                break;

            case 5:
                result = forSort.sort(byField("name"));
                break;
        
            default:
                result = forSort;
                break;
        }
        setGoods(result);                   
    }, [products, sortId]);

    return (
        <section className="main__category cat">
            <div className="cat__header">
                <h2 className="cat__title">{title}</h2>
            </div>  
            <div className="cat__filters filters">
                <Filter title={"sort by"} values={sortings} selected={sortId} onFilter={setSortId}/>
            </div>          
            
            <CatProducts products={goods} onAdd={onAdd}/>
        </section>
    );
}

export default Category;