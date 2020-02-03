class Register extends Interactive {
    constructor({ onSubmit, onToLogin}) {
        super(document.createElement('form'))

        const register = this.container

        register.classList.add('register')

        register.innerHTML = `<h2>Sign-up</h2>
            <input type="text" name="name" placeholder="name">
            <input type="text" name="surname" placeholder="surname">
            <input type="text" name="username" placeholder="username">
            <input type="password" name="password" placeholder="password">
            <button>Register</button>
            <a href="">Login</a>`


        register.addEventListener('submit', function (event) {
            event.preventDefault()

            const name = this.name.value
            const surname = this.surname.value
            const username = this.username.value
            const password = this.password.value

            onSubmit(name, surname, username, password)
        })

        const login = register.querySelector('a')

        login.addEventListener('click', event => {
            event.preventDefault()

            onToLogin()
        })
    }

    __locateFeedbackInContainer__(feedback) {
        const input = this.container.querySelector('input')

        this.container.insertBefore(feedback.container, input)
    }
}