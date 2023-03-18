import React, { useCallback, useContext, useState } from "react";
import './BurgerMenu.scss';
import logo from '../../../../../../shared/images/header/logo.svg';
import {Nav} from "./components/Nav";
import {Currency} from "./components/Currency";
import { Link } from "react-router-dom";
import { CartContext } from "../../../../../../store/CartContext";

export function BurgerMenu({menuItems}) {    
    const [open, setOpen] = useState(false);
    const {cart} = useContext(CartContext);

    const getItemsCount = useCallback(() => {
        return cart.reduce((acc, item) => (acc += item.count), 0);
    }, [cart]);

	return (
        <>
            <div className={`header__toggle_header_menu_button ${open ? "cross" : ""}`}
                onClick={()=>setOpen(!open)}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <menu className={`header__menu hmenu ${open ? "show" : "hide"}`}>
                <div className="hmenu__bg" onClick={(e)=>{setOpen(false)}} onScroll={(e)=>{e.stopPropagation(); e.preventDefault();}}></div>
                <div className="hmenu__body"> 
                    <div className="hmenu__logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="hmenu__profile">
                        <div className="hmenu__profile_icon">
                            <i className="ic_user"></i>
                        </div>
                        <div className="hmenu__profile_title">My Profile</div>
                        <i className="ic_angle-right"></i>
                    </div>
                    <Nav menuItems={menuItems} setOpen={setOpen}/>
                    <div className="hmenu__options">
                        <div className="hmenu__currency">
                            <div className="hmenu__currency_title">Currency</div>
                            <Currency />
                        </div>
                    </div>               
                    <div className="hmenu__products">
                        <Link to={"/cart"} className="hmenu__cart" onClick={()=>setOpen(false)}>
                            <i className="ic_empty_cart"></i>
                            <div className="hmenu__cart_title">
                                Cart
                            </div>
                            <div className="hmenu__cart_counter">{getItemsCount()} {getItemsCount() === 1 ?"item" : "items"}</div>
                            <i className="ic_angle-right"></i>
                        </Link>
                    </div>
                    
                </div>
            </menu>
        </>
    );
}
