const fetch = require('node-fetch')

module.exports = async function () {

    const search = await fetch(`http://192.168.0.30:8085/items/reccommended`, {
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