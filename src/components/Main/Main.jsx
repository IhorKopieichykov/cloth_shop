import React from "react";
import './Main.scss';

export default function Main(){
    return <main className="main">
                <div className="main__container">
                    <div className="main__slider main__wide_content"></div>
                    <section className="main__promo promo">
                        <h2 className="promo__title"></h2>
                        <div className="promo__content">
                            <div className="promo__items">
                                <div className="promo__item">
                                    <div className="promo__product product">
                                        <div className="product__image"></div>
                                        <h3 className="product__title"></h3>
                                        <div className="product__price">$</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="main__promo promo">
                        <h2 className="promo__title"></h2>
                        <div className="promo__content main__wide_content">
                            <div className="promo__items">
                                <div className="promo__item">
                                    <div className="promo__category category">
                                        <h2 className="category__title"></h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
}