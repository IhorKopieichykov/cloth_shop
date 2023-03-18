import React, { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import PageNumber from './PageNumber/PageNumber';
import './Pagination.scss';

export default function Pagination({length, products, isLoading, setGoods, productsPerPage}) {
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
            if (countOfPages) {
                if (page > countOfPages) {
                    console.log(countOfPages);
                    setGoods(sliceProducts(products, 0, productsPerPage));
                    setSelected(0);
                    searchParams.set("page", 1);
                    setSearchParams(searchParams);
                } else {
                    setGoods(sliceProducts(products, page-1, productsPerPage));
                    setSelected(page-1);
                }                
            }
        } else {      
            if (countOfPages) {
                setGoods(sliceProducts(products, 0, productsPerPage));
                setSelected(0);
                searchParams.set("page", 1);
                setSearchParams(searchParams);                
            }      
        }
    }, [countOfPages, isLoading, products, productsPerPage, searchParams, setGoods, setSearchParams])


    const handlerPage = (i) => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
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
                                    pageNumbers.map((number, index)=>{                                        
                                        if (index>=selected-1 && index <= selected+1) {    // three numbers are always displayed
                                            return (
                                                <PageNumber 
                                                    key={index} 
                                                    index={index} 
                                                    selected={selected} 
                                                    pageNumbers={pageNumbers} 
                                                    number={number} 
                                                    handlerPage={handlerPage}/>
                                            )
                                        }
                                        if (selected === 0 || selected === pageNumbers.length-1) {   // three numbers are always displayed, even if it`s start or end position
                                            if (index>=selected-2 && index <= selected+2) {
                                                return (
                                                    <PageNumber 
                                                        key={index} 
                                                        index={index} 
                                                        selected={selected} 
                                                        pageNumbers={pageNumbers} 
                                                        number={number} 
                                                        handlerPage={handlerPage}/>
                                                )
                                            }
                                        }
                                        if (index === 0 && selected >= 2) {  // first page are always displayed if selected page index is equal or more than 3
                                            return (
                                                <PageNumber 
                                                    key={index} 
                                                    index={index} 
                                                    selected={selected} 
                                                    pageNumbers={pageNumbers} 
                                                    number={number} 
                                                    handlerPage={handlerPage}/>
                                            )
                                        }
                                        if (index === pageNumbers.length-1 && selected <= pageNumbers.length-3) {  // last page are always displayed if selected page index is equal or less than 3
                                            return (
                                                <PageNumber 
                                                    key={index} 
                                                    index={index} 
                                                    selected={selected} 
                                                    pageNumbers={pageNumbers} 
                                                    number={number} 
                                                    handlerPage={handlerPage}/>
                                            )
                                        }      
                                        return '';               
                                    })
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
