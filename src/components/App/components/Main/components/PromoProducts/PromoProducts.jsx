import './PromoProducts.scss';
import PromoSlider from './PromoSlider/PromoSlider';

function PromoProducts({title, products}) {
    return (
        <section className="main__promo promo">
            <h2 className="promo__title">{title}</h2>
            <div className="promo__content">
                <PromoSlider products={products}/>                
            </div>
        </section>
    );
}

export default PromoProducts;