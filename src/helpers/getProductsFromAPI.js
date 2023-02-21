const productsURL = "https://63f3ca33fe3b595e2ee94d32.mockapi.io/products";

export default function getProductsFromAPI() {
    return fetch(productsURL).then(response => response.json());
}