class Login extends Interactive {

    constructor({onSubmit, onToRegister}) {
        super(document.createElement('form'))
        var login = this.container

        login.classList.add('login')
    
        login.innerHTML = `<h2>Sign-in</h2>
            <input type="text" name="username" placeholder="username">
            <input type="password" name="password" placeholder="password">
            <button>Login</button>
            <a href="">Register</a>`
    
        login.addEventListener('submit', function (event) {
            event.preventDefault()
    
            var username = this.username.value
            var password = this.password.value
    
            onSubmit(username, password)
        })
    
        var register = login.querySelector('a')
    
        register.addEventListener('click', function (event) {
            event.preventDefault()
    
            onToRegister()
        })
    }

    __locateFeedbackInContainer__(feedback) {
        var button = this.container.querySelector('button')
        this.container.insertBefore(feedback.container, button)
    }
    
}
