const { validate } = require('../hoort-utils')
const fetch = require('node-fetch')

export default async function (token, landId) {
    validate.string(token, 'token')
    validate.string(landId, 'landId')

    const retrieve = await fetch(`http://192.168.0.30:8085/land/${landId}`, {
        method: 'GET',
        headers: { 'Authorization': `Bearer ${token}` }
    })

    const land = await retrieve.json()

    const { error } = await land

    if (error) throw new Error(error)

    if (!lands) throw new Error('You have no lands yet!')

    return land
}