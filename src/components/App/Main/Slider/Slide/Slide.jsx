import React from 'react';
import './Slide.scss';

export default function Slide({img}) {
    return (
        <div className="slide" key={img.name}>
            <div className="slide__image">
                <img src={require(`../../../../../images/main/home/slider/${img.name}`)} alt="slide_img" />
            </div>
            <div className="slide__content">
                <div className="slide__title">{img.title}</div>
                <div className="slide__button">{img.btn}</div>
            </div>
        </div>
    )
}
