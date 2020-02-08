function retrieveVehicle(id, token, callback) {
    if (typeof id !== 'string') throw new TypeError(id + ' is not a string')
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function')
    if (typeof token !== 'string') throw new TypeError(token + ' is not a string')

    call('https://skylabcoders.herokuapp.com/api/v2/users/', {method: 'GET',headers: {'Authorization' : 'Bearer '+ token}},
        (error, response) => {
            if (error) return callback(error)

            let {error: _error, favs} = JSON.parse(response.content)

            if (_error) return callback(new Error(_error))
             

        call('https://skylabcoders.herokuapp.com/api/hotwheels/vehicles/' + id, undefined, (error, response) =>{
            if (error) return callback(error)

            if (response.status === 200) {
                const vehicle = JSON.parse(response.content)

                if(favs.length) if(favs.includes(vehicle.id)) vehicle.isFav = true
                   
                callback(undefined, vehicle)
            }
        })
    })
}