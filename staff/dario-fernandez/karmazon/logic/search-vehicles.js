function searchVehicles(query, callback) {
    search('https://skylabcoders.herokuapp.com/api/hotwheels/vehicles?q=' + query, callback)
}



    