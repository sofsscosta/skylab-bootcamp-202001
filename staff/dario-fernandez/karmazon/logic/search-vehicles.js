function searchVehicles(query, token, callback) {
    __retrieveUserFavs__(token, (error, favs) => {
        if(error) {
            callback(error)
        } else {       
            call('https://skylabcoders.herokuapp.com/api/hotwheels/vehicles?q=' + query, undefined, function(error, response) {
                var data = JSON.parse(response.content)
            
                if(error) {
                    return callback(error)
                } else if(!data.length) {
                    callback(new Error('No results'))
                } else if(response.status === 200) {
                    data.forEach(vehicle => {
                        if(favs.includes(vehicle.id)) {
                            vehicle.isFav = true
                        } else {
                            vehicle.isFav = false
                        }
                    })
                    
                    callback(undefined, data)
                } else {
                    callback(new Error('Unknown error'))
                }
            })
        }
    })

    
}