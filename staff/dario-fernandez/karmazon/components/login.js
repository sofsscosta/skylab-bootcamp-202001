class Login extends Interactive {
    constructor({ onSubmit, onToRegister }) {
        super(document.createElement('section'))

        const login = this.container
        
        login.classList.add('login')

        login.innerHTML = `<div class="login__container"><h3 class="login__title">Login</h3>
            <form class="login__form"><input type="text" class="login__input" name="username" placeholder="Username">
            <input type="password" class="login__input" name="password" placeholder="Password">
            <button type="submit" class="login__submit">Login</button></form>
            <p class="login__register-cta">Don\'t have an account yet?<br><a href="" class="login__cta-link">Sign up</a></p></div>`

        login.addEventListener('submit', function(event) {
            event.preventDefault()

            const username = this.querySelector('form').username.value
            const password = this.querySelector('form').password.value

            onSubmit(username, password)
        })

        const registerLink = login.querySelector('a')

        registerLink.addEventListener('click', event => {
            event.preventDefault()

            onToRegister() 
        })
        
    }

    __locateFeedbackInContainer__(feedback) {
        const button = this.container.querySelector('button')

        this.container.querySelector('form').insertBefore(feedback.container, button)
    }

    __removeFeedbackFromContainer__(feedback) {
        setTimeout(() => this.container.querySelector('form').removeChild(feedback.container), 3000)
    }
}