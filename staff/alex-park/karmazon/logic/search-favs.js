function searchFavs(token, callback){
    if (typeof token !== 'string') throw new TypeError(`${token} is not a string`)
    if (typeof callback !== 'function') throw new TypeError(`${callback} is not a function`)

    _token = token.split('.')

    const payload = JSON.parse(atob(_token[1])).sub

    call(`https://skylabcoders.herokuapp.com/api/v2/users/${payload}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: undefined
    }, (error, response) => {
        if (error) return callback(error)

        const user = JSON.parse(response.content), { error: _error } = user
        if (_error) callback(new Error(_error))

        if (user.favs !== undefined) {
            let listOfFavs = []
            user.favs.forEach(id => {
                
                call(`https://skylabcoders.herokuapp.com/api/hotwheels/vehicles/${id}`,undefined, (error, response) =>{
                    let favs = JSON.parse(response.content)
                    listOfFavs.push(favs)
                })
            })

            setTimeout(() => {
                listOfFavs = (listOfFavs.flat())
                listOfFavs.forEach(favCar => favCar.fav = true)
                callback(undefined, listOfFavs)
                
            }, 1000)

        } else {
            const listOfFavs = "There are no cars on favorites :^("
            callback(undefined, listOfFavs)
        }
    })
}