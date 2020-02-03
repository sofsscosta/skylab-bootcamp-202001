class Register extends Interactive {
    constructor({ onSubmit, onToLogin }) {
        super(document.createElement('section'))
        var register = this.container
        register.classList.add('register')

        register.innerHTML = `<div class="register__container"><h1 class="register__title">Sign up</h1>
            <form class="register__form"><input type="text" name="name" class="register__input" placeholder="Name">
            <input type="text" name="surname" class="register__input" placeholder="Surname">
            <input type="text" name="username" class="register__input" placeholder="Username">
            <input type="password" name="password" class="register__input" placeholder="Password">
            <button class="register__submit" type="submit">Sign up</button></form>
            <p class="register__cta">Do you have an account yet?<br><a href="" class="register__cta-link">Login</a></p></div>`

        register.addEventListener('submit', function(event) {
            event.preventDefault()

            const username = this.querySelector('form').username.value
            const password = this.querySelector('form').password.value
            
            const user = {
                username: username,
                password: password
            }

            onSubmit(user)
        })

        register.toggle = function() {
            this.classList.toggle('register--hide')
        }

        const loginLink = register.querySelector('a')

        loginLink.addEventListener('click', event => {
            event.preventDefault()

            onToLogin()
        })
    }

    __locateFeedbackInContainer__(feedback) {
        var button = this.container.querySelector('button')

        this.container.querySelector('form').insertBefore(feedback.container, button)
    }

    __removeFeedbackFromContainer__(feedback) {
        setTimeout(() => this.container.querySelector('form').removeChild(feedback.container), 3000)
    }
}
