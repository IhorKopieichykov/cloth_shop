import React, { useEffect } from "react";
import Main from '../components/App/Main/Main';
import NotFound from "../components/App/Main/NotFound/NotFound";

export default function PageNotFound() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }, [])
    
	return (
        <Main>
            <NotFound/>
        </Main>
    );
}
