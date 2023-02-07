import './Header.scss';

function Header() {
  return (
    <header className='header'>
        <div className="header__container">
            <div className='header__logo'>
                <img src="../images/logo.svg" alt="logo" />
            </div>
            <nav className='header__nav nav'>
                <ul className='nav__list'>
                    <li className='nav__item active'>home</li>
                    <li className='nav__item'>women</li>
                    <li className='nav__item'>men</li>
                    <li className='nav__item'>kids</li>
                </ul>
            </nav>
            <div className='header__center'></div>
            <div className="header__search">
                <input className="search" type="text" name="search" id="search" placeholder='Search' autoComplete='false' size="20"/>
                <label className="search__label" htmlFor="search"><i className='ic_search'></i></label>                
                <div className="header__search-window"></div>
            </div>
            <div className='header__buttons'>
                <div className="header__cart">
                    <div className='header__button-cart'>
                        <i className='ic_empty_cart'></i>
                    </div>
                    <div className="header__cart-window"></div>
                </div>                
                <div className="header__currency">
                    <div className='header__button-currency expand'>$<i className='ic_angle-down'></i></div>
                    <div className="header__currency-list">
                        <ul>
                            <li>$</li>
                            <li>&#8364;</li>
                            <li>&#8372;</li>
                        </ul>
                    </div>
                </div>
                <div className="header__language">
                    <div className='header__button-language expand'><i className='ic_angle-down'></i></div>
                    <div className="header__language-list">
                        <ul>
                            <li data-lang="en" id='en'><span></span> EN</li>
                            <li data-lang="ua" id='ua'><span></span> UA</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>        
    </header>
  );
}

export default Header;