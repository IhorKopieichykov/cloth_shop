import Category from '../components/App/Main/Category/Category';
import Main from '../components/App/Main/Main';
import { useEffect } from 'react';

function Kids(){
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }, [])
    return (
        <Main>
            <Category title="Kids" category={"kids"}/>
        </Main>
    );
}

export default Kids;