function searchVehicles(query, token, callback) {
    if (typeof query !== 'string') throw new TypeError(`${query} is not a string`)
    if (typeof token !== 'string') throw new TypeError(`${token} is not a string`)
    if (!token.trim()) throw new Error('token is empty')

    const tokenParts = token.split('.')
    if (tokenParts.length !== 3) throw new Error('token is invalid')

    if (typeof callback !== 'function') throw new TypeError(`${callback} is not a function`)

    const [, payload,] = token.split('.')
    const payloadObject = JSON.parse(atob(payload))


    call(`https://skylabcoders.herokuapp.com/api/v2/users/${payloadObject.sub}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        // body: JSON.stringify({ name, surname, username, password })
    }, response => {
        const content = JSON.parse(response.content)
        
        if (response.status !== 200) {
            callback(new Error(content.error))
        }else{
            call(`https://skylabcoders.herokuapp.com/api/hotwheels/vehicles?q=${query}`, undefined, response => {
                if (response instanceof Error) return callback(response)

                if (response.status === 200) {
                    var results = JSON.parse(response.content)

                    callback({vehicles: results, favourites: content.favs})
                }
            })
        }
    })
}