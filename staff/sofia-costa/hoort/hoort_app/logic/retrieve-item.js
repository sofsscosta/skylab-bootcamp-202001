const API_URL = process.env.REACT_APP_API_URL
const { validate } = require('../hoort-utils')
const fetch = require('node-fetch')

export default async function (id) {
    validate.string(id, 'id')

    const retrieve = await fetch(`http://localhost:8085/item/${id}`, {
        method: 'GET',
        headers: { 'Content-Type': `application/json` }
    })

    const item = await retrieve.json()

    // if (!item) throw new Error('There\'s no item corresponding to this id!')

    const { error } = await item

    if (error) throw new Error('There\'s no item corresponding to this id!')

    return item
}