function searchVehicles(token,query, callback) {
    if (typeof query !== 'string') throw new TypeError(`${query} is not a string`)
    if (typeof callback !== 'function') throw new TypeError(`${callback} is not a function`)

  
    _token = token.split('.')
    
    const payload = JSON.parse(atob(_token[1])).sub


    call(`https://skylabcoders.herokuapp.com/api/v2/users/${payload}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: undefined
    }, (error,response) => {
        if (error) return callback(error)

        const user = JSON.parse(response.content), {error : _error} = user

        if(_error)callback(new Error (_error))

        if (user.favs !== undefined) {

            call('https://skylabcoders.herokuapp.com/api/hotwheels/vehicles?q=' + query, undefined, function (error,response) {
                if (error) return callback(error)
            
                if (response.status === 200) {
                    const results = JSON.parse(response.content)
                    results.forEach(car => {
                        user.favs.includes(car.id)? car.fav = true : car.fav = false
                    })
                    callback(undefined, results);
                }
            })

        } else {
  
            call(`https://skylabcoders.herokuapp.com/api/hotwheels/vehicles?q=${query}`, undefined, (error, response) => {
                if (error) return callback(error)

                if (response.status === 200) {
                    const vehicles = JSON.parse(response.content)
                    callback(undefined, vehicles)
                }
            })
        }
    })
}