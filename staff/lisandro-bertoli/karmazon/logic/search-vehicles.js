function searchVehicles(token, query, callback) {
    if (typeof query !== 'string') throw new TypeError(query + ' is not a string');
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');
    if (typeof token !== 'string') throw new TypeError(token + ' is not a string');

    call('https://skylabcoders.herokuapp.com/api/v2/users/', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token }
    }, (error, response) => {

        if (error) return callback(error)

        const user = JSON.parse(response.content)
        const { error: _error, favs } = user



        if (_error) return callback(new Error(_error))


        call('https://skylabcoders.herokuapp.com/api/hotwheels/vehicles?q=' + query, undefined, (error, response) => {
            if (error) return callback(error);

            if (response.status === 200) {
                const results = JSON.parse(response.content);

                if (favs) {
                    results.forEach(vehicle => {
                        if (favs.includes(vehicle.id)) vehicle.isFav = true
                    });

                }

                callback(undefined, results)
            }


        });
    })

}