import "./Category.scss";
import CatProducts from "./CatProducts/CatProducts";
import Sort from './Sort/Sort';
import { ProductsContext } from '../../../ProductsContext/ProductsContext';
import { useContext, useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Filter from "./Filter/Filter";
import Pagination from "./Pagination/Pagination";

function Category({title, category}){
    const { products, isLoading } = useContext(ProductsContext);
    const [catProducts, setCatProducts] = useState(products.filter(item => item.category === category));
    useEffect(()=>{
        if (!isLoading) {
            setCatProducts(products.filter(item => item.category === category));
            // setCatProducts(products);
        }
    }, [products, category, isLoading])
    
    const [goodsAfterSort, setGoodsAfterSort] = useState(catProducts);
    const [goodsToDisplay, setGoodsToDisplay] = useState(catProducts);         
    
    const goods_count_filter_values = [
        {
            "title": "2",
            "value": 2
        },
        {
            "title": "4",
            "value": 4
        },
        {
            "title": "8",
            "value": 8
        },
        {
            "title": "16",
            "value": 16
        },
        {
            "title": "32",
            "value": 32
        },
    ]
    const [productsPerPage, setProductsPerPage] = useState(goods_count_filter_values.at(-1).value);
    
    

    return (
        <section className="main__category cat">
            <div className="cat__header">
                <h2 className="cat__title">{title}</h2>                
                <div className="cat__filters filters">
                    <div className="filter__count">
                        {catProducts.length === 1 ? (catProducts.length + " item") : (catProducts.length + " items")}
                    </div>
                    <Filter type={"ppp"} 
                        title={"Products per page"}
                        values={goods_count_filter_values} 
                        defValue={goods_count_filter_values.length-1} 
                        callback={setProductsPerPage}/>             
                    <Sort products={catProducts} setProducts={setGoodsAfterSort}/>
                </div>
            </div>            
            <CatProducts products={goodsToDisplay} isLoading={isLoading}/>
            <Pagination length={catProducts.length} products={goodsAfterSort} setGoods={setGoodsToDisplay} productsPerPage={productsPerPage}/>
        </section>
    );
}

export default Category;