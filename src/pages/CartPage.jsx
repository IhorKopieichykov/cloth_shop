import React, { useEffect } from 'react';
import {Cart} from '../components/App/components/Main/components/Cart';
import {Main} from '../components/App/components/Main';

export default function CartPage() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }, [])
    return (
        <Main>
            <Cart/>
        </Main>
    )
}
