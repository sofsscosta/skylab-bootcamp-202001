'use strict'

function Login(props) {
    var login = document.createElement('form')
    login.classList.add('login')

    login.innerHTML = '<h1 class="login__title">Googl</h1>'
        .concat('<input type="text" class="login__username" name="username">')
        .concat('<input type="password" class="login__password" name="password">')
        .concat('<button type="submit" class="login__submit">Login</button>')
        .concat('<a href="" class="login__register">Sign up</a>')


    login.addEventListener('submit', function(event) {
        event.preventDefault()

        var username = this.username.value
        var password = this.password.value

        props.onSubmit(username, password)
    })

    var registerLink = login.querySelector('a')

    registerLink.addEventListener('click', function(event) {
        event.preventDefault()

        props.onToRegister() 
    })

    return login
}