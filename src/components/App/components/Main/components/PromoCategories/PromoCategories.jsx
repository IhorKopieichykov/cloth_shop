import './PromoCategories.scss';
import women from '../../../../../../shared/images/main/home/categories/women.png';
import men from '../../../../../../shared/images/main/home/categories/men.png';
import kids from '../../../../../../shared/images/main/home/categories/kids.png';
import { Link } from 'react-router-dom';

export function PromoCategories() {
    return (
        <section className="main__promo promo">
            <h2 className="promo__title">Shop by Category</h2>
            <div className="promo__content">
                <div className="promo__items promo_categories">
                    <Link to="/women" className="promo__item promo_category">
                        <h2 className="promo_category__title">Women</h2>
                        <img src={women} alt="" />                                 
                    </Link>
                    <Link to="/men" className="promo__item promo_category">
                        <h2 className="promo_category__title">Men</h2>  
                        <img src={men} alt="" />                                    
                    </Link>
                    <Link to="/kids" className="promo__item promo_category">
                        <h2 className="promo_category__title">Kids</h2>                                    
                        <img src={kids} alt="" />  
                    </Link>
                </div>
            </div>
        </section>
    );
}
