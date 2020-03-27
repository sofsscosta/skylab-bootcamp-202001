const API_URL = process.env.REACT_APP_API_URL
const fetch = require('node-fetch')

export default async function () {

    const retrieve = await fetch(`http://localhost:8085/items/all`, {
        method: 'GET',
        headers: { 'Content-Type': `application/json` }
    })

    const items = await retrieve.json()

    const { error } = await items

    if (error) throw new Error(error)

    if (!items.length) throw new Error('No veggies to display')

    return items
}