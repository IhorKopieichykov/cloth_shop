import './Nav.scss';

function Nav(props){
    const menuItems = props.menuItems;
    const active = props.active.toLowerCase();
    return (
        <nav className='header__nav nav'>
            <ul className='nav__list'>
                {menuItems.map(item => {
                    return <li className={`nav__item ${active === item ? 'active' : ''}`} key={item}>{item}</li>;
                })}
            </ul>
        </nav>
    );
}

export default Nav;