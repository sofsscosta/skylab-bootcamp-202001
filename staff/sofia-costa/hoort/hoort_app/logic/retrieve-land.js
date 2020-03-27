const API_URL = process.env.REACT_APP_API_URL
const { validate } = require('../hoort-utils')
const fetch = require('node-fetch')

export default async function (token, landId) {
    validate.string(token, 'token')
    validate.string(landId, 'landId')

    const retrieve = await fetch(`${API_URL}/land/${landId}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` }
    })

    const land = await retrieve.json()

    const { error } = await land

    if (error) throw new Error(error)

    if (!land) throw new Error('You have no lands yet!')

    return land
}