import './Nav.scss';
import { NavLink } from 'react-router-dom';

export function Nav({menuItems}){
    return (
        <nav className='header__nav nav'>
            {
                menuItems.map(item => 
                    <NavLink to={item.link} key={item.title} className='nav__item'>{item.title}</NavLink>
                )
            }
        </nav>
    );
}