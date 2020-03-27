const API_URL = process.env.REACT_APP_API_URL
const { validate } = require('../hoort-utils')
const fetch = require('node-fetch')

export default async function (query) {
    validate.string(query, 'query')

    const search = await fetch(`http://localhost:8085/allitems/${query}`, {
        method: 'GET',
        headers: { 'Content-Type': `application/json` }
    })

    const results = await search.json()

    const { error } = results

    if (error) {
        throw new Error(error)
    }

    else return results
}