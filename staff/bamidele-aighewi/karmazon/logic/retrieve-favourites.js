function retrieveFavourites(token, callback) {
    if (typeof token !== 'string') throw new TypeError(`token ${token} is not a string`)
    if (!token.trim()) throw new Error('token is empty')
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
        if (response.status !== 200) callback(new Error(content.error))
        else callback({favourites: content.favs})
    })
}