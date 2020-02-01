'use strict';

function Register(props) {
    var register = document.createElement('form');
    
    this.container = register;

    register.classList.add('register');

    register.innerHTML = '<h2>Sign-up</h2>'
        .concat('<input type="text" name="name" placeholder="name">')
        .concat('<input type="text" name="surname" placeholder="surname">')
        .concat('<input type="text" name="username" placeholder="username">')
        .concat('<input type="password" name="password" placeholder="password">')
        .concat('<button>Register</button>')
        .concat('<a href="">Login</a>');


    register.addEventListener('submit', function (event) {
        event.preventDefault();

        var name = this.name.value;
        var surname = this.surname.value;
        var username = this.username.value;
        var password = this.password.value;

        props.onSubmit(name, surname, username, password);
    });

    var login = register.querySelector('a');

    login.addEventListener('click', function (event) {
        event.preventDefault();

        props.onToLogin();
    });
}

Register.prototype.showError = function (error) {
    var feedback = Feedback({ level: 'error', message: error });

    var button = this.container.querySelector('button');

    this.container.insertBefore(feedback, button);

    setTimeout(function() {
        this.removeChild(feedback);
    }.bind(this.container), 3000);
};