import './Slider.scss';
import "./slick.scss"; 
import "./slick-theme.scss";
import SlickSlider from "react-slick";
import { useMemo } from 'react';
import { useRef } from 'react';
import Slide from './Slide/Slide';

function SamplePrevArrow(props) {
    const { className, style, onClick, children} = props;
    return (
        <div
        className={`${className} slider__prevBtn`}
        style={{ ...style, display: "block"}}
        onClick={onClick}
        ><div>{children}</div></div>
    );
}
function SampleNextArrow(props) {
    const { className, style, onClick, children } = props;
    return (
        <div
        className={`${className} slider__nextBtn`}
        style={{ ...style, display: "block"}}
        onClick={onClick}
        ><div>{children}</div></div>
    );
}  

export default function Slider() {
    const slider = useRef();
    const images = useMemo(()=>[
        {
            name: "01.jpg",
            title: "Brand New Models",
            btn: "See more"
        },
        {
            name: "02.jpg",
            title: "Your Best Accessories",
            btn: "Check out"
        },
        {
            name: "03.jpg",
            title: "Fashionable Men's Suits",
            btn: "Buy"
        },
        {
            name: "04.jpg",
            title: `Sport - is life! That's all for it`,
            btn: "Get new one"
        },
        {
            name: "05.jpg",
            title: "A series of new summer looks awaits you",
            btn: "Check out"
        },
        {
            name: "06.jpg",
            title: "Check out our new glasses collection",
            btn: "Look through"
        },
        {
            name: "07.jpg",
            title: "Warm tracksuits - practicality and comfort",
            btn: "Take a look"
        },
        {
            name: "08.jpg",
            title: "Summer shoes - I believe I can fly!",
            btn: "View more"
        },
        {
            name: "09.jpg",
            title: "Women's outfits for you ladies",
            btn: "Look over"
        },
        {
            name: "10.jpg",
            title: "Comfortable and practical shoes",
            btn: "Get a better look"
        },       
    ], [])
    const settings = useMemo(()=>({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 3000,
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
                    </SamplePrevArrow>
    }), [])
    return (
        <SlickSlider {...settings} className="main__slider slider" ref={slider}>
            {
                images.map((img) => <Slide img={img}/>)
            } 
        </SlickSlider>
    );
}