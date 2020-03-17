const { validate } = require('../hoort-utils')
const fetch = require('node-fetch')

export default async function (id) {
    validate.string(id, 'id')

    const retrieve = await fetch(`http://192.168.0.30:8085/items`, {
        method: 'GET',
        headers: { 'Content-Type': `application/json` }
    })

    const item = await retrieve.json()

    const { error } = await item

    if (error) throw new Error(error)

    if (!item) throw new Error('There\'s no item corresponding to this id!')

    return item
}