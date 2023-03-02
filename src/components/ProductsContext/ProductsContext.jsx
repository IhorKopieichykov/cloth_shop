import React, { useState, useEffect, useMemo, createContext, useCallback } from "react";
import getProductsFromAPI from "../../helpers/getProductsFromAPI.js";
import getCurrencyRatesFromApi from "../../helpers/getCurrencyRatesFromApi.js";
import { useSearchParams } from 'react-router-dom';

export const ProductsContext = createContext({
    products: [],
    setProducts: () => {},
    isLoading: true,
    setIsLoading: () => {},
    rates: {},
    setRates: ()=>{},
    currency: "usd",
    setCurrency: () => {}
})

export const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currency, setCurrency] = useState("usd");
    const [rates, setRates] = useState({});
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
		getProductsFromAPI().then(arr => {
			setProducts(arr);
            setIsLoading(false);
            console.log("загрузили");
		})
        getCurrencyRatesFromApi().then(obj => {
            if (obj.hasOwnProperty("rates")) {                
                setRates(obj.rates);
            }
        })        
	}, [])    

    const changeCurrency = useCallback((curr)=>{
        if (rates.hasOwnProperty(curr.toUpperCase())) {
            if (searchParams.has("currency")) {
                if (searchParams.get('currency') !== curr.toLowerCase()) {                    
                    if (Object.keys(rates).includes(curr.toUpperCase())){
                        searchParams.set("currency", curr.toLowerCase());
                        setSearchParams(searchParams);
                    }
                }
            } else {
                if (Object.keys(rates).includes(curr.toUpperCase())){
                    searchParams.set("currency", curr.toLowerCase());
                    setSearchParams(searchParams);
                }
            }       
            setCurrency(curr.toLowerCase());
            setIsLoading(true);
            getProductsFromAPI().then(arr => {
                const newProducts = arr.map((prod)=>{
                    const newPrice = prod.price * rates[curr.toUpperCase()];
                    prod.price = newPrice;
                    return prod;          
                })
                setProducts(newProducts);
                setIsLoading(false);
                console.log("загрузили");
            })            
            console.log("поменяли");
        }
    }, [rates, searchParams, setSearchParams])

    useEffect(()=>{
        if (searchParams.has("currency")) {
            if (searchParams.get('currency') !== currency.toLowerCase()) {   
                if (!isLoading) {
                    console.log("первый раз поменяли");
                    changeCurrency(searchParams.get('currency'));                    
                }                 
            }
        }
    }, [changeCurrency, currency, isLoading, searchParams])

    const contextValue = useMemo(() => (
        {
            products,
            setProducts,
            isLoading,
            setIsLoading,
            rates,
            setRates,
            currency,
            changeCurrency
        }
      ), [changeCurrency, currency, isLoading, products, rates]);
    return (
        <ProductsContext.Provider value={contextValue}>
            {children}
        </ProductsContext.Provider>
    );
}