'use strict'

function createLogin(idClass, onSubmit, onToRegister) {
    var login = document.querySelector('.' + idClass);

    login.addEventListener('submit', function(event) {
        event.preventDefault();

        var username = this.username.value;
        var password = this.password.value;

        onSubmit(username, password);
    });

    login.toggle = function () {
        this.classList.toggle('login--hide');
    };

    var buttonLogin = document.querySelector('.buttonContent__login');

    buttonLogin.addEventListener('click', function (event) {
        event.preventDefault();
        // buttonContent.classList.toggle('buttonContent--hide');
        // document.getElementsByClassName("login")[0].classList.remove('login--hide');

    onToRegister();
});
    return login;
}