import "./Category.scss";
import CatProducts from "./CatProducts/CatProducts";

function Category(props){
    return (
        <section className="main__category cat">
            <h2 className="cat__title">{props.category}</h2>
            <CatProducts products={props.products} onAdd={props.onAdd}/>
        </section>
    );
}

export default Category;