'use strict'

function createRegister(idClass, props) {
    var register = document.querySelector("." + idClass)
    
    register.addEventListener('submit', function(event) {
        event.preventDefault();

        var name = this.name.value;
        var surName = this.surname.value;
        var userName = this.username.value;
        var password = this.password.value;

        props.onSubmit(name, surName, userName, password);
    });
    register.toggle = function(){
        this.classList.toggle('register--hide')
    }

    var link = document.querySelector('.tologin');
    link.addEventListener('click', function(event){
        event.preventDefault(); 

        props.onToLogin();

    })
    return register;
}