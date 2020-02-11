function retrieveVehicle(token, id, callback) {
    if (typeof id !== 'string') throw new TypeError(id + ' is not a string')
    if (typeof token !== 'string') throw new TypeError(token + ' is not a string')
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function')

    call('https://skylabcoders.herokuapp.com/api/hotwheels/vehicles/' + id, undefined, (error, response) => {
        if (error) return callback(error)
        var result = JSON.parse(response.content)

        call(`https://skylabcoders.herokuapp.com/api/v2/users`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`
            }
          },
          (error, response) => {
            if (error) return callback(error)
            const user = JSON.parse(response.content),{ error: _error } = user
            if (_error) return callback(new Error(_error))

            const {fav} = user
            
            if (fav) {
            fav.forEach(favId => {
                if (favId === result.id)
                result.heart = true
              })
            }
            callback(undefined, result)
          })
    })
}