import './Nav.scss';
import { NavLink } from 'react-router-dom';

function Nav({menuItems}){
    return (
        <nav className='header__nav nav'>
            {/* {menuItems.map(item => 
                active === item 
                ? (<li className='nav__item active' key={item}>{item}</li>) 
                : (<li className='nav__item' key={item}>{item}</li>) 
            )} */}
            {menuItems.map(item => 
                <NavLink to={item.link} key={item.title} className='nav__item'>{item.title}</NavLink>
            )}
        </nav>
    );
}

export default Nav;