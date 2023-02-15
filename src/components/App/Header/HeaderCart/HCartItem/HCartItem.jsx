import { useState } from 'react';
import './HCartItem.scss';

function HCartItem({currItem, onDelete}){

    // const [item, setItem] = useState(currItem);

    // const changeSelectedOption = (e) => {
    //     if (e.target.hasAttribute("data-size")) {
    //         const size = e.target.dataset.size;
    //         setItem((prevItem)=>({
    //             ...prevItem,
    //             "size": size
    //         }));
    //     } else if (e.target.hasAttribute("data-color")) {
    //         const color = e.target.dataset.color;
    //         setItem((prevItem) => ({
    //             ...prevItem,
    //             "color": color
    //         }));
    //     }
    // }

    // const countPlus = () => {
    //     setItem((prevItem) => ({
    //         ...prevItem,
    //         "count": prevItem.count + 1
    //     }));
    // }

    // const countMinus = () => {
    //     if (item.count > 1) {
    //         setItem((prevItem) => ({
    //             ...prevItem,
    //             "count": prevItem.count - 1
    //         }));
    //     }        
    // }    

    const changeSelectedOption = (e) => {
        if (e.target.hasAttribute("data-size")) {
            currItem.size = e.target.dataset.size;            
        } else if (e.target.hasAttribute("data-color")) {
            currItem.color = e.target.dataset.color;
        }
    }

    const countPlus = () => {        
        currItem.count = currItem.count + 1;
    }

    const countMinus = () => {
        currItem.count = currItem.count - 1;
    }  

    return (       
        <div className="hcart__item">
            <div className="hcart__item_info">
                <div className="hcart__item_title">{currItem.name.split(' ')[0]}</div>
                <div className="hcart__item_subtitle">{currItem.name.split(' ').slice(1).join(' ')}</div>
                <div className="hcart__item_cost">${currItem.price.toFixed(2)}</div>

                <div className="hcart__item_size">
                    <div className="hcart__item_size-title">Size:</div>
                    <div className="hcart__item_size-picker">
                        <div className="hcart__item_size-select">
                            {
                                currItem.sizes.map((size) => (
                                    <div 
                                    className={`cart_item__size-select__option ${currItem.size === size ? "selected" : ""}`}
                                    key={size} 
                                    data-size={size}
                                    onClick={changeSelectedOption}>
                                        {size.toUpperCase()}
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>

                <div className="hcart__item_color">
                    <div className="hcart__item_color-title">Color:</div>
                    <div className="hcart__item_color-picker">
                        <div className="hcart__item_color-select">
                            {
                                currItem.colors.map((color) => (
                                    <div 
                                    className={`cart_item__color-select__option ${currItem.color === color ? "selected" : ""}`}
                                    key={color} 
                                    data-color={color}
                                    onClick={changeSelectedOption}
                                    style={{backgroundColor: color}}></div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="hcart__item_counter">
                <div className="hcart__item_counter__option" onClick={countPlus}>+</div>
                <div className="hcart__item_counter__count">{currItem.count}</div>
                <div className="hcart__item_counter__option" onClick={countMinus}>–</div>
            </div>
            <div className="hcart__item_image" >
                <img src={require('../../../../../images/main/women/products/' + currItem.image)} alt="" />
            </div>
            <div className="hcart__item_delete" onClick={() => onDelete(currItem)}><i className="ic_trash"></i></div>
        </div>
    );
}

export default HCartItem;
