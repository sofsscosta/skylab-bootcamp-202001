'use strict';

function Register(props) {
    var register = document.createElement('form');
    register.classList.add('register');

    register.innerHTML = '<h2>Sign-up</h2>'
        .concat('<input type="text" name="name" placeholder="name">')
        .concat('<input type="text" name="surname" placeholder="surname">')
        .concat('<input type="text" name="username" placeholder="username">')
        .concat('<input type="password" name="password" placeholder="password">')
        .concat('<button>Register</button>')
        .concat('<a href="">Login</a>');


    register.addEventListener('submit', function (event) {
        event.preventDefault();

        var name = this.name.value;
        var surname = this.surname.value;
        var username = this.username.value;
        var password = this.password.value;

        props.onSubmit(name, surname, username, password);
    });

    register.showError = function(error) {
        // OPTION 1 reusing the same feedback
        
        // var feedback = this.querySelector('.feedback');

        // if (feedback) {
        //     feedback.showMessage(error);
        // } else {
        //     var feedback = Feedback({ level: 'error', message: error});
    
        //     var button = this.querySelector('button');
    
        //     this.insertBefore(feedback, button);
        // }

        // OPTION 2 special effects Abdou © 2020 👌

        var feedback = Feedback({ level: 'error', message: error });

        var button = this.querySelector('button');

        this.insertBefore(feedback, button);

        setTimeout(function() {
            this.removeChild(feedback);
        }.bind(this), 3000);
    };

    var login = register.querySelector('a');

    login.addEventListener('click', function (event) {
        event.preventDefault();

        props.onToLogin();
    });

    return register;
}