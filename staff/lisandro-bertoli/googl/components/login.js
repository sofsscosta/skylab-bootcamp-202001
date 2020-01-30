'use strict';

function Login(props) {
    var login = document.createElement('form');
    login.classList.add('login');

    login.innerHTML = '<h2>Sign-in</h2>'
        .concat('<input class="login__input" type="text" name="username" placeholder="Username" required>')
        .concat('<input class="login__input" type="password" name="password" placeholder="Password" required>')
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


    return login;
}