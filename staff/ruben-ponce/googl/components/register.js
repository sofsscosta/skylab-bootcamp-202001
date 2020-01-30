'use strict'

var IT = '🎈🤡';

function registerUser(idClass, onSubmit, onToLogin) {
    var register = document.querySelector('.' + idClass);

    register.addEventListener('submit', function(event) {
        event.preventDefault();

        user.name = this.name.value;
        user.surname = this.surname.value;
        user.username = this.username.value;
        user.password = this.password.value;

        // users.push(user);

        onSubmit(name,surname,username,password);
    }); 

    register.toggle = function () {
        this.classList.toggle('registerTemplate');
    }

    var login = register.querySelector('a');

    login.addEventListener('click', function(event) {
        event.preventDefault();

        onToLogin();
    });

    return register;
}