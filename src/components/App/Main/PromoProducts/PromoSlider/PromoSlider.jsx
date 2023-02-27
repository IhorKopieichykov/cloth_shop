import './PromoSlider.scss';
import './slick.scss';
import './slick-theme.scss';
import SlickSlider from "react-slick";
import { useMemo } from 'react';
import PSProduct from './PSProduct/PSProduct';
import { useContext } from 'react';
import ProductsContext from '../../../../ProductsContext/ProductsContext';

function SamplePrevArrow(props) {
    const { className, style, onClick, children} = props;
    return (
        <div
        className={`${className} promo_slider__prevBtn`}
        style={{ ...style, display: "block"}}
        onClick={onClick}
        ><div>{children}</div></div>
    );
}
function SampleNextArrow(props) {
    const { className, style, onClick, children } = props;
    return (
        <div
        className={`${className} promo_slider__nextBtn`}
        style={{ ...style, display: "block"}}
        onClick={onClick}
        ><div>{children}</div></div>
    );
}  

export default function PromoSlider({products}) {    
    // const {products} = useContext(ProductsContext);
    // const slider_products = useMemo(()=>products.filter(prod=>prod.price <= 50), [products]);
    const settings = useMemo(()=>({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        nextArrow:  <SampleNextArrow 
                        style={{}}
                        onClick={() => {}}>
                        <i className="ic_angle-right"></i>
                    </SampleNextArrow>,
        prevArrow:  <SamplePrevArrow 
                        style={{}}
                        onClick={() => {}}>
                        <i className="ic_angle-left"></i>
                    </SamplePrevArrow>,
        responsive: [
            {
            breakpoint: 768,
            settings: {
                    arrows: false,
                },
            },
        ],
    }), [])
    return (
        <SlickSlider {...settings} className="promo__slider">
            {
                products.map((product, index)=>(
                    <PSProduct product={product} key={index}/>
                ))
            }
        </SlickSlider>
    );
}