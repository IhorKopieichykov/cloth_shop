import "./Category.scss";
import CatProducts from "./CatProducts/CatProducts";
import Sort from './Sort/Sort';
import { ProductsContext } from '../../../ProductsContext/ProductsContext';
import { useContext, useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";

function Category({title, category}){
    const { products, isLoading } = useContext(ProductsContext);
    const catProducts = useMemo(() => products.filter(item => item.category === category), [products, category]);
    const [goods, setGoods] = useState(catProducts);  
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
                    <Sort products={catProducts} setGoods={setGoods} field={field} order={order} setSearchParams={setSearchParams}/>
                </div>
            </div>            
            <CatProducts products={goods} isLoading={isLoading}/>
        </section>
    );
}

export default Category;