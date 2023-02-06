import './Header.scss';

function Header() {
  return (
    <header className='header'>
        <div className="header__container">
            <nav className='header__nav nav'>
                <ul className='nav__list'>
                    <li className='nav__item'>women</li>
                    <li className='nav__item'>men</li>
                    <li className='nav__item'>kids</li>
                </ul>
            </nav>
            <div className='header__logo'>
                <img src="../images/logo.svg" alt="logo" />
            </div>
            <div className='header__buttons '>
                <button className='header__button-currency'>$</button>
                <button className='header__button-cart'>cart</button>
            </div>
        </div>        
    </header>
  );
}

export default Header;