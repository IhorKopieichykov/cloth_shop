import Category from '../components/App/Main/Category/Category';
import Main from '../components/App/Main/Main';
import { useEffect } from 'react';

function Men(){
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }, [])
    return (
        <Main>
            <Category title="Men" category={"men"}/>
        </Main>
    );
}

export default Men;