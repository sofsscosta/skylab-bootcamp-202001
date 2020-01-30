'use strict'

function createLogin(idClass, props) {   
    var login = document.querySelector("." + idClass);
    login.addEventListener('submit', function(event) {
        event.preventDefault();

        var username = this.username.value;
        var password = this.password.value;

        props.onSubmit(username, password);
    });
    login.toggle = function(){
        this.classList.toggle('login--hide');
    }
    var link = document.querySelector('.toregister')
    link.addEventListener('click', function(){
        props.onToRegister();
    })
    return login;
}
