import currencyRates from '../products/currencyRates.json';
const ratesURL = "https://api.exchangeratesapi.io/v1/latest";
const API_KEY = "5q2p5BNH16UIo1liELGNLQM3keT5EcWW";


var myHeaders = new Headers();
myHeaders.append("apikey", API_KEY);

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};
const base = "USD";
const symbols = "USD,EUR,UAH";

export default async function getCurrencyRatesFromApi() {
    // let response = await fetch(`https://api.apilayer.com/exchangerates_data/latest?symbols=${symbols}&base=${base}`, requestOptions); // 250 requests 
    // let response = await fetch(`https://api.apilayer.com/fixer/latest?symbols=${symbols}&base=${base}`, requestOptions);              // 100 requests 
    const response = {
        "ok": false,
        "status": "from local json"
    }
    if (response.ok) { 
        let json = await response.json();        
        return json;
    }
    else {
        console.log("Ошибка HTTP: " + response.status);
        return currencyRates;
    }
}