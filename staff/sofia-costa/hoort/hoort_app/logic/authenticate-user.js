const { validate } = require('../hoort-utils')
const fetch = require('node-fetch')

export default function (email, password) {
    validate.string(email, 'email')
    validate.email(email)
    validate.string(password, 'password')

    return (async () => {

        const auth = await fetch(`http://192.168.0.30:8085/users/auth`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        })

        const res = await auth.json()

        const { error, token } = res

        if (error)
            throw new Error(error)

        else {
            return token
        }
    })()
}