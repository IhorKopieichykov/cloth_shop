import './Header.scss';
import logo from "../../../images/header/logo.svg";
import Nav from './Nav/Nav';
import HeaderCart from './HeaderCart/HeaderCart';
import Currency from './Currency/Currency';
import Language from './Language/Language';
import Search from './Search/Search';
import { Link } from 'react-router-dom';

function Header({cart, onUpdate}) {
    const menuItems = [
        {
            title: "home",
            link: "/"
        }, 
        {
            title: "women",
            link: "/women"
        }, 
        {
            title: "men",
            link: "/men"
        }, 
        {
            title: "kids",
            link: "/kids"
        },
    ];

    return (
        <header className='header'>
            <div className="header__container">
                <Link to="/" className='header__logo'>
                    <img src={logo} alt="logo" />
                </Link>
                <Nav menuItems={menuItems} active="home"/>
                <div className='header__center'></div>
                <Search />
                <div className='header__options'>
                    <HeaderCart cart={cart} onUpdate={onUpdate}/>
                    <Currency />
                    <Language /> 
                </div>
            </div>        
        </header>
    );
}

export default Header;