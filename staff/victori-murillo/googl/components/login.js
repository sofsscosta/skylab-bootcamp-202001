"use strict"
function createLogin(selector, onSubmit, onToRegister) {
  var login = document.querySelector(selector);

  login.addEventListener('submit', function(event) {
      event.preventDefault();

      var username = this.username.value;
      var password = this.password.value;

      onSubmit(username, password);
  });

  login.toggle = function() {
    this.classList.toggle("register--hide")
  }

  var register = login.querySelector('a')

  register.addEventListener('click', function() {
    event.preventDefault();

    onToRegister()
  })

  return login;
}