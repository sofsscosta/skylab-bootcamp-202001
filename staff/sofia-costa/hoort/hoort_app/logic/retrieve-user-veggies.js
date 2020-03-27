const API_URL = process.env.REACT_APP_API_URL
const { validate } = require('../hoort-utils')
const fetch = require('node-fetch')

export default async function (token) {
    validate.string(token, 'token')

    const retrieve = await fetch(`${API_URL}/items`, {
        method: 'GET',
        headers: { 'Authorization': `Bearer ${token}` }
    })
    const item = await retrieve.json()

    const { error } = await item

    if (error) throw new Error(error)

    if (!item) throw new Error('You have no planted or harvested veggies yet!')

    return item
}