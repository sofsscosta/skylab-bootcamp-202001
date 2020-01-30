'use strict';

function createRegister(selector, props) {
    var register = document.querySelector(selector);

    register.addEventListener('submit', function(event) {
        event.preventDefault();

        var name = this.name.value;
        var surname = this.surname.value;
        var username = this.username.value;
        var password = this.password.value;
        
        props.onSubmit(name, surname, username, password);
        this.name.value = '';
        this.surname.value = '';
        this.username.value = '';
        this.password.value = '';
    });

    register.toggle = function() {
        this.classList.toggle('register--hide');
    };

    var login = register.querySelector('a');

    login.addEventListener('click', function(event) {
        event.preventDefault();

        props.onToLogin();
    });

    return register;
};