'use strict';

var login = createLogin('login', function (username, password) {
    var user = users.find(function (user) { return user.username === username; });

    if (user && user.password === password) {
        login.toggle();
        _googl.toggle();
        _ecosia.toggle();
        _bing.toggle();
        _yahoo.toggle();
    } else alert('Incorrect username/password, please try again.');
}, function () {
    login.toggle();
    _register.toggle();
});

var _register = createRegister('register', function (name, surname, username, password) {
    try {
        register(name, surname, username, password);
        _register.toggle();
        login.toggle();
    } catch (error) {
        alert(error.message);
    }
}, function (){
    _register.toggle();
    login.toggle();
});

var _googl = createSearch('search', function(query) {
    googl(query, function(results) {
        createResults('.results', results);
    });
});

var _ecosia = createSearch('search-2', function (query) {
    ecosia(query, function(results) {
        createResults('.results-2', results);
    });
});

var _bing = createSearch('search-3', function(query) {
    bing(query, function(results) {
        createResults('.results-3', results);
    });
});

var _yahoo = createSearch('search-4', function(query) {
    yahoo(query, function(results) {
        createResults('.results-4', results);
    });
});
// var search = createSearch('.search', function (query) {
//     googl(query, function (results) {
//         createResults('.results', results);
//     });
// });

// createSearch('.search-2', function (query) {
//     googl(query, function (results) {
//         createResults('.results-2', results);
//     });
// });

// createSearch('.search-3', function (query) {
//     googl(query, function (results) {
//         createResults('.results-3', results);
//     });
// });

// var login = createLogin('.login', function(username, password) { 
//     if (users.length > 0) {
//         for ( var i = 0; i < users.length; i++) {
//             var user = users[i];
//             if(user.username.includes(username) && password === user.password) {
//                 document.querySelector('.search').classList.remove('search--hide');
//                 login.classList.toggle('login--hide');
//                 return;
//             } else {
//                 alert("Error: incorrect user/pass, please try again.");
//                 document.querySelector('.buttonContent').classList.remove('buttonContent--hide');
//                 document.querySelector('.login').classList.toggle('login--hide');

//             }
//         }

//     } else {
//         alert('ERROR: Please register first.')
//         document.querySelector('.buttonContent').classList.remove('buttonContent--hide');
//         document.querySelector('.login').classList.toggle('login--hide');
//     }
// });

// var buttonContent = document.querySelector('div.buttonContent');
// var buttonLogin = document.querySelector('.buttonContent__login');
// var buttonSignin = document.querySelector('.buttonContent__signin');
// var registerTemplate = document.querySelector('.registerTemplate');

// buttonLogin.addEventListener('click', function () {
//     buttonContent.classList.toggle('buttonContent--hide');
//     document.getElementsByClassName("login")[0].classList.remove('login--hide');
// })

// buttonSignin.addEventListener('click', function () {
//     buttonContent.classList.toggle('buttonContent--hide');
//     document.getElementsByClassName("registerTemplate")[0].classList.remove('registerTemplate--hide');
// })

// var finishRegister = registerUser('.registerTemplate', function(user) {
//     if (user.name && user.surname && user.username && user.password) {
//         document.querySelector('.registerTemplate').classList.toggle('registerTemplate--hide');
//         document.querySelector('.buttonContent').classList.remove('buttonContent--hide');
//     }
// })

// document.querySelector('h1').addEventListener('click',function(){
//     location.reload();
// });

// document.querySelector('h1').addEventListener('click',gohome());
