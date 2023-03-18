import React from "react";
import Navigation from "./Navigation/Navigation";
import './Main.scss';

export default function Main({children, outOfCont}){
    return (
            <main className="main">
                {outOfCont}
                <div className="main__container">
                    <Navigation />
                    {children}
                </div>
            </main>
    );
}