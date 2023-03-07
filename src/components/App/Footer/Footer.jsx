import React from "react";
import './Footer.scss';
import logo from "../../../images/header/logo.svg";
import { Link } from "react-router-dom";

export default function Footer(){
    return (
        <footer className="footer">
            <div className="footer__container">
                <Link to="/" className='footer__logo' onClick={() => window.scrollTo({top: 0,left: 0,behavior: 'smooth'})}>
                    <img src={logo} alt="logo" />
                </Link>
                <menu className="footer__menu">
                    <ul>
                        <li>                            
                            <Link to={"https://github.com/IhorKopieichykov/cloth_shop"} target="_blank" className="footer__menu_item">github</Link>
                        </li>
                        <li>                            
                            <Link to={"https://github.com/IhorKopieichykov/cloth_shop"} target="_blank" className="footer__menu_item">contacts</Link>
                        </li>
                        <li>                            
                            <Link to={"https://github.com/IhorKopieichykov/cloth_shop"} target="_blank" className="footer__menu_item">rights</Link>
                        </li>
                    </ul>                        
                </menu>
                <div className="footer__slideup slideup" onClick={() => window.scrollTo({top: 0,left: 0,behavior: 'smooth'})}>
                    <div className="slideup__text">Back to top</div>
                    <div className="slideup__button"><i className='ic_angle-up'></i></div>
                </div>
            </div>        
        </footer>
    );
}