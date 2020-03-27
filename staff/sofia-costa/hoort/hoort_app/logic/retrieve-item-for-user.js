const API_URL = process.env.REACT_APP_API_URL
const { validate } = require('../hoort-utils')
const fetch = require('node-fetch')

export default async function (token, id) {
    validate.string(token, 'token')
    validate.string(id, 'id')

    const retrieve = await fetch(`${API_URL}/item/user/${id}`, {
        method: 'GET',
        headers: { 'Authorization': `Bearer ${token}` }
    })

    let item = await retrieve.json()

    item = Object.entries(item)

    const { error } = await item

    if (error) throw new Error(error)

    if (!item) throw new Error('There\'s no item corresponding to this id!')

    return item
}