'use strict'

var IT = '🎈🤡';

function createRegister(selector, props) {
    var register = document.querySelector(selector);

    register.addEventListener('submit', function(event) {
        event.preventDefault();

        user.name = this.name.value;
        user.surname = this.surname.value;
        user.username = this.username.value;
        user.password = this.password.value;

        // users.push(user);

        props.onSubmit(name,surname,username,password);
    }); 

    register.toggle = function () {
        this.classList.toggle('register--hide');
    }

    var login = register.querySelector('a');

    login.addEventListener('click', function(event) {
        event.preventDefault();

        props.onToLogin();
    });

    return register;
}