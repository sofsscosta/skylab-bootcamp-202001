'use strict'

function createLogin(idClass, onSubmit, onToRegister) {   
    var login = document.querySelector("." + idClass);
    login.addEventListener('submit', function(event) {
        event.preventDefault();

        var username = this.username.value;
        var password = this.password.value;

        onSubmit(username, password);
    });
    login.toggle = function(){
        this.classList.toggle('login--hide');
    }
    var link = document.querySelector('.toregister')
    link.addEventListener('click', function(){
        onToRegister();
    })
    return login;
}
