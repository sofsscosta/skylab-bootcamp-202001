'use strict'

function createRegister(props) {
    var register = document.createElement('form');

    register.classList.add('register');

    register.innerHTML = '<h2>' + props.title + '</h2>'
    .concat('<input type="text" name="name">')
    .concat('<input type="text" name="surname">')
    .concat('<input type="text" name="username">')
    .concat('<input type="password" name="password">')
    .concat('<button type="submit">Register</button>')
    .concat('<a class="tologin" href="#">Logeate si ya estas registrado</a>');    
    
    register.addEventListener('submit', function(event) {
        event.preventDefault();

        var name = this.name.value;
        var surName = this.surname.value;
        var userName = this.username.value;
        var password = this.password.value;

        props.onSubmit(name, surName, userName, password);
    });

    var logeon = register.querySelector('a');

    logeon.addEventListener('click', function(event){
        event.preventDefault(); 

        props.onToLogin();

    })
    return register;
}