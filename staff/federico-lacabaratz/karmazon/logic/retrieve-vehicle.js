function retrieveVehicle(token, id, callback) {  
    if (typeof token !== 'string') throw new TypeError(`${token} is not a string`)
    if (typeof id !== "string") throw new TypeError(`${id} is not a string`)
    if (typeof callback !== 'function') throw new TypeError(`${callback} is not a function`)
   
    const _token = token.split('.')
    const idUser = JSON.parse(atob(_token[1])).sub

    if (!idUser) throw new Error('no user id in token')

    call(`https://skylabcoders.herokuapp.com/api/v2/users/${idUser}`, {
        method: 'GET',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` 
        
        }

    },(error, response) => {
        if(error) return callback(error)

        const userData = JSON.parse(response.content)
        
        call(`https://skylabcoders.herokuapp.com/api/hotwheels/vehicles/${id}`, undefined, (error, response) => {
            if (error) return callback(error)
    
            if (response.status === 200) {
                const result = JSON.parse(response.content)
    
                callback(undefined ,result, userData.fav)
            }
        })
    })
}