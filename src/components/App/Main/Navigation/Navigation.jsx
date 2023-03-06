import React, { useMemo } from 'react';
import './Navigation.scss';
import Breadcrumbs from './Breadcrumbs/Breadcrumbs';
import BackBtn from './BackBtn/BackBtn';
import { useLocation } from 'react-router-dom';

export default function Navigation() {
    const location = useLocation();
    const path = useMemo(() => {
        return location.pathname.split('/').filter(crumb => crumb !== '');
    }, [location]); 

    return (
        <>
            {
                path.length &&
                <div className='main__navigation'>
                    <BackBtn />
                    <Breadcrumbs />
                </div>
            }
        </>
    )
}
