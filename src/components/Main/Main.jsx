import React from "react";
import './Main.scss';
import Slider from "../Slider/Slider";
import PromoProducts from "../PromoProducts/PromoProducts";
import PromoCategories from "../PromoCategories/PromoCategories";
import Category from "../Category/Category";


export default function Main(props){
    return (
            <main className="main">
                <div className="main__container">
                    <Category category="Women" products={props.products} onAdd={props.onAdd}/>
                </div>
            </main>
    );
}