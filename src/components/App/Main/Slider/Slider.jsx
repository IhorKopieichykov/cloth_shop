import './Slider.scss';
import slider_image from '../../../../images/main/home/slider/slider.jpg';

export default function Slider() {
    return (
        <div className="main__slider">
            <img src={slider_image} alt="" />
        </div>
    );
}