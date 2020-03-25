const { validate } = require('hoort-utils')
const fetch = require('node-fetch')

module.exports = async function (token, landId) {
    validate.string(token, 'token')
    validate.string(landId, 'landId')

    const retrieve = await fetch(`http://192.168.0.30:8085/land/${landId}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` }
    })

    const land = await retrieve.json()

    const { error } = await land

    if (error) throw new Error(error)

    if (!land) throw new Error('You have no lands yet!')

    return land
}