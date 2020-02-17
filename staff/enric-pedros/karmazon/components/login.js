class Login extends Interactive {
    constructor({ onSubmit, onToRegister }) {
        super(document.createElement('form'))

        const login = this.container

        login.classList.add('login');

        login.innerHTML = `<h2>COME IN</h2>
        <input type="text" name="username" placeholder="username">
        <input type="password" name="password" placeholder="password">
        <button>Login</button>
        <a href="">Register</a>`

        login.addEventListener('submit', function (event) {
            event.preventDefault();

            const username = this.username.value;
            const password = this.password.value;

            onSubmit(username, password);
        });

        const register = login.querySelector('a');

        register.addEventListener('click', event => {
            event.preventDefault();
            onToRegister();
        })
    }


    __locateFeedbackInContainer__ = function (feedback) {
        var button = this.container.querySelector('button'); //?

        this.container.insertBefore(feedback.container, button);
    }
}