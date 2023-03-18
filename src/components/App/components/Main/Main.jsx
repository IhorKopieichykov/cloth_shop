import React from "react";
import {Navigation} from "./components/Navigation";
import './Main.scss';

export function Main({children, outOfCont}){
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