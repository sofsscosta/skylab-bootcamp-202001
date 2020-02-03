function retrieveVehicle(id, callback) {
    if (typeof id !== 'string') throw new TypeError(id + ' is not a string')
    if (!id.trim()) throw new Error('id is empty')
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function')

    call('https://skylabcoders.herokuapp.com/api/hotwheels/vehicles/' + id, function (response) {
        if (response instanceof Error) return callback(response)

        if (response.status === 200) {
            try {
                const result = JSON.parse(response.content)
                callback(result)
            } catch (error) {
                callback(error)
            }
        }
    })
}