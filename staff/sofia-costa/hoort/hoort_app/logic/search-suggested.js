const API_URL = process.env.REACT_APP_API_URL
const fetch = require('node-fetch')

export default async function () {

    const search = await fetch(`http://localhost:8085/items/reccommended`, {
        method: 'GET',
        headers: { 'Content-Type': `application/json` }
    })

    const results = await search.json()

    const { error } = results

    if (error) {
        return new Error(error)
    }

    else return results
}