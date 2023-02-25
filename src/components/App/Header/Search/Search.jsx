import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { ProductsContext } from '../../../ProductsContext/ProductsContext';
import './Search.scss';

function Search(){
    const { products, isLoading } = useContext(ProductsContext);

    const [query, setQuery] = useState('');
    const inputRef = useRef();

    const [winOpened, setWinOpened] = useState(false);
    const hswindowRef = useRef();

    useEffect(() => {        
        const handler = (e) => {
            if (hswindowRef.current.contains(e.target)) {
                setWinOpened(true);
                inputRef.current.focus();
            } else {
                setWinOpened(false);
            }
        }
        document.addEventListener('mousedown', handler);
        return () => document.removeEventListener('mousedown', handler);
    });

    const handlerSearchButton = useCallback((e) => {
        if (query.length > 0) {
            
        } else {
            inputRef.current.focus();
        }
    }, [query.length])
    
    const handlerClearButton = useCallback((e) => {
        setQuery('');
        inputRef.current.focus();
    }, [])

    const [queryProducts, setQueryProducts] = useState([]);

    useEffect(() => {
        let qProducts = products.filter(product => product.name.toLowerCase().includes(query));
        if (query.length >= 2) {
            setQueryProducts(qProducts);
        }
        // setQueryProducts(qProducts);        
    }, [query, products])

    const handlerProductclick = (e) => {
        // e.preventDefault();
        // inputRef.current.blur();
        setWinOpened(false);
        setQuery('');
    }


    return (
        <div className="header__search" ref={hswindowRef}>

            <input className="search__input" 
                type="text" name="search" 
                id="search" 
                placeholder='Search' 
                autoComplete='off' 
                size="20"
                value={query}
                ref={inputRef}
                tabIndex="1"
                onChange={(e)=>setQuery(e.target.value)}
                onFocus={()=>setWinOpened(true)}/>

            <button className="search__clear" onClick={(e)=>handlerClearButton(e)}>+</button>
            
            <button className="search__button" 
                htmlFor="search"
                onClick={(e) => handlerSearchButton(e)}>
                    <i className='ic_search'></i>
            </button>     

            <div className={`header__search-window hswindow ${winOpened ? "show" : "hide"}`} >
                <div className="hswindow__body">
                    {
                        query.length >= 2 
                        ?   queryProducts.length > 0
                            ?   queryProducts.map(product => 
                                    <Link to={`${product.category}/${product.id}`} 
                                        className="hswindow__item hsitem" 
                                        key={product.id}
                                        onClick={(e)=>handlerProductclick(e)}>
                                        <div className="hsitem__category">{product.category}</div>
                                        <div className="hsitem__title">{product.name}</div>
                                        <div className="hsitem__price">${product.price.toFixed(2)}</div>
                                    </Link>
                                )
                            :   <div className="hswindow__hint">
                                    <div className="hswindow__icon"><i className="ic_shocked"></i></div>
                                    <div className="hswindow__message">There are <b>no products</b> matching your request</div>
                                </div>
                        :   <div className="hswindow__hint">
                                <div className="hswindow__fake_input">Ab...<span><i className="ic_search"></i></span></div>
                                <div className="hswindow__message">Please enter at least<br/><b>two characters</b></div>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default Search;