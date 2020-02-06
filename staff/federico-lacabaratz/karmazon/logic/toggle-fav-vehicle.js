function toggleFavVehicle(token, idVehicle, callback){
    if (typeof token !== 'string') throw new TypeError(`${token} is not a string`)
    //if (typeof id !== 'string') throw new TypeError(`${id} is not a string`)
    if (typeof callback !== 'function') throw new TypeError(`${callback} is not a function`)
    const _token = token.split('.')
    const id = JSON.parse(atob(_token[1])).sub

    if (!id) throw new Error('no user id in token')

    call(`https://skylabcoders.herokuapp.com/api/v2/users/${id}`, {
        method: 'GET',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` 
        
        }

    },(error, response) => {
        if(error) return callback(error)
debugger
        const userData = JSON.parse(response.content)

        if(!userData.fav){ userData.fav = [idVehicle]
        } else if (userData.fav.includes(idVehicle)){
           const indexFav = userData.fav.indexOf(idVehicle)
           userData.fav.splice(indexFav,1)
        } else {
            userData.fav.push(idVehicle)
        }
        call(`https://skylabcoders.herokuapp.com/api/v2/users`, {
        method: 'PATCH',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(userData)
    },(error, response)=> {
        console.log('done')
    })
        
    })
    
}

 