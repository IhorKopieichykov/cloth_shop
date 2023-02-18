import Category from '../components/App/Main/Category/Category';
import Main from '../components/App/Main/Main';

import { useEffect } from 'react';

function Women({products, onAdd}){
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }, [])
    return (
        <Main>
            <Category title="Women" products={products} onAdd={onAdd}/>
        </Main>
    );
}

export default Women;