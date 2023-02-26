import './Slider.scss';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import SlickSlider from "react-slick";
import { useMemo } from 'react';
import { useRef } from 'react';

function SampleNextArrow(props) {
    const { className, style, onClick, children } = props;
    return (
        <div
        className={className}
        style={{ ...style, display: "block"}}
        onClick={onClick}
        >{children}</div>
    );
}
  
function SamplePrevArrow(props) {
    const { className, style, onClick, children} = props;
    return (
        <div
        className={className}
        style={{ ...style, display: "block"}}
        onClick={onClick}
        >{children}</div>
    );
}

export default function Slider() {
    const slider = useRef();
    const imageNames = useMemo(()=>[
        "01.jpg",
        "02.jpg",
        "03.jpg",
        "04.jpg",
        "05.jpg",
        "06.jpg",
        "07.jpg",
        "08.jpg",
        "09.jpg",
        "10.jpg",        
    ], [])
    const settings = useMemo(()=>({
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        nextArrow: <SampleNextArrow className="slider__nextArrow"><i className="ic_angle-right"></i></SampleNextArrow>,
        prevArrow: <SamplePrevArrow className="slider__prevArrow"><i className="ic_angle-left"></i></SamplePrevArrow>
    }), [])
    return (
        <SlickSlider {...settings} className="main__slider slider" ref={slider}>
            {
                imageNames.map((img) => (
                    <div className="slide" key={img}>
                        <div className="slide__image">
                            <img src={require(`../../../../images/main/home/slider/${img}`)} alt="slide_img" />
                        </div>
                        <div className="slide__content">
                            <div className="slide__title">Title</div>
                            <div className="slide__button">Check out</div>
                        </div>
                        
                    </div>
                ))
            } 
        </SlickSlider>
    );
}