function createNavbar() { 
  var nav_register = document.querySelector('.nav__register')
  var nav_login = document.querySelector('.nav__login')

  var register = document.querySelector('.register')
  var login = document.querySelector('.login')

  nav_register.addEventListener('click', function () {
    register.classList.toggle('register--hide');
    login.classList.toggle('login--hide');

    reset()
  })

  nav_login.addEventListener('click', function () {
    register.classList.toggle('register--hide');
    login.classList.toggle('login--hide');
  })

}