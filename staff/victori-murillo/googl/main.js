"use strict"

var _login = createLogin('.login', function(username, password) {

  if( login(username, password) ) {
    
    _login.toggle();
    _googl.toggle()
    _ecosia.toggle()
    _bing.toggle()
    _yahoo.toggle()

  } else {
    alert('Wrong credentials, you cannot get in')
  }

},function () {
    _login.toggle();
    _register.toggle();
  });

var _register = createRegister('register', function(user) {

  try {
    register(user);
    // document.querySelector(".register")

    _register.toggle();
    _login.toggle();

  } catch (error) {
    alert(error.message)
  }

}, function() {
  _register.toggle();
  _login.toggle();
});


var _googl = createSearch('search', function(query) {
  googl(query, function(results) {
    createResults('.results', results)
  })
}) 

var _ecosia = createSearch('search-2', function (query) {
  ecosia(query, function (results) {
      createResults('.results-2', results);
  });
});

var _bing = createSearch('search-3', function (query) {
  bing(query, function (results) {
      createResults('.results-3', results);
  });
});

var _yahoo = createSearch('search-4', function (query) {
  bing(query, function (results) {
      createResults('.results-4', results);
  });
});