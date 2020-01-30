
  



  

  
function createNavbar() {
  var nav_register = document.querySelector('.nav-register')
  var nav_login = document.querySelector('.nav-login')

  var register = document.querySelector('.register')
  var login = document.querySelector('.login')

  nav_register.addEventListener('click', function () {
    register.classList.remove('register--hide');
    login.classList.add('login--hide');

    reset()
  })

  nav_login.addEventListener('click', function () {
    login.classList.remove('login--hide');
    register.classList.add('register--hide');
  })

};
  
function reset() {
  var inputs = document.querySelectorAll('input')

  inputs.forEach(function(input) {
    input.value = ""
  })
}; 