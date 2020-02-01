'use strict';

function Register(props) {
    var register = document.createElement('form');

    Interactive.call(this, register);

    register.classList.add('register');

    register.innerHTML = "<p>Sign-up</p>" 
        .concat('<input type="text" autocomplete="off" name="name" placeholder="Name" required>')
        .concat('<input type="text" autocomplete="off" name="surname" placeholder="Surname" required>')
        .concat('<input type="text" autocomplete="off" name="username" placeholder="User name" required>')
        .concat('<input type="password" autocomplete="off" name="password" placeholder="Password" required>')
        .concat('<button type="submit">Submit</button>')
        .concat('<a href="">Login</a>');

    register.addEventListener('submit', function(event) {
        event.preventDefault();

        var name = this.name.value;
        var surname = this.surname.value;
        var username = this.username.value;
        var password = this.password.value;

        props.onSubmit(name, surname, username, password);
    });
    
    var login = register.querySelector('a');

    login.addEventListener('click', function(event) {
        event.preventDefault();

        props.onToLogin();
    }); 
}

Register.prototype = Object.create(Interactive.prototype);
Register.prototype.constructor = Register;

Register.prototype.__locateFeedbackInContainer__ = function(feedback) {
    var input = this.container.querySelector('input');

    this.container.insertBefore(feedback.container, input);
};