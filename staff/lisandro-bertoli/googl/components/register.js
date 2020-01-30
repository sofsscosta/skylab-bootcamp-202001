'use strict';

function Register(props) {
    var register = document.createElement('form');
    register.classList.add('register');

    register.innerHTML = '<h2>Sign-up</h2>'
        .concat('<input class="register__input" name="name" type="text" placeholder="Name" required></input>')
        .concat('<input class="register__input" name="surname" type="text" placeholder="Surname" required>')
        .concat('<input class="register__input" name="username" type="text" placeholder="Username" required>')
        .concat('<input class="register__input" name="password" type="password" placeholder="Password" required>')
        .concat('<button class="button button--correct">Register</button>')
        .concat('<a class="link link__login" href="#">Sign-in</a>')

    register.addEventListener('submit', function (event) {
        event.preventDefault();

        var name = this.name.value;
        var surname = this.surname.value;
        var username = this.username.value;
        var password = this.password.value;

        props.onSubmit(name, surname, username, password);
    });

    var loginLink = register.querySelector('a.link__login');

    loginLink.addEventListener('click', function (event) {
        event.preventDefault();

        props.onToLogin();
    });

    return register;
}