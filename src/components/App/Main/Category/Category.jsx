import "./Category.scss";
import CatProducts from "./CatProducts/CatProducts";
import Filter from './Filter/Filter';

function Category(props){
    return (
        <section className="main__category cat">
            <div className="cat__header">
                <h2 className="cat__title">{props.title}</h2>
            </div>  
            <div className="cat__filters filters">
                <div className="filter">
                    <div className="filter__placeholder"></div>

                </div>
            </div>          
            
            <CatProducts products={props.products} onAdd={props.onAdd}/>
        </section>
    );
}

export default Category;