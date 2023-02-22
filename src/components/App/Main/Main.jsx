import React from "react";
import Breadcrumbs from "./Breadcrumbs/Breadcrumbs";
import './Main.scss';

export default function Main({children}){
    return (
            <main className="main">
                <div className="main__container">
                    <Breadcrumbs/>
                    {children}
                </div>
            </main>
    );
}