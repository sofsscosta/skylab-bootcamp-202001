const { fetch } = require('../utils')

module.exports = function (id, token) {
    if (typeof id !== 'string') throw new TypeError('id ' + id + ' is not a string');
    if (typeof token !== 'string') throw new TypeError('token ' + token + ' is not a string');

    return fetch(`https://skylabcoders.herokuapp.com/api/v2/users`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', "Authorization": `Bearer ${token}` },
   
    })
    .then(response => {

        const user = JSON.parse(response.content)

        let {fav} = user

        if (!fav)
            fav = [id]
        else 
            fav.includes(id) ? 
            fav.splice(fav.indexOf(id), 1)
            : fav.push(id)

        if (response.status === 200) {
            return fetch(`https://skylabcoders.herokuapp.com/api/v2/users/`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json', "Authorization": `Bearer ${token}`},
                body: JSON.stringify({ fav })
            
            })
        }
    })
    .then(response => {

        if (response.status === 204) {
    
            return
        }
    })
}

