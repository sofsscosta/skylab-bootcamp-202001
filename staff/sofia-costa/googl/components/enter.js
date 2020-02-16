function enter (selector) {

    var enter = document.querySelector(selector)
    var enterRegister = enter.register
    var enterLogin = enter.login
    var login = document.querySelector('.login')
    var register = document.querySelector('.register')

    enterRegister.addEventListener('click', function(event) {
        event.preventDefault()
        enter.classList.toggle('enter--hide')
        register.classList.toggle('register--hide')
    })

    enterLogin.addEventListener('click', function(event) {
        event.preventDefault()
        enter.classList.toggle('enter--hide')
        login.classList.toggle('login--hide')

    })  
}