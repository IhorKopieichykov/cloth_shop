import './PromoProducts.scss';
import PromoSlider from './PromoSlider/PromoSlider';
import product_image from '../../../../images/products/p.png';

function PromoProducts({products}) {
    return (
        <section className="main__promo promo">
            <h2 className="promo__title">Hot prices</h2>
            <div className="promo__content">
                <PromoSlider products={products}/>                
            </div>
        </section>
    );
}

export default PromoProducts;