'use strict';

function Login(props) {
    var login = document.createElement('form');

    Interactive.call(this, login);

    login.classList.add('login');

    login.innerHTML = '<h2>SIGN-IN</h2>'
        .concat('<input type="text" name="username" placeholder="Username">')
        .concat('<input type="password" name="password" placeholder="Password">')
        .concat('<button>LOGIN</button>')
        .concat('<a href="">REGISTER</a>');

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
    });
}

Login.prototype = Object.create(Interactive.prototype);
Login.prototype.constructor = Login;

Login.prototype.__locateFeedbackInContainer__ = function(feedback) {
    var button = this.container.querySelector('button'); //?

    this.container.insertBefore(feedback.container, button);
};