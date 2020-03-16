const { validate } = require('../hoort-utils')
const fetch = require('node-fetch')

export default async function (token) {
    validate.string(token, 'token')

    const retrieve = await fetch(`http://192.168.1.146:8085/users`, {
        method: 'GET',
        headers: { 'Authorization': `Bearer ${token}` }
    })

    const res = await retrieve.text()
    const user = await res

    const { error } = user


    if (error) {
        JSON.parse(error)
        return new Error(error)
    }

    else return JSON.parse(user)

}