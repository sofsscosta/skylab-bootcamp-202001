const { validate } = require('../hoort-utils')
const fetch = require('node-fetch')

export default function (token) {
    validate.string(token, 'token')

    return (async () => {

        const retrieve = await fetch(`http://192.168.0.30:8085/land/plantations`, {
            method: 'GET',
            headers: { 'Authorization': `Bearer ${token}` }
        })

        const lands = await retrieve.json()

        const { error } = await lands

        if (error) throw new Error(error)

        if (!lands.length) throw new Error('You have no lands yet!')

        return lands

    })()
}