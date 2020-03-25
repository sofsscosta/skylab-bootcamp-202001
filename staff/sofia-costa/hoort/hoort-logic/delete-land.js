const API_URL = process.env.REACT_APP_API_URL

const { validate } = require('hoort-utils')
const fetch = require('node-fetch')

module.exports = function (land, token) {
    validate.string(land, 'land')
    validate.string(token, 'token')

    return (async () => {

        const response = await fetch(`http://192.168.0.30:8085/land`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
            body: JSON.stringify({ land })
        })

        if (response.status === 200) {
            console.log('successful delete')
            return
        }

        if (response.status !== 200) {

            let res = await response.json()

            const { error } = res

            throw new Error(error)

        } else throw new Error(response)
    })()
}