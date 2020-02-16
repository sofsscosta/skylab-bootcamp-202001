function searchVehicles(query, token, callback) {
    if (typeof query !== 'string') throw new TypeError(query + ' is not a string');
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');

    const [header, payload, signature] = token.split('.')
    if (!header || !payload || !signature) throw new Error('invalid token')
    
    let id = JSON.parse(atob(payload)).sub 

    if (!id) throw new Error('no user id in token')

    call(`https://skylabcoders.herokuapp.com/api/v2/users/${id}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', "Authorization": `Bearer ${token}` },
   
    }, (error, response) => {

        if (response instanceof Error) return callback(response)

        //const { error, status } = response

        if (error) return callback(new Error(error))

        const user = JSON.parse(response.content)
        const {fav} = user

        if (response.status === 200) {

            call('https://skylabcoders.herokuapp.com/api/hotwheels/vehicles?q=' + query, undefined, (error, response) => {
                if (error) return callback(error);
        
                if (response.status === 200) {
                    var results = JSON.parse(response.content);

                    // for (var i in results) {
                    //     favs.includes(results[i].id) ? document.querySelector(".fav").classList.toggle(".fav__faved") : ''
                    // }
                    
                    if(fav) {
                        for (let i = 0; i < results.length; i++) {
                            fav.includes(results[i].id) 
                            ? results[i].heart = true 
                            : results[i].heart = false

                            // for (let j = 0; j < fav.length; j++) {
                            //     if (results[i].id === fav[j])
                            //         results[i].heart = true
                            // }
                        }

                    }
        
                    callback(results);
                }

            });
        }
    })
}