import React from "react";
import './Main.scss';
import Slider from "../Slider/Slider";
import PromoProducts from "../PromoProducts/PromoProducts";
import PromoCategories from "../PromoCategories/PromoCategories";
import sweater from "../../images/main/women/products/sweater.png";

export default function Main(){
    return <main className="main">
                <div className="main__container">

                    <section className="main__category cat">
                        <h2 className="cat__title">Category name</h2>
                        <div className="cat__products">
                            <div className="cat__product">
                                <div className="cat__product_image">
                                    <img src={sweater} alt="" />
                                </div>                                
                                <div className="cat__product_addtocart"><i className='ic_empty_cart'></i></div>
                                <h3 className="cat__product_title">Apollo Running Short</h3>
                                <div className="cat__product_price">$50.00</div>
                            </div>
                        </div>
                    </section>

                </div>
            </main>
}