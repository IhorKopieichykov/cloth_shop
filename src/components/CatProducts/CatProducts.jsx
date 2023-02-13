import "./CatProducts.scss";

function CatProducts(props){
    const products = props.products;
    return (
        <div className="cat__products">
            {products.map(product => 
                <div className="cat__product" key={product.id}>
                    <div className="cat__product_image">
                        <img src={require('../../images/main/women/products/' + product.image)} alt="" />
                    </div>                                
                    <div className="cat__product_addtocart" onClick={() => {props.onAdd(product)}}>
                        <i className='ic_empty_cart'></i>
                        </div>
                    <h3 className="cat__product_title">{product.name}</h3>
                    <div className="cat__product_price">${product.price.toFixed(2)}</div>
                </div>
            )}
        </div>
    );
}

export default CatProducts;