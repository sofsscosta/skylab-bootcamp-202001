"use strict";

function createRegister(idClass, onSubmit, onToLogin) {

  var register = document.querySelector("." + idClass);

  register.addEventListener('submit', function(event) {
      event.preventDefault();

      var user = {};

      user.name = this.name.value;
      user.surname = this.surname.value;
      user.username = this.username.value;
      user.password = this.password.value;

      onSubmit(user);
  });

  register.toggle = function() {
    this.classList.toggle("register--hide")
  }

  var login = register.querySelector('a');

  login.addEventListener("click", function(event) {
    event.preventDefault() // This prevent is cause we are inside the form???

    onToLogin();
  })

  return register
}