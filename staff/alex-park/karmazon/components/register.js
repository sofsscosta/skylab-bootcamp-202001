'use strict';

function Register(props) {
    var register = document.createElement('form');
    
    Interactive.call(this, register);

    register.classList.add('register');

    register.innerHTML = '<h2>Sign-up</h2>'
        .concat('<input type="text" name="name" placeholder="Name">')
        .concat('<input type="text" name="surname" placeholder="Surname">')
        .concat('<input type="text" name="username" placeholder="Username">')
        .concat('<input type="password" name="password" placeholder="Password">')
        .concat('<button>REGISTER</button>')
        .concat('<a href="">LOGIN</a>');


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

Register.prototype = Object.create(Interactive.prototype);
Register.prototype.constructor = Register;

Register.prototype.__locateFeedbackInContainer__ = function(feedback) {
    var input = this.container.querySelector('input'); //?

    this.container.insertBefore(feedback.container, input);
};