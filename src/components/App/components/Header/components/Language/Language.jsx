import './Language.scss';

function Language(){
    return (
        <div className="header__option-language">
            <div className='header__button-language expand'><i className='ic_angle-down'></i></div>
            <div className="header__list-language">
                <ul>
                    <li data-lang="en" id='en'><span></span> EN</li>
                    <li data-lang="ua" id='ua'><span></span> UA</li>
                </ul>
            </div>
        </div>
    );
}

export default Language;