import './Layout.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';

function Layout ({cart, onUpdate}) {
    
    return(
        <div className='wrapper'>
            <Header cart={cart} onUpdate={onUpdate}/>
            <Outlet/>
            <Footer />
        </div>
    );
}

export default Layout;