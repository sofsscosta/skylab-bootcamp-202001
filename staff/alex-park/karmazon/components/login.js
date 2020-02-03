class Login extends Interactive {
    constructor({ onSubmit, onToRegister}) {
        super(document.createElement('form'))
        const login = this.container

        login.classList.add('login')

        login.innerHTML = `<h2>SIGN-IN</h2>
            <input type="text" name="username" placeholder="Username">
            <input type="password" name="password" placeholder="Password">
            <button>LOGIN</button>
            <a href="">REGISTER</a>`

        login.addEventListener('submit', function (event) {
            event.preventDefault()

            const username = this.username.value
            const password = this.password.value

            onSubmit(username, password)
        })

        const register = login.querySelector('a')

        register.addEventListener('click', (event) => {
            event.preventDefault()

            onToRegister()
        })
    }

    __locateFeedbackInContainer__(feedback) {
        const button = this.container.querySelector('button')
        this.container.insertBefore(feedback.container, button)
    }
}