import './PromoProducts.scss';
import product_image from '../../images/products/p.png';

function PromoProducts() {
    return (
        <section className="main__promo promo">
            <h2 className="promo__title">Hot prices</h2>
            <div className="promo__content">
                <div className="promo__items promo_products">
                    <div className="promo__item promo_product">
                        <div className="promo_product__image">
                            <img src={product_image} alt="" />
                        </div>
                        <h3 className="promo_product__title">Apollo Running Short</h3>
                        <div className="promo_product__price">$50.00</div>                               
                    </div>
                    <div className="promo__item promo_product">
                        <div className="promo_product__image">
                            <img src={product_image} alt="" />
                        </div>
                        <h3 className="promo_product__title">Apollo Running Short</h3>
                        <div className="promo_product__price">$50.00</div>                               
                    </div>
                    <div className="promo__item promo_product">
                        <div className="promo_product__image">
                            <img src={product_image} alt="" />
                        </div>
                        <h3 className="promo_product__title">Apollo Running Short</h3>
                        <div className="promo_product__price">$50.00</div>                               
                    </div>
                    <div className="promo__item promo_product">
                        <div className="promo_product__image">
                            <img src={product_image} alt="" />
                        </div>
                        <h3 className="promo_product__title">Apollo Running Short</h3>
                        <div className="promo_product__price">$50.00</div>                               
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PromoProducts;