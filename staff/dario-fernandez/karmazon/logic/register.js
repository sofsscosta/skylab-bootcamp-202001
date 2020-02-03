function register(user) {
    const userExist = users.some(element => user.username === element.username)

    if(userExist) {
        throw new Error('Username in use')
    } else {
        users.push(user)
    }
}