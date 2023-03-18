import './PromoSlider.scss';
import './slick.scss';
import './slick-theme.scss';
import SlickSlider from "react-slick";
import { useMemo } from 'react';
import {PSProduct} from './components/PSProduct';

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

export function PromoSlider({products}) {
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
                breakpoint: 1300,
                settings: {
                        arrows: false,
                    },
            },
            {
                breakpoint: 992,
                settings: {
                        arrows: false,
                        slidesToShow: 3,
                    },
            },
            {
                breakpoint: 568,
                settings: {
                        arrows: false,
                        slidesToShow: 2,
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