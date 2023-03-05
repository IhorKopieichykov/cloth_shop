import './Header.scss';
import logo from "../../../images/header/logo.svg";
import Nav from './Nav/Nav';
import HeaderCart from './HeaderCart/HeaderCart';
import Currency from './Currency/Currency';
import Language from './Language/Language';
import Search from './Search/Search';
import { Link } from 'react-router-dom';
import HeaderUser from './HeaderUser/HeaderUser';
import BurgerMenu from './BurgerMenu/BurgerMenu';

function Header() {
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
                <Link to="/" className='header__logo left'>
                    <img src={logo} alt="logo" />
                </Link>
                <BurgerMenu menuItems={menuItems}/>
                <Nav menuItems={menuItems}/>
                <div className='header__center'></div>
                <Search />
                <div className='header__options'>
                    <Currency />
                    <HeaderCart />
                    <HeaderUser />
                </div>
                <Link to="/" className='header__logo right'>
                    <img src={logo} alt="logo" />
                </Link>
            </div>        
        </header>
    );
}

export default Header;