'use strict'

function createRegister(selector, props) {
    var register = document.querySelector(selector)

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

        props.onLoginClick()
    })
    return register
}