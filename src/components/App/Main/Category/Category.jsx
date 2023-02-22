import "./Category.scss";
import CatProducts from "./CatProducts/CatProducts";
import Sort from './Sort/Sort';
import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";

function Category({title, products}){
    const [goods, setGoods] = useState(products);  
    const [searchParams, setSearchParams] = useSearchParams();

    const field = useMemo(() => searchParams.get('sortBy') || '', [searchParams]);
    const order = useMemo(() => searchParams.get('order') || '', [searchParams]);

    return (
        <section className="main__category cat">
            <div className="cat__header">
                <h2 className="cat__title">{title}</h2>                
                <div className="cat__filters filters">
                    <div className="filter__count">
                        {goods.length === 1 ? (goods.length + " item") : (goods.length + " items")}
                    </div>
                    <Sort products={products} setGoods={setGoods} field={field} order={order} setSearchParams={setSearchParams}/>
                </div>
            </div>
            <CatProducts products={goods}/>            
        </section>
    );
}

export default Category;