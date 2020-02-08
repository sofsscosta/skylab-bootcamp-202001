function retrieveVehicle(idCar, token, callback) {
    if (typeof idCar !== 'string') throw new TypeError(idCar + ' is not a string');
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
console.log(response)
        //const { error, status } = response

        if (error) return callback(new Error(error))

        const user = JSON.parse(response.content)
        const {fav} = user

        if (response.status === 200) {

            call('https://skylabcoders.herokuapp.com/api/hotwheels/vehicles/' + idCar, undefined, (error, response) => {
                if (error) return callback(error);
        
                if (response.status === 200) {
                    var result = JSON.parse(response.content);

                    // for (var i in results) {
                    //     favs.includes(results[i].id) ? document.querySelector(".fav").classList.toggle(".fav__faved") : ''
                    // }
                    
                    if(fav) {
                        fav.includes(idCar) 
                        ? result.heart = true 
                        : result.heart = false
                            
                            // for (let j = 0; j < fav.length; j++) {
                            //     if (results[i].id === fav[j])
                            //         results[i].heart = true
                            // }
                    }
        
                    callback(result);
                }

            });
        }
    })
  
  
  
  
  
  
  
  
  
    // call('https://skylabcoders.herokuapp.com/api/hotwheels/vehicles/' + id, undefined, function (error, response) {
    //     if (error) return callback(error);

    //     if (response.status === 200) {
    //         var details = JSON.parse(response.content);

    //         callback(details);
    //     }
    // });
}