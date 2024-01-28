import {cryptoAssets, cryptoData} from "./data.js";

// можно сделать promice на обычный fetch который будет делать запрос к этой API https//:openapi.coinstats.app/
export function fakeFetchCrypto() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(cryptoData)
        }, 100)
    })
}

export function fetchAssets() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(cryptoAssets)
        }, 100)
    })
}