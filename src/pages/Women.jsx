import Category from '../components/App/Main/Category/Category';
import Main from '../components/App/Main/Main';
import { useEffect, useMemo } from 'react';

function Women(){
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }, [])
    return (
        <Main>
            <Category title="Women" category={"women"} />
        </Main>
    );
}

export default Women;