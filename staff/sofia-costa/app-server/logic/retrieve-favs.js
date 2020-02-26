const { fetch } = require('../utils')

module.exports = function (token) {
    if (typeof token !== 'string') throw new TypeError(token + ' is not a string');

    return fetch('https://skylabcoders.herokuapp.com/api/v2/users/', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token }
    })
        .then(response => {

            const user = JSON.parse(response.content)
            const { error: _error } = user

            if (_error) throw new Error(_error)

            const { fav } = user

            if (!fav.length) return fav

            let favList = []

            return fav.map(id => {
                return fetch(`https://skylabcoders.herokuapp.com/api/hotwheels/vehicles/${id}`)
                    .then(response => {

                        if (response.status === 200) {
                            var vehicle = JSON.parse(response.content)
                            vehicle.isFav = true
                            favList.push(vehicle)

                            // console.log(counter)
                            // console.log(fav.length)
                            // if (counter === fav.length) {
                            console.log(favList)
                            return favList
                            // }
                        }
                    })
                    .then(calls => Promise.all(calls))
                    .then(favList => {return favList})
            })

        })
}