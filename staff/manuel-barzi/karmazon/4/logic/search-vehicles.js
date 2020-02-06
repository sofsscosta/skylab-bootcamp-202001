function searchVehicles(query, callback) {
    if (typeof query !== 'string') throw new TypeError(`${query} is not a string`)
    if (typeof callback !== 'function') throw new TypeError(`${callback} is not a function`)

    call(`https://skylabcoders.herokuapp.com/api/hotwheels/vehicles?q=${query}`, undefined, (error, response) => {
        if (error) return callback(error)

        if (response.status === 200) {
            var results = JSON.parse(response.content)

            callback(undefined, results)
        }
    })
}