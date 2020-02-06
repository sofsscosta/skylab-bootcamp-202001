function toggleFavVehicle(id, token, callback) {
    if (typeof token !== 'string') throw new TypeError(`token' ${token} is not a string`)
    if (typeof id !== 'string') throw new TypeError(`id' ${id} is not a string`)
    if (typeof callback !== 'function') throw new TypeError(`callback ${callback} is not a function`)
    
    retrieveUser(token, (error, user) => {
       
        if (error) return callback(error)
        
        if (user.favs === undefined) {
            user.favs = [id]
        } else {
            if (user.favs.includes(id)) {
                user.favs.splice(user.favs.indexOf(id), 1)
            } else {
                user.favs.push(id)
            }
        }
                
        call('https://skylabcoders.herokuapp.com/api/v2/users/', {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
            body: JSON.stringify(user)
        }, (error, response) => {
            if (error) {
                return callback(error)
            }

            if (response.status === 204) {
                callback()

            } else if (response.status === 400) {
                callback(new Error("Bad request"))

            } else if (response.status === 401) {
                const { error } = JSON.parse(response.content)
                callback(new Error(error))

            } else {
                callback(new Error('Unknown error'))
            }
        })

    })
}