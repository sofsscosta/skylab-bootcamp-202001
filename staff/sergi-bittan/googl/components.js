
function createSearch(selector, callback) {
  var search = document.querySelector(selector);
  search.addEventListener("submit", function(event) {
  event.preventDefault();

  var query = this.query.value;
  callback(query);
  });
  return search;
};
  
function createResults(selector, results) {
  
  var list = document.querySelector(selector);

  list.innerHTML = '';

  results.forEach(function (result) {
      var item = document.createElement('li');

      var title = document.createElement('h3');
      title.innerText = result.title;

      var link = document.createElement('a');
      link.target = '_blank';
      link.href = result.link;

      link.append(title);

      item.append(link);

      if (result.rating) {
          var rating = document.createElement('span');
          rating.innerText = result.rating;

          item.append(rating);
      }

      var description = document.createElement('p');
      description.innerText = result.description;

      item.append(description);

      list.append(item);
  });
}
  

function createLogin(selector, callback) {
  var login = document.querySelector(selector);
  
  login.addEventListener('submit', function(event) {
    event.preventDefault();
    
    var username = this.username.value;
    var password = this.password.value;
    
    callback(username, password);
  });
  return login;
}

var users = []
  
function createRegister(selector, callback) {
  var register = document.querySelector(selector);

  register.addEventListener('submit', function(event) {
    event.preventDefault();

    var user = {}

    user.name = this.name.value
    user.surname = this.surname.value
    user.username = this.username.value;
    user.password = this.password.value;

    if(!users.some(function(userSaved){ return userSaved.username === user.username})) {
      users.push(user)
    }
    callback()
  });
}
  
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
