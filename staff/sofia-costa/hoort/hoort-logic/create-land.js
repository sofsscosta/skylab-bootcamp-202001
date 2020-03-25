const API_URL = process.env.REACT_APP_API_URL

const { validate } = require('hoort-utils')
const fetch = require('node-fetch')

module.exports = function (token, name, location, soiltype, scheme) {
    validate.string(token, 'token')
    validate.string(name, 'name')
    validate.string(location, 'location')
    validate.string(soiltype, 'soiltype')
    //validate.scheme(scheme, 'scheme')

    return (async () => {

        const response = await fetch(`http://192.168.0.30:8085/land`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
            body: JSON.stringify({ name, location, soiltype, scheme })
        })

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