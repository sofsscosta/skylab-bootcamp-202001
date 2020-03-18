const { validate } = require('../hoort-utils')
const fetch = require('node-fetch')

export default async function (token) {
    validate.string(token, 'token')

    const retrieve = await fetch(`http://192.168.0.30:8085/items`, {
        method: 'GET',
        headers: { 'Authorization': `Bearer ${token}` }
    })
    const item = await retrieve.json()

    const { error } = await item

    if (error) throw new Error(error)

    if (!item) throw new Error('You have no planted or harvested veggies yet!')

    return item
}