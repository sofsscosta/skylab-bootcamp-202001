'use strict'

function createLogin(props) {   
    var login = document.createElement('form');

    login.classList.add('login');
    
     login.innerHTML = '<input type="text" name="username">'
     .concat('<input type="password" name="password">')
     .concat('<button type="submit"></button>')
     .concat('<a class="toregister" href="#">Registrate</a>')        
    
    login.addEventListener('submit', function(event) {
        event.preventDefault();

        var username = this.username.value;
        var password = this.password.value;

        props.onSubmit(username, password);
    });

    var link = document.querySelector('.toregister')
    link.addEventListener('click', function(event){
        event.preventDefault();

        props.onToRegister();
    })
    return login;
}
