const API_URL = process.env.REACT_APP_API_URL

const { validate } = require('../hoort-utils')
const fetch = require('node-fetch')

module.exports = function (operation, scheme) {
    validate.string(operation, 'operation')
    //validate.scheme(scheme)
    //validate.scheme(scheme, 'scheme')

    return (async () => {
        console.log(scheme)

        const response = await fetch(`http://192.168.0.30:8085/land/divisions`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ operation, scheme })
        })

        const newScheme = await response.json()
        console.log('here!')
        console.log(newScheme)

        const { error } = response

        if (error) throw new Error(error)

        else return newScheme

    })()
}