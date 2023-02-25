import React from 'react'

export default function Search() {
    return (
        <section className="main__search search">
            <div className="search__header">
                <h2 className="search__title">Search</h2>
            </div>            
            <div className="search__body">
                <div className="search__query"></div>
                <div className="search__result">
                    <div className="search__category scategory">
                        <h3 className="scategory__title">                            
                        </h3>
                        <div className="scategory__items">
                            <div className="scategory__item"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
