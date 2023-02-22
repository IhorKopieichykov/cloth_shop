import React, { useMemo } from 'react';
import './Breadcrumbs.scss';
import { Link, useLocation } from 'react-router-dom';

export default function Breadcrumbs() {
    const location = useLocation();
    
    const breadcrumbs = useMemo(() => {        
        console.log(location.pathname.split('/').filter(crumb => crumb !== ''));
        return location.pathname.split('/').filter(crumb => crumb !== '');
    }, [location]);

    return (
        breadcrumbs.length ?
            <div className='main__breadcrumbs breadcrumbs'>
                <Link to='/' className="breadcrumb home">
                    <i className="ic_home"></i>                           
                </Link>
                <div className="breadcrumb__arrow">
                    <i className="ic_angle-right"></i>
                </div>
                {breadcrumbs.reduce((currentLink, crumb, index, arr) => {
                    currentLink += `/${crumb}`;
                    return( index !== arr.length-1 ?
                        <>
                            <Link to={currentLink} className="breadcrumb">
                                {crumb}                            
                            </Link>
                            <div className="breadcrumb__arrow">
                                <i className="ic_arrow-right"></i>
                            </div>
                        </> : 
                        <div className="breadcrumb current">
                            {crumb}
                        </div>
                    );                    
                }, '')}                
            </div> : ''
    )
}
