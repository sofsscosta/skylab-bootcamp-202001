'use strict'

function Register(props) {
    var register = document.createElement('section')
    register.classList.add('register')

    Interactive.call(this, register)

    register.innerHTML = '<div class="register__container"><h1 class="register__title">Sign up</h1>'
        .concat('<form class="register__form"><input type="text" name="name" class="register__input" placeholder="Name">')
        .concat('<input type="text" name="surname" class="register__input" placeholder="Surname">')
        .concat('<input type="text" name="username" class="register__input" placeholder="Username">')
        .concat('<input type="password" name="password" class="register__input" placeholder="Password">')
        .concat('<button class="register__submit" type="submit">Sign up</button></form>')
        .concat('<p class="register__cta">Do you have an account yet?<br><a href="" class="register__cta-link">Login</a></p></div>')

    register.addEventListener('submit', function(event) {
        event.preventDefault()

        var username = this.querySelector('form').username.value
        var password = this.querySelector('form').password.value
        
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

Register.prototype = Object.create(Interactive.prototype)
Register.prototype.constructor = Register

Register.prototype.__locateFeedbackInContainer__ = function(feedback) {
    var button = this.container.querySelector('button')

    this.container.querySelector('form').insertBefore(feedback.container, button)
}

Register.prototype.__removeFeedbackFromContainer__ = function(feedback) {
    setTimeout(function() {
        this.querySelector('form').removeChild(feedback.container)
    }.bind(this.container), 3000)
}