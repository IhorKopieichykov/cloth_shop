import Category from '../components/App/Main/Category/Category';
import Main from '../components/App/Main/Main';
import { useEffect, useContext } from 'react';
import { ProductsContext } from '../components/ProductsContext/ProductsContext';

function Men({onAdd}){
    const { products } = useContext(ProductsContext);
    const menProducts = products.filter(item => item.category === 'men');
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }, [])
    return (
        <Main>
            <Category title="Men" products={menProducts} onAdd={onAdd}/>
        </Main>
    );
}

export default Men;