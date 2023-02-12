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
                        <div className="footer__menu_item">github</div>
                        <div className="footer__menu_item">contacts</div>
                        <div className="footer__menu_item">rights</div>
                    </menu>
                    <div className="footer__slideup slideup">
                        <div className="slideup__text"></div>
                        <div className="slideup__button"><i className='ic_angle-up'></i></div>
                    </div>
                </div>        
            </footer>
}