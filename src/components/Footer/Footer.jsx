import React from "react";
import './Footer.scss';
import logo from "../../images/header/logo.svg";

export default function Footer(){
    return <footer className="footer">
                <div className="footer__container">
                    <div className='footer__logo'>
                        <img src={logo} alt="logo" />
                    </div>
                    <menu className="footer__menu">
                        <ul>
                            <li className="footer__menu_item">github</li>
                            <li className="footer__menu_item">contacts</li>
                            <li className="footer__menu_item">rights</li>
                        </ul>                        
                    </menu>
                    <div className="footer__slideup slideup">
                        <div className="slideup__text"></div>
                        <div className="slideup__button"><i className='ic_angle-up'></i></div>
                    </div>
                </div>        
            </footer>
}