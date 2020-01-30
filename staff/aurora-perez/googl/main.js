'use strict'


var login = createLogin('login', function(username, password) {

	var userFound = users.filter(function(user) {
		return username === user.username && password === user.password
	})

	if (userFound.length > 0) {
			login.toggle();
			_googl.toggle();
			_ecosia.toggle();
			_bing.toggle();
			_yahoo.toggle();
			var nav = document.querySelector('.nav');
			nav.classList.toggle("nav--hide")
		
	} else alert('Incorrect username or password');

});


var _register = createRegister('register', function(name, surname, username, password) {
		try {debugger
			register(name, surname, username, password)

			_register.toggle();
			login.toggle();
		} catch (error) {
			alert (error.message + ' :P');
		}
	
// },function () {
// 		_register.toggle();
// 		login.toggle();

})

createNavbar()


var _googl = createSearch('search', function (query) {
		googl(query, function (results) {
				createResults('.results', results);
		});
});

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

		 // if(!users.some(u => u.username === user.username)) {
			//   users.push(user)

			//   callback()

			// }else {
			//     alert ('Username is already taken');
			// }