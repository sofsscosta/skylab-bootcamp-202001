class Login extends Interactive {
    constructor({onSubmit, onToRegister}) {
        super(document.createElement('form'))

        const login = this.container

        login.classList.add('login')

        login.innerHTML = '<h2 class="form__title">Sign-in</h2>'
            .concat('<input class="input" type="text" name="username" placeholder="username">')
            .concat('<input class="input" type="password" name="password" placeholder="password">')
            .concat('<button class="button">Login</button>')
            .concat('<a class="link" href="">Click here to register</a>')

        login.addEventListener('submit', function(event) {
            event.preventDefault()

            const username = this.username.value
            const password = this.password.value

            onSubmit(username, password)
        })

        const register = login.querySelector('a')

        register.addEventListener('click', event => {
            event.preventDefault()
            onToRegister()
        })
           
    }
    __locateFeedbackInContainer__(feedback) {
        const button = this.container.querySelector('button')
    
        this.container.insertBefore(feedback.container, button)
    }
}
