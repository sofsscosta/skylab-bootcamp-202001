export default function (token) {
    if (typeof token !== 'string') throw new TypeError(`token ${token} is not a string`)

    return fetch(`http://localhost:8085/users`, {
        method: 'GET',
        headers: { 'Authorization': `Bearer ${token}` }
    })
        // .then(response => {

        //     const data = JSON.parse(response.content), { error: _error } = data
        
        //     if (_error) throw new Error(_error)
        
        //     const { name, surname, username } = data
        
        //     return { name, surname, username }
        // })
        .then(response => response.text())
        .then(_user => {
            const user = JSON.parse(_user)
            return user
        })
        .catch(error => console.log(error))
}