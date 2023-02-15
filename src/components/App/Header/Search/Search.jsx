import './Search.scss';

function Search(){
    return (
        <div className="header__search">
            <input className="search" type="text" name="search" id="search" placeholder='Search' autoComplete='false' size="20"/>
            <label className="search__label" htmlFor="search"><i className='ic_search'></i></label>                
            <div className="header__search-window"></div>
        </div>
    );
}

export default Search;