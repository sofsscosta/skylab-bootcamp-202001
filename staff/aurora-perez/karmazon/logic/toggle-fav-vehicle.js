function toggleFavVehicle(id, token, callback) {
    if (typeof id !== 'string') throw new TypeError('id ' + id + ' is not a string');
    if (typeof token !== 'string') throw new TypeError('token ' + token + ' is not a string');
    if (typeof callback !== 'function') throw new TypeError('callback ' + callback + ' is not a function');
    
    call('https://skylabcoders.herokuapp.com/api/v2/users/', {method: 'GET',headers: {'Authorization' : 'Bearer '+ token}},
        (error, response) => {
            if (error) return callback(error)

            let {error: _error, favs} = JSON.parse(response.content)

            if (_error) return callback(new Error(_error))
             
            if (favs.length && favs.includes(id)){
                favs = favs.filter(vehicleId => {
                    return vehicleId !== id
                })
            } else if (favs && !favs.includes(id)){
                favs.push(id)
            }else if (!favs){
                favs = [id]
            }

            call('https://skylabcoders.herokuapp.com/api/v2/users/', {
                method: 'PATCH',
                headers: {'Authorization' : 'Bearer '+ token, 'Content-Type':'application/json'},
                body: JSON.stringify({favs})},
                (error, response) => {
                    if (error) return callback(error)
                    
                    if (response.content) {
                        const { error: _error } = JSON.parse(response.content)
                        if (_error) return callback(new Error(_error))
                    }
                    if(response.status===204) {
                        callback()
                    }
                })

            
        })
}