import Category from '../components/App/Main/Category/Category';
import Main from '../components/App/Main/Main';

import { useEffect } from 'react';

function Kids({products, onAdd}){
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }, [])
    return (
        <Main>
            <Category title="Kids" products={products} onAdd={onAdd}/>
        </Main>
    );
}

export default Kids;