class Register extends Interactive {
    constructor({ onSubmit, onToLogin }) {
        super(document.createElement('form'))

        var register = this.container


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

            var name = this.name.value
            var surname = this.surname.value
            var username = this.username.value
            var password = this.password.value

            onSubmit(name, surname, username, password)
        })

        var login = register.querySelector('a')

        login.addEventListener('click', function (event) {
            event.preventDefault()

            onToLogin()
        })
    }
    __locateFeedbackInContainer__(feedback) {
        var input = this.container.querySelector('input') //?

        this.container.insertBefore(feedback.container, input)
    }
}