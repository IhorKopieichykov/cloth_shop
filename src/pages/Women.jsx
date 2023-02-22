import Category from '../components/App/Main/Category/Category';
import Main from '../components/App/Main/Main';
import { useContext, useEffect, useMemo } from 'react';
import { ProductsContext } from '../components/ProductsContext/ProductsContext';

function Women(){
    const { products } = useContext(ProductsContext);
    const womenProducts = useMemo(() => products.filter(item => item.category === 'women'), [products]);
    
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }, [])
    return (
        <Main>
            <Category title="Women" products={womenProducts} />
        </Main>
    );
}

export default Women;