import './Nav.scss';

function Nav(props){
    const menuItems = props.menuItems;
    const active = props.active.toLowerCase();
    return (
        <nav className='header__nav nav'>
            <ul className='nav__list'>
                {menuItems.map(item => 
                    active === item 
                    ? (<li className='nav__item active' key={item}>{item}</li>) 
                    : (<li className='nav__item' key={item}>{item}</li>) 
                )}
            </ul>
        </nav>
    );
}

export default Nav;