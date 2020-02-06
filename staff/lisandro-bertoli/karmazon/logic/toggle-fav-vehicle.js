function toggleFavVehicle(id, token, callback) {
    if (typeof token !== 'string') throw new TypeError(`token ${token} is not a string`)
    if (typeof id !== 'string') throw new TypeError(`id ${id} is not an string`)
    if (typeof callback !== 'function') throw new TypeError(`callback ${callback} is not a function`)

    const [header, payload, signature] = token.split('.')

    if (!header || !payload || !signature) throw new Error('invalid token')

    const payloadObject = JSON.parse(atob(payload))
    const { sub } = payloadObject

    if (!sub) throw new Error('no user id in token')

    call('https://skylabcoders.herokuapp.com/api/v2/users/' + sub, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token }
    }, (error, response) => {

        if (error) return callback(error)

        const user = JSON.parse(response.content)
        const { error: _error } = user


        if (_error) return callback(new Error(_error))

        let { favs } = user

        if (favs.length && favs.includes(id)) {
            favs = favs.filter((car) => car !== id)
        } else if (favs && !favs.includes(id)) {
            favs.push(id)
        } else if (!favs) {
            favs = [id]
        }

        call('https://skylabcoders.herokuapp.com/api/v2/users/', {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token },
            body: JSON.stringify({ favs })
        }, (error, response) => {
            if (error) return callback(error)

            if (response.content) {
                const { error: _error } = JSON.parse(response.content)
                if (_error) return callback(new Error(_error))
            }

            if (response.status === 204) callback()
        })
    })
}