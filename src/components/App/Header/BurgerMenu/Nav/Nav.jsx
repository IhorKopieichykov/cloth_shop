import './Nav.scss';
import { NavLink } from 'react-router-dom';

function Nav({menuItems, setOpen}){
    return (
        <nav className="hmenu__nav">
            {
                menuItems.map(item=>
                    <NavLink to={item.link} key={item.title} className="menu__nav_item" onClick={()=>setOpen(false)}>{item.title}</NavLink>
                )
            }
        </nav>
    );
}

export default Nav;