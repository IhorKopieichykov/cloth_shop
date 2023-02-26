import Main from '../components/App/Main/Main';
import Slider from '../components/App/Main/Slider/Slider';
import PromoProducts from '../components/App/Main/PromoProducts/PromoProducts';
import PromoCategories from '../components/App/Main/PromoCategories/PromoCategories';

import { useEffect } from 'react';

function Home(){
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }, [])
    return (
        <Main outOfCont={<Slider/>}>
            <PromoProducts/>
            <PromoCategories/>
            <PromoProducts/>
        </Main>
    );
}

export default Home