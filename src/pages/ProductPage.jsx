import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Main from '../components/App/Main/Main';
import Product from '../components/App/Main/Product/Product';
import { ProductsContext } from '../components/ProductsContext/ProductsContext';

export default function ProductPage() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }, [])
    const { products, isLoading } = useContext(ProductsContext);
    const { productId } = useParams();
    const [product, setProduct] = useState(products.find(product => product.id === productId));
    useEffect(()=>{
        setProduct(products.find(product => product.id === productId))
    },[isLoading, products, productId])
    
    return (
        <Main>
            {
                product ?
                <Product product={product} isLoading={isLoading}/>
                : <></>
            }
        </Main>
    )
}
