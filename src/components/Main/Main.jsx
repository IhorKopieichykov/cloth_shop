import React from "react";
import './Main.scss';
import Slider from "../Slider/Slider";
import PromoProducts from "../PromoProducts/PromoProducts";
import PromoCategories from "../PromoCategories/PromoCategories";

export default function Main(){
    return <main className="main">
                <Slider />
                <div className="main__container">                   
                    <PromoProducts />
                    <PromoCategories />
                    <PromoProducts />
                </div>
            </main>
}