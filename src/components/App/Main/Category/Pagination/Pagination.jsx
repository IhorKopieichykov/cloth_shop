import React, { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import './Pagination.scss';

export default function Pagination({length, products, setGoods, productsPerPage}) {
    const [countOfPages, setCountOfPages] = useState(Math.ceil(length/productsPerPage));
    useEffect(()=>{
        setCountOfPages(Math.ceil(length/productsPerPage));
    }, [length, productsPerPage])
    
    const pageNumbers = useMemo(()=>{
        let arr = [];
        for (let i = 0; i < countOfPages; i++) {
            arr.push(i+1);            
        }
        return arr;
    }, [countOfPages]);

    const [selected, setSelected] = useState(0);
    const [searchParams, setSearchParams] = useSearchParams();
    const sliceProducts = (products, i, productsPerPage) => {
        let p = products.slice(0);
        return p.slice(i*productsPerPage, i*productsPerPage + productsPerPage);
    }
    useEffect(()=>{
        if (searchParams.has("page")) {
            const page = searchParams.get("page");
            if (page > countOfPages) {
                setGoods(sliceProducts(products, 0, productsPerPage));
                setSelected(0);
                searchParams.set("page", 1);
                setSearchParams(searchParams);
            } else {
                setGoods(sliceProducts(products, page-1, productsPerPage));
                setSelected(page-1);
            }
        } else {            
            setGoods(sliceProducts(products, 0, productsPerPage));
            setSelected(0);
            searchParams.set("page", 1);
            setSearchParams(searchParams);
        }
    }, [countOfPages, products, productsPerPage, searchParams, setGoods, setSearchParams])
    const handlerPage = (i) => {
        if (i >= 0 && i < countOfPages) {            
            setSelected(i);
            searchParams.set("page", i+1);
            setSearchParams(searchParams);
            setGoods(sliceProducts(products, i, productsPerPage));
        }
    }        

    return (
            <>
                {   
                    countOfPages > 1
                    ?   <div className='pagination pag'>
                            <div className="pag__left"
                                onClick={()=>handlerPage(selected-1)}>
                                <i className="ic_angle-left"></i>
                            </div>
                            <div className="pag__pages">
                                {
                                    pageNumbers.map((number, index)=>(
                                        <div className={`pag__page ${selected === index ? "selected" : ''}`}
                                            key={number}
                                            onClick={()=>handlerPage(index)}>
                                            {number}
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="pag__right"
                                onClick={()=>handlerPage(selected+1)}>
                                <i className="ic_angle-right"></i>
                            </div>            
                        </div>
                    :   ''
                }
            </>            
    )
}
