import "./Slider.scss";
import "./slick.scss";
import "./slick-theme.scss";
import SlickSlider from "react-slick";
import { useMemo } from "react";
import { Slide } from "./components/Slide";

function SamplePrevArrow(props) {
	const { className, style, onClick, children } = props;
	return (
		<div
			className={`${className} slider__prevBtn`}
			style={{ ...style, display: "block" }}
			onClick={onClick}>
			<div>{children}</div>
		</div>
	);
}
function SampleNextArrow(props) {
	const { className, style, onClick, children } = props;
	return (
		<div
			className={`${className} slider__nextBtn`}
			style={{ ...style, display: "block" }}
			onClick={onClick}>
			<div>{children}</div>
		</div>
	);
}

export function Slider() {
	const images = useMemo(
		() => [
			{
				name: "01.jpg",
				title: "Brand New Models",
				btn: "See more",
				link: "/women",
			},
			{
				name: "02.jpg",
				title: "Your Best Accessories",
				btn: "Check out",
				link: "/women",
			},
			{
				name: "03.jpg",
				title: "Fashionable Men's Suits",
				btn: "Buy",
				link: "/men",
			},
			{
				name: "04.jpg",
				title: `Sport - is life! That's all for it`,
				btn: "Get new one",
				link: "/men",
			},
			{
				name: "05.jpg",
				title: "A series of new summer looks await of you",
				btn: "Check out",
				link: "/women",
			},
			{
				name: "06.jpg",
				title: "Check out our new glasses collection",
				btn: "Look through",
				link: "/women",
			},
			{
				name: "07.jpg",
				title: "Warm tracksuits - practicality and comfort",
				btn: "Take a look",
				link: "/men",
			},
			{
				name: "08.jpg",
				title: "Summer shoes - I believe I can fly!",
				btn: "View more",
				link: "/men",
			},
			{
				name: "09.jpg",
				title: "Women's outfits for you ladies",
				btn: "Look over",
				link: "/women",
			},
			{
				name: "10.jpg",
				title: "Comfortable and practical shoes",
				btn: "Get a better look",
				link: "/men",
			},
		],
		[]
	);
	const settings = useMemo(
		() => ({
			dots: false,
			arrows: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			initialSlide: 0,
			autoplay: true,
			lazyLoad: true,
			autoplaySpeed: 3000,
			pauseOnHover: true,
			nextArrow: (
				<SampleNextArrow style={{}} onClick={() => {}}>
					<i className="ic_angle-right"></i>
				</SampleNextArrow>
			),
			prevArrow: (
				<SamplePrevArrow style={{}} onClick={() => {}}>
					<i className="ic_angle-left"></i>
				</SamplePrevArrow>
			),
			responsive: [
				{
					breakpoint: 768,
					settings: {
						arrows: false,
					},
				},
			],
		}),
		[]
	);
	return (
		<SlickSlider {...settings} className="main__slider slider">
			{images.map((img) => (
				<Slide img={img} key={img} />
			))}
		</SlickSlider>
	);
}
