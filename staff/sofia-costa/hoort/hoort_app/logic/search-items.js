const { validate } = require('../hoort-utils')
const fetch = require('node-fetch')

export default async function (query) {
    validate.string(query, 'query')

    const search = await fetch(`http://192.168.0.30:8085/allitems/${query}`, {
        method: 'GET',
        headers: { 'Content-Type': `application/json` }
    })

    const results = await search.json()

    const { error } = results

    if (error) {
        return new Error(error)
    }

    else return results
}