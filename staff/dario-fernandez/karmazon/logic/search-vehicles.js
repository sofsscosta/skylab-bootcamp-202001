function searchVehicles(query, callback) {
    call('https://skylabcoders.herokuapp.com/api/hotwheels/vehicles?q=' + query, undefined, function(error, response) {
        var data = JSON.parse(response.content)
    
        if(error) {
            return callback(error)
        } else if(!data.length) {
            callback(new Error('No results'))
        } else if(response.status === 200) {
            callback(undefined, data)   
        } else {
            callback(new Error('Unknown error'))
        }
    })
}