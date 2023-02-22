import React, { useContext, useMemo, useEffect, useState } from 'react';
import './Breadcrumbs.scss';
import { Link, useLocation, useParams } from 'react-router-dom';
import { ProductsContext, ProductsProvider } from '../../../ProductsContext/ProductsContext';

export default function Breadcrumbs() {
    const { products } = useContext(ProductsContext);
    const { productId } = useParams();

    const location = useLocation();
    
    const breadcrumbs = useMemo(() => {
        return location.pathname.split('/').filter(crumb => crumb !== '');
    }, [location]);   
    
    let currentLink = useMemo(() => '', []);             

    return (
        breadcrumbs.length ?
            <div className='main__breadcrumbs breadcrumbs'>
                <div className="breadcrumbs__item">
                    <Link to='/' className="breadcrumb home">
                        <i className="ic_home"></i>                           
                    </Link>
                    <div className="breadcrumb__arrow">
                        <i className="ic_angle-right"></i>
                    </div>
                </div>                
                {breadcrumbs.map((crumb, index) => {
                    currentLink += `/${crumb}`;
                    return( index !== breadcrumbs.length-1 ?
                        <div className="breadcrumbs__item" key={index}>
                            <Link to={currentLink} className="breadcrumb">
                                {crumb}                            
                            </Link>
                            <div className="breadcrumb__arrow">
                                <i className="ic_angle-right"></i>
                            </div>
                        </div> : 
                        <div className="breadcrumb current" key={index}>
                            {productId 
                                ? products.find(product => product.id === crumb)?.name 
                                : crumb
                            }
                        </div>
                    );                    
                }, '')}                
            </div> : ''
    )
}
