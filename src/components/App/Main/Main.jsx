import React from "react";
import Breadcrumbs from "./Breadcrumbs/Breadcrumbs";
import './Main.scss';

export default function Main({children, outOfCont}){
    return (
            <main className="main">
                {outOfCont}
                <div className="main__container">
                    <Breadcrumbs/>
                    {children}
                </div>
            </main>
    );
}