function retrieveFavorites(token, callback) {
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');
    if (typeof token !== 'string') throw new TypeError(token + ' is not a string');


    call('https://skylabcoders.herokuapp.com/api/v2/users/', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token }
    }, (error, response) => {

        if (error) return callback(error)

        const user = JSON.parse(response.content)
        const { error: _error } = user


        if (_error) return callback(new Error(_error))

        const { favs } = user

        let favsList = []
        counter = 0

        favs.forEach(id => {
            call(`https://skylabcoders.herokuapp.com/api/hotwheels/vehicles/${id}`, undefined, (error, response) => {
                if (error) return callback(error);

                counter++

                if (response.status === 200) {
                    var vehicle = JSON.parse(response.content)
                    vehicle.isFav = true
                    favsList.push(vehicle)

                    if (counter === favs.length) {
                        return callback(undefined, favsList)
                    }
                }
            });

        })

    })
}