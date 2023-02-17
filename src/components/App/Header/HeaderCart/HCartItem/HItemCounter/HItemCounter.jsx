
import './HItemCounter.scss';

function HItemCounter({item, index, onUpdate}){
    return  (
        <div className="hcart__item_counter">
            <div className="hcart__item_counter__option" onClick={(e) => onUpdate(index, {...item, "count": item.count + 1})}>+</div>
            <div className="hcart__item_counter__count">{item.count}</div>
            <div className="hcart__item_counter__option" onClick={(e) => onUpdate(index, {...item, "count": item.count - 1})}>–</div>
        </div>
    );
}

export default HItemCounter;