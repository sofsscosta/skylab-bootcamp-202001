const atob = require('atob')
const call = require('../utils/call')

module.exports=function (token, query, callback) {
    if (typeof token !== 'string') throw new TypeError(`token ${token} is not a string`)
   
    const [header, payload, signature] = token.split('.')
    if (!header || !payload || !signature) throw new Error('invalid token')

    const { sub } = JSON.parse(atob(payload))

    if (!sub) throw new Error('no user id in token')

    if (typeof query !== 'string') throw new TypeError(`${query} is not a string`)
    if (typeof callback !== 'function') throw new TypeError(`${callback} is not a function`)

    call(`https://skylabcoders.herokuapp.com/api/v2/users/${sub}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }, (error, response) => {
        if (error) return callback(error)

        const user = JSON.parse(response.content), { error: _error } = user

        if (_error) return callback(new Error(_error))

        const { fav = [] } = user

        call(`https://skylabcoders.herokuapp.com/api/hotwheels/vehicles?q=${query}`, undefined, (error, response) => {
            if (error) return callback(error)

            if (response.status === 200) {
                const vehicles = JSON.parse(response.content)

                vehicles.forEach(vehicle => {vehicle.isFav = fav.includes(vehicle.id)})

                callback(undefined, vehicles)
            }
        })
    })
}