function searchVehicles(token, query, callback) {
    if (typeof token !== 'string') throw new TypeError(`${token} is not a string`)
    if (typeof query !== 'string') throw new TypeError(`${query} is not a string`)
    if (typeof callback !== 'function') throw new TypeError(`${callback} is not a function`)
    
    const _token = token.split('.')
    const id = JSON.parse(atob(_token[1])).sub

    if(!id) throw new Error('no user id in token')

    call(`https://skylabcoders.herokuapp.com/api/v2/users/${id}`, {
        method: 'GET',
        headers: { 'Authorization': `Bearer ${token}`}
    }, (error, response) => {
        if(error) return callback(error)
    
        const userData= { error: _error, fav } = JSON.parse(response.content)

        if (_error) return callback(new Error(_error))

        const userFav = userData.fav

        call(`https://skylabcoders.herokuapp.com/api/hotwheels/vehicles?q=${query}`, undefined, (error, response) => {
            if (error) return callback(error)

            if (response.status === 200) {
                var results = JSON.parse(response.content)

                callback(error, results, userFav)
            }
        })
    })
}