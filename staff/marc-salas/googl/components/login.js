'use strict'

function createLogin(props) {
    var login = document.createElement('form');
    login.classList.add('login');

    login.innerHTML = '<h2>' + props.title + '</h2>'
        .concat('<input type="text" name="username">')
        .concat('<input type="password" name="password">')
        .concat('<button type="submit">Login</button>')
        .concat('<a class="toregister" href="#">Registrate</a>')

    login.addEventListener('submit', function (event) {
        event.preventDefault();

        var username = this.username.value;
        var password = this.password.value;

        props.onSubmit(username, password);
    });

    var register = login.querySelector('a');

    register.addEventListener('click', function (event) {
        event.preventDefault();

        props.onToRegister();
    })
    return login;
}
