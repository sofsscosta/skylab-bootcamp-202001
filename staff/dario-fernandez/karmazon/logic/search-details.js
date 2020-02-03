function searchDetails(query, callback) {
    search('https://skylabcoders.herokuapp.com/api/hotwheels/vehicles/' + query, 'div.g', 'h3.LC20lb', '.rc>.r>a', 'span.st', callback)
}