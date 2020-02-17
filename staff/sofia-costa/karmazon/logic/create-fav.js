function toggleFavVehicle (id, token, callback) {
    if (typeof id !== 'string') throw new TypeError('id ' + id + ' is not a string');
    if (typeof token !== 'string') throw new TypeError('token ' + token + ' is not a string');
    if (typeof callback !== 'function') throw new TypeError('callback ' + callback + ' is not a function');

    call(`https://skylabcoders.herokuapp.com/api/v2/users`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', "Authorization": `Bearer ${token}` },
   
    }, (error, response) => {
        if (error) return callback(error)
        const user = JSON.parse(response.content)

        let {fav} = user
        //const fav = user.fav

        if (!fav)
            fav = [id]
        else 
            fav.includes(id) ? 
            fav.splice(fav.indexOf(id), 1)
            //fav = fav.filter(car => car !== id) 
            : fav.push(id)
        
        // const favs = content.favs ? content.favs : new Array ()
      
        // if (content.favs){
        //     for (let i in favs) {
        //         favs[i].id === id ? content.favs.splice(i, 1) : ''
        //     }
        // }
        // else {
        //     favs.push({"id": `${id}`})
        // }

           // var toggleFav = content.favs.includes(id) ? content.favs.splice(content.favs.indexOf(id), 1) : content.favs.push(id)
        
        if (response.status === 200) {
            call(`https://skylabcoders.herokuapp.com/api/v2/users/`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json', "Authorization": `Bearer ${token}`},
                body: JSON.stringify({ fav })
            
            }, (error, response) => {
                //console.log(response)
                if (error) return callback(error)
                if (response.status === 204) {

                    callback()
                }
            })
        }
    })
}

