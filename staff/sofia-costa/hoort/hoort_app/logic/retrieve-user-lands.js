const API_URL = process.env.REACT_APP_API_URL
const { validate } = require('../hoort-utils')
const fetch = require('node-fetch')

export default async function (token) {
    validate.string(token, 'token')

    const retrieve = await fetch(`http://localhost:8085/land/user`, {
        method: 'GET',
        headers: { 'Authorization': `Bearer ${token}` }
    })

    const lands = await retrieve.json()

    // let landsIds = []

    // lands.forEach(land => landsIds.push(land.id))

    const { error } = await lands

    if (error) throw new Error(error)

    // if (!lands.length) throw new Error('You have no lands yet!')

    return lands
}