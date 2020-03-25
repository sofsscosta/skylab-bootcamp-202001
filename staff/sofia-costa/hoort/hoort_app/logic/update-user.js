const API_URL = process.env.REACT_APP_API_URL

const { validate } = require('../hoort-utils')
const fetch = require('node-fetch')


module.exports = function (changes, token) {
    validate.string(token, 'token')

    if (!Object.keys(changes).length) throw new Error('No fields have been changed')

    return (async () => {

        const response = await fetch(`http://localhost:8085/users`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
            body: JSON.stringify({ updates: changes })
        })


        if (response) {

            const res = await response.json()

            const { error } = res

            console.log('error in logic ', res)

            if (error) throw new Error(error)
        }

        else return
    })()
}