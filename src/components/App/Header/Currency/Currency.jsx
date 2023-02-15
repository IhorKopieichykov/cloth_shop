import './Currency.scss';

function Currency(){
    return (
        <div className="header__option-currency">
            <div className='header__button-currency expand'>&#36;
                <i className='ic_angle-down'></i>
            </div>  
            <div className="header__list-currency">
                <ul>
                    <li>&#36; USD</li>
                    <li>&#8364; EUR</li>
                    <li>&#8372; UAH</li>
                </ul>
            </div>          
        </div>        
    );
}

export default Currency;