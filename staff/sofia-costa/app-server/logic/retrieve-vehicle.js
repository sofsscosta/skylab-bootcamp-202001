const { fetch } = require('../utils')
const atob = require('atob')

module.exports=function (token, id) {

    if(token) {

        if (typeof token !== 'string') throw new TypeError(`token ${token} is not a string`)
    
        const [header, payload, signature] = token.split('.')
        if (!header || !payload || !signature) throw new Error('invalid token')
    
        const { sub } = JSON.parse(atob(payload))
    
        if (!sub) throw new Error('no user id in token')
    }

    if (typeof id !== 'string') throw new TypeError(`${id} is not a string`)

    if(token) {

        return fetch(`https://skylabcoders.herokuapp.com/api/v2/users/`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(response => {

            const user = JSON.parse(response.content), { error: _error } = user
    
            if (_error) throw new Error(_error)
    
            const { fav = [] } = user

            return fetch(`https://skylabcoders.herokuapp.com/api/hotwheels/vehicles/${id}`)

            .then(response => {

                if (response.status === 200) {
                    const vehicle = JSON.parse(response.content)
    
                    vehicle && (vehicle.isFav = fav.includes(vehicle.id))
    
                    return vehicle
                }
            })
        })
    
    } else {
        return fetch(`https://skylabcoders.herokuapp.com/api/hotwheels/vehicles/${id}`)
        .then(response => {

            if (response.status === 200) {
                const vehicle = JSON.parse(response.content)
    
                return vehicle
            }
        })
    }
}