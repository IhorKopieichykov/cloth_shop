import Main from '../components/App/Main/Main';
import Slider from '../components/App/Main/Slider/Slider';
import PromoProducts from '../components/App/Main/PromoProducts/PromoProducts';
import PromoCategories from '../components/App/Main/PromoCategories/PromoCategories';
import { useContext } from 'react';
import { ProductsContext } from '../components/ProductsContext/ProductsContext';

import { useEffect, useMemo } from 'react';

function Home(){
    const {products} = useContext(ProductsContext);
    const slider_products_1 = useMemo(()=>products.filter(prod=>prod.price <= 50), [products]);
    const slider_products_2 = useMemo(()=>products.filter(prod=>prod.price > 50), [products]);
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }, [])
    return (
        <Main outOfCont={<Slider/>}>
            <PromoProducts title={"Hot prices"} products={slider_products_1}/>
            <PromoCategories/>
            <PromoProducts title={"Brand new models"} products={slider_products_2}/>
        </Main>
    );
}

export default Home