import "./Category.scss";
import CatProducts from "../CatProducts/CatProducts";
import women_products from "../../other/women_products.json";

function Category(props){
    const category = props.category;
    let products = [];
    if (category.toLowerCase() === 'women') {
        products = women_products;
    }
    
    return (
        <section className="main__category cat">
            <h2 className="cat__title">{category}</h2>
            <CatProducts products={products}/>
        </section>
    );
}

export default Category;