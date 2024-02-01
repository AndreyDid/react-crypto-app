import {cryptoAssets} from "./data.js";

export async function fakeFetchCrypto() {

    const data = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            'X-API-KEY': 'CgGh1oMcGtqM2XgQiRcs1aLATGmzCGqQ7PEPL7sYPhg='
        }
    };
    const response = await fetch('https://openapiv1.coinstats.app/coins', data)

    if (!response.ok) throw new Error(response.statusText)

    return (await response.json())

}

export function fetchAssets() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(cryptoAssets)
        }, 100)
    })
}