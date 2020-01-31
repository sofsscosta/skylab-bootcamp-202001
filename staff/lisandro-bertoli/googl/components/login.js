'use strict';

function Login(props) {
    var login = document.createElement('form');

    Interactive.call(this, login);

    login.classList.add('login');


    login.innerHTML = '<h2>Sign-in</h2>'
        .concat('<input class="login__input" type="text" name="username" placeholder="Username">')
        .concat('<input class="login__input" type="password" name="password" placeholder="Password">')
        .concat('<button class="button button--correct">Login</button>')
        .concat('<a class="link link__register" href="#">Register</a>');

    login.addEventListener('submit', function (event) {
        event.preventDefault();

        var username = this.username.value;
        var password = this.password.value;

        props.onSubmit(username, password);
    });

    var registerLink = login.querySelector('a.link__register');

    registerLink.addEventListener('click', function (event) {
        event.preventDefault();

        props.onToRegister();
    });

}

Login.prototype = Object.create(Interactive.prototype);
Login.prototype.constructor = Login;

Login.prototype.__locateFeedbackContainer__ = function (feedback) {
    var button = this.container.querySelector('button');

    this.container.insertBefore(feedback.container, button);
}