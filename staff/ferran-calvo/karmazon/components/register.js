class Register extends Interactive {
    constructor({onSubmit, onToLogin}) {
        super(document.createElement('form'))

        var register = this.container

        register.classList.add('register')

        register.innerHTML = '<h2 class="form__title">Sign-up</h2>'
            .concat('<input class="input" type="text" name="name" placeholder="name">')
            .concat('<input class="input" type="text" name="surname" placeholder="surname">')
            .concat('<input class="input" type="text" name="username" placeholder="username">')
            .concat('<input class="input" type="password" name="password" placeholder="password">')
            .concat('<button class="button">Register</button>')
            .concat('<a class="link" href="">Click here to login</a>')


        register.addEventListener('submit', function (event) {
            event.preventDefault()

            var name = this.name.value
            var surname = this.surname.value
            var username = this.username.value
            var password = this.password.value

            onSubmit(name, surname, username, password)
        })

        var login = register.querySelector('a')

        login.addEventListener('click', event => {
            event.preventDefault()

            onToLogin()
        })
    }

    __locateFeedbackInContainer__(feedback) {
        var input = this.container.querySelector('input')
    
        this.container.insertBefore(feedback.container, input)
    }
}

