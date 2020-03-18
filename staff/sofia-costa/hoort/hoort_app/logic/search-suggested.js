const fetch = require('node-fetch')

export default async function () {

    const search = await fetch(`http://192.168.0.30:8085/items/reccommended`, {
        method: 'GET',
        headers: { 'Content-Type': `application/json` }
    })
    console.log('1')

    console.log(search)

    const results = await search.json()
    console.log('2')

    console.log(results)

    const { error } = results

    if (error) {
        return new Error(error)
    }

    else return results
}