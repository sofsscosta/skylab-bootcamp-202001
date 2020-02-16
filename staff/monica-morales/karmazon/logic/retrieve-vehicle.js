function retrieveVehicle(token, id, callback) {
    if (typeof id !== 'string') throw new TypeError(`${id} is not a string`)
    if (typeof callback !== 'function') throw new TypeError(`${callback} is not a function`)

    _token = token.split('.')

    const payload = JSON.parse(atob(_token[1])).sub

    call(`https://skylabcoders.herokuapp.com/api/v2/users/${payload}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: undefined
    }, (error, response) => {
        if (error) return callback(error)

        const user = JSON.parse(response.content), { error: _error } = user
        if (_error) callback(new Error(_error))

        if (user.favs !== undefined) {

            call(`https://skylabcoders.herokuapp.com/api/hotwheels/vehicles/${id}`, undefined, (error, response) => {
                if (error)
                    return callback(error)

                if (response.status === 200) {
                    let detailInfo = JSON.parse(response.content)
                    user.favs.includes(id) ? detailInfo.fav = true : detailInfo.fav = false
                    
                    callback(undefined, detailInfo)
                }
            })
        } else {
            call(`https://skylabcoders.herokuapp.com/api/hotwheels/vehicles/${id}`, undefined, (error, response) => {
                if (error)
                    return callback(error)

                if (response.status === 200) {
                    let detailInfo = JSON.parse(response.content)
                    callback(undefined, detailInfo)
                }
            })
        }
    })
}