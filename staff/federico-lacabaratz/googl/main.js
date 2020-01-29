'use strict';

var search1 = createSearch('.search', function(query) {

  googl(query, function(results) {
    createResults('.results', results)
  });
});

var search2 = createSearch('.search2', function(query) {

  ecosia(query, function(results) {
    createResults('.results2', results)
  });
});

var search3 = createSearch('.search3', function(query) {

  bing(query, function(results) {
    createResults('.results3', results)
  });
});

var search4 = createSearch('.search4', function(query) {

  yahoo(query, function(results) {
    createResults('.results4', results)
  });
}); 
  
var login = createLogin('.login', function(username, password) {
  
  var userFound = users.filter(function(user) {
      return username === user.username && password === user.password
  });

  if (userFound.length > 0) {
      search1.classList.toggle('search--hide');
      search2.classList.toggle('search2--hide');
      search3.classList.toggle('search3--hide');
      search4.classList.toggle('search4--hide');
      login.classList.toggle('login--hide');
      
      var nav = document.querySelector('.nav');
      nav.classList.toggle("nav--hide");
      
  } else alert('you cannot get in :P');
});

var users = [];

createRegister('.register', function(user) {
    
  var register = document.querySelector('.register');
  register.classList.add('register--hide');
  login.classList.toggle('login--hide');  

  if(!users.some(function(userSaved){ return userSaved.username === user.username})) {
    users.push(user);
  }
  
});
  
createNavbar();