import Category from '../components/App/Main/Category/Category';
import Main from '../components/App/Main/Main';
import { useContext, useEffect } from 'react';
import { ProductsContext } from '../components/ProductsContext/ProductsContext';

function Kids(){
    const { products } = useContext(ProductsContext);
    const kidsProducts = products.filter(item => item.category === 'kids');
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }, [])
    return (
        <Main>
            <Category title="Kids" products={kidsProducts}/>
        </Main>
    );
}

export default Kids;