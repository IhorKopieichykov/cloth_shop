import products from "../products/products.json";

const productsURL = "https://63f3ca33fe3b595e2ee94d32.mockapi.io/products";

export async function getProductsFromAPI() {
	let response = await fetch(productsURL);
	if (response.ok) {
		let json = await response.json();
		return json;
	} else {
		console.log("Ошибка HTTP: " + response.status);
		return products;
	}
}
