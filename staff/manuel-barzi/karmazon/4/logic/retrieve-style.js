function retrieveStyle(id, callback) {
    if (typeof id !== 'string') throw new TypeError(`${id} is not a string`)
    if (typeof callback !== 'function') throw new TypeError(`${callback} is not a function`)

    call(`https://skylabcoders.herokuapp.com/api/hotwheels/styles/${id}`, undefined, (error, response) => {
        if (error) return callback(error)

        if (response.status === 200) {
            var result = JSON.parse(response.content)

            callback(undefined, result)
        }
    })
}