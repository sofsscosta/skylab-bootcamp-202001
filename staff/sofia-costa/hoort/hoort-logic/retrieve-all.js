const fetch = require('node-fetch')

module.exports = async function () {

    const retrieve = await fetch(`http://192.168.0.30:8085/items/all`, {
        method: 'GET',
        headers: { 'Content-Type': `application/json` }
    })

    const items = await retrieve.json()

    const { error } = await items

    if (error) throw new Error(error)

    if (!items.length) throw new Error('No veggies to display')

    return items
}