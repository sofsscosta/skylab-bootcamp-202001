function registerUser(username, password, callback) {
    if (typeof name !== 'string') throw new TypeError('name ' + name + ' is not a string');
    if (!name.trim()) throw new Error('name is empty');
    if (typeof surname !== 'string') throw new TypeError('surname ' + surname + ' is not a string');
    if (!surname.trim()) throw new Error('surname is empty');
    if (typeof username !== 'string') throw new TypeError('username ' + username + ' is not a string');
    if (!username.trim()) throw new Error('username is empty');
    if (typeof password !== 'string') throw new TypeError('password ' + password + ' is not a string');
    if (!password.trim()) throw new Error('password is empty');

    call(`https://skylabcoders.herokuapp.com/api/v2/users`, {
        method: "PTCH",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({username, password})
    }, response =>{ 
        const content = JSON.parse(response.content)
        
        if (response instanceof Error) return callback(response)

        if(response.status !== 204) callback(new Error(content.error))

        if (response.status === 204) callback()
    })
}