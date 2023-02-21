import useLocalStorage from "../../../../../helpers/useLocalStorage";
import "./CatProducts.scss";

function CatProducts({products, onAdd}){
    const [cart, setCart] = useLocalStorage('cart', []);

    const updateItemCount = (searchItem, count) => {
		const indexOfItem = cart.indexOf(searchItem);
		const currItem = cart[indexOfItem];
		const newItem = {
			...currItem,
			"count": currItem.count + count
		}
		setCart([...cart.slice(0, indexOfItem), newItem, ...cart.slice(indexOfItem + 1)]);
	}
	const addToCart = (item) => {
		const searchItem = cart.find(i => i.id === item.id && i.color === item.color && i.size === item.size);
		if (searchItem) {
			updateItemCount(searchItem, 1);			
		} else{
			setCart([...cart, item]);
		}		
	}
	

    return (
        <div className="cat__products">
            {products.map(product => 
                <div className="cat__product" key={product.id}>
                    <div className="cat__product_image">
                        <img src={require(`../../../../../images/products/${product.category}/${product.id}/${product.images[0]}`)} alt={product.id} />
                    </div>                                
                    <div className="cat__product_addtocart" 
                        onClick={() => {
                            const newItem = {
                                ...product,
                                "size": product.sizes[0],
                                "color": product.colors[0],
                                "count": 1
                            }
                            onAdd(newItem);
                            addToCart(newItem);
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