import axios from "axios";

/**
 * API call to get stocks
 * @returns {Promise<unknown>}
 */
export const getStocks = (url) => new Promise((resolve, reject) => {
    const headers = {
        'Content-Type': 'application/json'
    }
    axios.get(url, {headers: headers})
    .then((response) =>{
        resolve(response.data)
    })
    .then((error) =>{
        reject(error)
    })
})