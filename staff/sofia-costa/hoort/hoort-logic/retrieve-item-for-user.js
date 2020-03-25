const { validate } = require('hoort-utils')
const fetch = require('node-fetch')

module.exports = async function (token, id) {
    validate.string(token, 'token')
    validate.string(id, 'id')

    const retrieve = await fetch(`http://192.168.0.30:8085/item/user/${id}`, {
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