import React from 'react';
import './Slide.scss';
import { Link } from "react-router-dom"

export default function Slide({img}) {
    return (
        <div className="slide" key={img.name}>
            <div className="slide__image">
                <img src={require(`../../../../../images/main/home/slider/${img.name}`)} alt="slide_img" />
            </div>
            <div className="slide__content">
                <div className="slide__title">{img.title}</div>
                <Link to={img.link} className="slide__button">{img.btn}</Link>
            </div>
        </div>
    )
}
