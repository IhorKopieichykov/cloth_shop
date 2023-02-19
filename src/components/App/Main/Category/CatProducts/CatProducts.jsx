import "./CatProducts.scss";

function CatProducts({products, onAdd}){
    return (
        <div className="cat__products">
            {products.map(product => 
                <div className="cat__product" key={product.id}>
                    <div className="cat__product_image">
                        <img src={require(`../../../../../images/products/${product.category}/${product.id}/${product.images[0]}`)} alt={product.id} />
                    </div>                                
                    <div className="cat__product_addtocart" 
                        onClick={() => {
                            onAdd({
                                    ...product,
                                    "size": product.sizes[0],
                                    "color": product.colors[0],
                                    "count": 1
                                })
                            }}>
                        <i className='ic_empty_cart'></i>
                    </div>
                    <div className="cat__product_title">{product.name}</div>
                    <div className="cat__product_price">${product.price.toFixed(2)}</div>
                    
                </div>
            )}
        </div>
    );
}

export default CatProducts;