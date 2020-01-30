'use strict';

var IT = '🎈🤡🪓💀💩';

var _login = createLogin('login', function (username, password) {

  try {
        authenticate(username, password)
        _login.toggle();
        _googl.toggle();
        _ecosia.toggle();
        _bing.toggle();
        _yahoo.toggle();
       
  } catch (error) {
      alert(error.message + ' ' + IT);
  }
}, function () {
    _login.toggle();
    _register.toggle();
});

var _register = createRegister('register', function (name, surname, username, password) {
    try {
        register(name, surname, username, password);

        _register.toggle();
        _login.toggle();
    } catch (error) {
        alert(error.message + ' ' + IT);
    }
}, function () {
    _register.toggle();
    _login.toggle();
});

var _googl = createSearch('search', {
    onSubmit: function (query) {
    googl(query, function (results) {
        createResults('.results', results);
    });
}});

var _ecosia = createSearch('search-2', {
    onSubmit: function (query) {
    ecosia(query, function (results) {
        createResults('.results-2', results);
    });
}});

var _bing = createSearch('search-3', {
    onSubmit: function (query) {
    bing(query, function (results) {
        createResults('.results-3', results);
    });
}});

var _yahoo = createSearch('search-4', {
    onSubmit: function (query) {
    bing(query, function (results) {
        createResults('.results-4', results);
    });
}});
