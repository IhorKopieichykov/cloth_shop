import React, { useState, useEffect, useMemo, createContext } from "react";
import getProductsFromAPI from "../../helpers/getProductsFromAPI.js";

export const ProductsContext = createContext({
    products: [],
    setProducts: () => {},
    isLoading: true,
    setIsLoading: () => {},
    currency: "usd"
})

export const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currency, setCurrency] = useState("usd")

    useEffect(() => {
		getProductsFromAPI().then(arr => {
			setProducts(arr);
            setIsLoading(false);
		})

        // setProducts(getProductsFromAPI());
        // setIsLoading(false);
	}, [])

    const contextValue = useMemo(() => (
        {
            products,
            setProducts,
            isLoading,
            setIsLoading,
            currency,
            setCurrency
        }
      ), [currency, isLoading, products]);
    return (
        <ProductsContext.Provider value={contextValue}>
            {children}
        </ProductsContext.Provider>
    );
}