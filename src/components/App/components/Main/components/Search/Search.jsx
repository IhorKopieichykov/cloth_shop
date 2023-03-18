import React, { useState, useEffect, useContext, useMemo, useCallback } from 'react';
import { ProductsContext } from '../../../ProductsContext/ProductsContext';
import { useSearchParams } from 'react-router-dom';
import './Search.scss';
import SCategory from './SCategory/SCategory';

export default function Search() {
    const [searchParams] = useSearchParams();
    const { products } = useContext(ProductsContext);
    const query = useMemo(()=>searchParams.get("query"), [searchParams]);
    const [queryProducts, setQueryProducts] = useState([]);

    useEffect(() => {
        let qProducts = products.filter(product => product.name.toLowerCase().includes(query.toLowerCase()));
        if (query.length >= 2) {
            setQueryProducts(qProducts);
        }      
    }, [query, products])

    const getCategories = useCallback((qProds) => {
        let cats = [];
        for (let i = 0; i < qProds.length; i++) {
            const cat = qProds[i].category;
            if (!cats.includes(cat)) {
                cats.push(cat);
            }
        }
        return cats;
    }, [])

    const cats = useMemo(()=>getCategories(queryProducts), [queryProducts, getCategories]);

    return (
        <section className="main__search search">
            <div className="search__header">
                <h2 className="search__title">Search results</h2>
            </div>            
            <div className="search__body">
                <div className="search__query">Your query: <em>"{query}"</em></div>
                <div className="search__result">
                    {
                        queryProducts.length > 0
                        ?   cats.map((cat, index) => 
                                <SCategory category={cat} queryProducts={queryProducts} key={index}/>
                            ) 
                        :   <div className="search__notification" key={0}>
                                <div className="search__icon"><i className="ic_shocked"></i></div>
                                <div className="search__message">There are <b>no products</b> matching your request</div>
                            </div>
                    }
                    
                </div>
            </div>
        </section>
    )
}
