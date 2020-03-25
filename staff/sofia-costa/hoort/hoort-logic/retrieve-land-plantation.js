const { validate } = require('hoort-utils')
const fetch = require('node-fetch')

module.exports = async function (id, token) {
    validate.string(id, 'id')
    validate.string(token, 'token')

    const retrieve = await fetch(`http://192.168.0.30:8085/land/planted/${id}`, {
        method: 'GET',
        headers: { 'Content-Type': `application/json`, 'Authorization': `Bearer ${token}` }
    })

    const item = await retrieve.json()

    const { error } = await item

    if (error) throw new Error(error)

    if (!item) throw new Error('There\'s no item corresponding to this id!')

    return item
}