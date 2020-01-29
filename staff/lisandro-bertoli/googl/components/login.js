'use strict';

function createLogin(idClass, onSubmit, onToRegister) {
    var login = document.querySelector('.' + idClass);

    login.addEventListener('submit', function (event) {
        event.preventDefault();

        var username = this.username.value;
        var password = this.password.value;

        onSubmit(username, password);
    });

    login.toggle = function () {
        login.classList.toggle('login--hide');
    }

    var registerLink = document.querySelector('a.link__register');

    registerLink.addEventListener('click', function (event) {
        event.preventDefault();

        onToRegister();
    });


    return login;
}