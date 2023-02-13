import './PromoCategories.scss';
import women from '../../images/main/home/categories/women.png';
import men from '../../images/main/home/categories/men.png';
import kids from '../../images/main/home/categories/kids.png';

function PromoCategories() {
    return (
        <section className="main__promo promo">
            <h2 className="promo__title">Shop by Category</h2>
            <div className="promo__content">
                <div className="promo__items promo_categories">
                    <div className="promo__item promo_category">
                        <h2 className="promo_category__title">Women</h2>
                        <img src={women} alt="" />                                 
                    </div>
                    <div className="promo__item promo_category">
                        <h2 className="promo_category__title">Men</h2>  
                        <img src={men} alt="" />                                    
                    </div>
                    <div className="promo__item promo_category">
                        <h2 className="promo_category__title">Kids</h2>                                    
                        <img src={kids} alt="" />  
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PromoCategories;