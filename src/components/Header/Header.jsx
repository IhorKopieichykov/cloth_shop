import './Header.scss';
import logo from "../../images/header/logo.svg";
import Nav from '../Nav/Nav';
import HeaderCart from '../HeaderCart/HeaderCart';
import Currency from '../Currency/Currency';
import Language from '../Language/Language';
import Search from '../Search/Search';

function Header(props) {
    const menuItems = ["home", "women", "men", "kids"];
    return (
        <header className='header'>
            <div className="header__container">
                <div className='header__logo'>
                    <img src={logo} alt="logo" />
                </div>
                <Nav menuItems={menuItems} active="home"/>
                <div className='header__center'></div>
                <Search />
                <div className='header__options'>
                    <HeaderCart cart={props.cart}/>           
                    <Currency />
                    <Language />
                </div>
            </div>        
        </header>
    );
}

export default Header;