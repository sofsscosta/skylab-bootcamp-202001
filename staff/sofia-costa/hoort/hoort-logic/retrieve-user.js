const API_URL = process.env.REACT_APP_API_URL

const { validate } = require('hoort-utils')
const fetch = require('node-fetch')

module.exports = async function (token) {
    validate.string(token, 'token')

    const retrieve = await fetch(`http://192.168.1.146:8085/users`, {
        method: 'GET',
        headers: { 'Authorization': `Bearer ${token}` }
    })

    const user = await retrieve.json()

    const { error } = user

    if (error) {
        return new Error(error)
    }

    else return user
}