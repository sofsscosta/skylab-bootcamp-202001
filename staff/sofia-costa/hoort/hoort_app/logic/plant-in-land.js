const API_URL = process.env.REACT_APP_API_URL

const { validate } = require('../hoort-utils')
const fetch = require('node-fetch')


module.exports = function (landId, scheme, token) {

    validate.string(landId, 'landId')
    validate.string(token, 'token')

    return (async () => {

        const response = await fetch(`${API_URL}/land/planted`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
            body: JSON.stringify({ land: landId, scheme })
        })

        const land = await response.json()

        const { error } = land

        if (error) throw new Error(error)

        else return land
    })()
}