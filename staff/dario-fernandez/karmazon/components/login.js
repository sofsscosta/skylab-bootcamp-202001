'use strict'

function Login(props) {
    var login = document.createElement('section')

    Interactive.call(this, login)
    
    login.classList.add('login')

    login.innerHTML = '<div class="login__container"><h3 class="login__title">Login</h3>'
        .concat('<form class="login__form"><input type="text" class="login__input" name="username" placeholder="Username">')
        .concat('<input type="password" class="login__input" name="password" placeholder="Password">')
        .concat('<button type="submit" class="login__submit">Login</button></form>')
        .concat('<p class="login__register-cta">Don\'t have an account yet?<br><a href="" class="login__cta-link">Sign up</a></p></div>')

    login.addEventListener('submit', function(event) {
        event.preventDefault()

        var username = this.querySelector('form').username.value
        var password = this.querySelector('form').password.value

        props.onSubmit(username, password)
    })

    var registerLink = login.querySelector('a')

    registerLink.addEventListener('click', function(event) {
        event.preventDefault()

        props.onToRegister() 
    })
    
}

Login.prototype = Object.create(Interactive.prototype)
Login.prototype.constructor = Login

Login.prototype.__locateFeedbackInContainer__ = function(feedback) {
    var button = this.container.querySelector('button')

    this.container.querySelector('form').insertBefore(feedback.container, button)
}

Login.prototype.__removeFeedbackFromContainer__ = function(feedback) {
    setTimeout(function() {
        this.querySelector('form').removeChild(feedback.container)
    }.bind(this.container), 3000)
}