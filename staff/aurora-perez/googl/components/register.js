'use strict'


function createRegister(idClass, onSubmit) {
    var register = document.querySelector('.'+idClass);

    register.addEventListener('submit', function(event) {
        event.preventDefault();
        
        var name = this.name.value;
        var surname = this.surname.value;
        var username = this.username.value;
        var password = this.password.value;

        onSubmit(name, surname, username, password);

    });

    register.toggle = function () {
      this.classList.toggle('register--hide');
    };

    return register;

}
 