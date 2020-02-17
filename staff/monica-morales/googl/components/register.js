'use strict';

function Register(props) {
    var register = document.createElement('form');
    register.classList.add('register');

    register.innerHTML = '<input type="text" name="name" placeholder="name" required><br><br>'
        .concat('<input type="text" name="surname" placeholder="surname" required><br><br>')
        .concat('<input type="text" name="username" placeholder="username" required><br><br>')
        .concat('<input type="text" name="password" placeholder="password" required><br><br>')
        .concat('<button type="submit">Register</button><br>')
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

    return register;
}