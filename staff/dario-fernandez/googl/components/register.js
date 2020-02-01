'use strict'

function Register(props) {
    var register = document.createElement('form')
    register.classList.add('register')

    this.container = register

    register.innerHTML = '<h1 class="register__title">Googl</h1>'
        .concat('<input type="text" name="name" class="register__name">')
        .concat('<input type="text" name="surname" class="register__surname">')
        .concat('<input type="text" name="username" class="register__username">')
        .concat('<input type="password" name="password" class="register__password">')
        .concat('<button class="register__submit" type="submit">Sign up</button>')
        .concat('<a href="" class="register__login">Login</a>')

    register.addEventListener('submit', function(event) {
        event.preventDefault()

        var username = this.username.value
        var password = this.password.value
        
        var user = {
            username: username,
            password: password
        }

        props.onSubmit(user)
    })

    register.toggle = function() {
        this.classList.toggle('register--hide')
    }

    var loginLink = register.querySelector('a')

    loginLink.addEventListener('click', function(event) {
        event.preventDefault()

        props.onToLogin()
    })
}

Register.prototype.showError = function(error) {
    var feedback = Feedback({ level: 'error', message: error })

    var button = this.container.querySelector('button')

    this.container.insertBefore(feedback, button)

    setTimeout(function() {
        this.removeChild(feedback)
    }.bind(this.container), 3000)
}