import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { createSearchParams, Link, useNavigate, useSearchParams } from 'react-router-dom';
import { ProductsContext } from '../../../ProductsContext/ProductsContext';
import './Search.scss';

const symbols = {
    "usd": <>&#36;</>,
    "uah": <>&#8372;</>,
    "eur": <>&#8364;</>,
}

function Search(){
    const { products, isLoading, currency } = useContext(ProductsContext);

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

    const navigate = useNavigate();

    const handlerSearchButton = useCallback((e) => {
        if (query.trim().length >= 2) {
            const searchParams = {
                "query": query.trim()
            };
            setQuery('');
            setWinOpened(false);
            inputRef.current.blur();
            navigate({
                pathname: '/search',
                search: `?${createSearchParams(searchParams)}`
            });
        } else {
            inputRef.current.focus();
        }
    }, [navigate, query])
    
    const handlerClearButton = useCallback((e) => {
        setQuery('');
        inputRef.current.focus();
    }, [])

    const [queryProducts, setQueryProducts] = useState([]);

    useEffect(() => {
        let qProducts = products.filter(product => product.name.toLowerCase().includes(query.trim()));
        if (query.trim().length >= 2) {
            setQueryProducts(qProducts);
        }      
    }, [query, products])

    const handlerProductclick = (e) => {
        setWinOpened(false);
        setQuery('');
    }

    const handlerEnterKey = useCallback((e) => {
        if (e.key === "Enter") {
            handlerSearchButton();
        }
    }, [handlerSearchButton])


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
                onChange={(e)=>setQuery(e.target.value.toLowerCase())}
                onFocus={()=>setWinOpened(true)}
                onKeyDown={(e)=>handlerEnterKey(e)}/>

            <button className="search__clear" onClick={(e)=>handlerClearButton(e)}>+</button>
            
            <button className="search__button" 
                htmlFor="search"
                onClick={(e) => handlerSearchButton(e)}>
                    <i className='ic_search'></i>
            </button>     

            <div className={`header__search-window hswindow ${winOpened ? "show" : "hide"}`} >
                <div className="hswindow__body">
                    {
                        query.trim().length >= 2 
                        ?   queryProducts.length > 0
                            ?   queryProducts.map(product => 
                                    {

                                        const substringStart = product.name.toLowerCase().indexOf(query.trim());
                                        const substringEnd = product.name.toLowerCase().indexOf(query.trim()) + query.trim().length;

                                        return (<Link to={`${product.category}/${product.id}`} 
                                                    className="hswindow__item hsitem" 
                                                    key={product.id}
                                                    onClick={(e)=>handlerProductclick(e)}>
                                                    <div className="hsitem__category">{product.category}</div>
                                                    <div className="hsitem__title">{product.name.slice(0, substringStart)}<strong>{product.name.slice(substringStart, substringEnd)}</strong>{product.name.slice(substringEnd)}</div>
                                                    <div className="hsitem__price">
                                                        {
                                                            symbols[currency.toLowerCase()] && currency !== 'uah'
                                                            ? symbols[currency.toLowerCase()] 
                                                            : ''}
                                                        {product.price.toFixed(2)} 
                                                        {   
                                                            currency.toLowerCase() === 'uah'
                                                                ?   ' hrn'
                                                                :   ''
                                                        }
                                                    </div>
                                                </Link>)
                                    }
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