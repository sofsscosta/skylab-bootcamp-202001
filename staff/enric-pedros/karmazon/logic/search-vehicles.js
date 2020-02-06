

function searchVehicles(token, query, callback) {
    if (typeof query !== 'string') throw new TypeError(query + ' is not a string')
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function')
    
    retrieveUser(token, (error, user) => {
        console.log(user)
        if (error) return callback(error)

        if (user.favs !== undefined) {
            call('https://skylabcoders.herokuapp.com/api/hotwheels/vehicles?q=' + query, undefined, function (error,response) {
                if (error) return callback(error)
            
                if (response.status === 200) {
                    const results = JSON.parse(response.content)
                    results.forEach(car => {
                        user.favs.includes(car.id)? car.fav = true : car.fav = false
                    })
                    console.log(results)
                    callback(undefined, results);
                }
            })
        } else {
            call('https://skylabcoders.herokuapp.com/api/hotwheels/vehicles?q=' + query, undefined, function (error,response) {
            if (error) return callback(error)
        
            if (response.status === 200) {
                const results = JSON.parse(response.content)
                callback(undefined, results);
            }
        })
        }
        
    })
}