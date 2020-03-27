// const API_URL = process.env.REACT_APP_API_URL
// const { API_URL } = require('../env-var/env')

// console.log(API_URL)
const { validate } = require('../hoort-utils')
const fetch = require('node-fetch')

module.exports = function (name, username, email, password) {
    validate.email(email, 'email')
    validate.string(email, 'email')
    validate.string(name, 'name')
    validate.string(username, 'username')
    validate.string(password, 'password')
    console.log('entered')
    return (async () => {

        const response = await fetch(`http://localhost:8085/users`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, username, email, password })
        })

        console.log(response)

        if (response.status === 201) return

        if (response.status !== 200) {
            return response.json()
                .then(response => {
                    const { error } = response

                    throw new Error(error)

                })
        } else throw new Error(response)
    })()
}