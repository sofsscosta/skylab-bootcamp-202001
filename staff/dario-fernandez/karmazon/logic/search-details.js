function searchDetails(query, callback) {
    search('https://skylabcoders.herokuapp.com/api/hotwheels/vehicles/' + query, callback)
}