import './HItemOption.scss';

function HItemOption({item, index, onUpdate, type}){
    return  (
        <div className="hcart__item_option">
            <div className="hcart__item_option-title">{type[0].toUpperCase() + type.slice(1)}:</div>
            <div className="hcart__item_option-picker">
                <div className="hcart__item_option-select">
                    {   type === "size" ?                        
                        item.sizes.map((size) => (
                            <div 
                            className={`cart_item__size-select__option ${item.size === size ? "selected" : ""}`}
                            key={size} 
                            data-size={size}
                            onClick={(e) => onUpdate(index, {...item, "size": e.target.dataset.size})}>
                                {size.toUpperCase()}
                            </div>
                        )) : type === "color" ?
                        item.colors.map((color) => (
                            <div 
                            className={`cart_item__color-select__option ${item.color === color ? "selected" : ""}`}
                            key={color} 
                            data-color={color}
                            style={{backgroundColor: color}}
                            onClick={(e) => onUpdate(index, {...item, "color": e.target.dataset.color})}></div>
                        )) : ""                       
                    }
                </div>
            </div>
        </div>
    );
}

export default HItemOption;