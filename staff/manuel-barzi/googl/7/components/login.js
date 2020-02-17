'use strict';

function Login(props) {
    var login = document.createElement('form');

    this.container = login;

    login.classList.add('login');

    login.innerHTML = '<h2>Sign-in</h2>'
        .concat('<input type="text" name="username" placeholder="username">')
        .concat('<input type="password" name="password" placeholder="password">')
        .concat('<button>Login</button>')
        .concat('<a href="">Register</a>');

    login.addEventListener('submit', function (event) {
        event.preventDefault();

        var username = this.username.value;
        var password = this.password.value;

        props.onSubmit(username, password);
    });

    var register = login.querySelector('a');

    register.addEventListener('click', function (event) {
        event.preventDefault();

        props.onToRegister();
    });
}

Login.prototype.showError = function (error) {
    var feedback = Feedback({ level: 'error', message: error });

    var button = this.container.querySelector('button');

    this.container.insertBefore(feedback, button);

    setTimeout(function() {
        this.removeChild(feedback);
    }.bind(this.container), 3000);
};