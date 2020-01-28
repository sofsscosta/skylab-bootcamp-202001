var users = []; // ej: user => { name, surname, username, password }

var search = createSearch('.search', function (query) {
    googl(query, function (results) {
        createResults('.results', results);
    });
});

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

var login = createLogin('.login', function(username, password) { 
    if (users.length > 0) {
        if (username === users[0].username && password === users[0].password) {
            search.classList.toggle('search--hide');
            login.classList.toggle('login--hide');
        } else alert('you cannot get in :P');

    } else {
        alert('please register first')
    }
});

var buttonContent = document.querySelector('div.buttonContent');
var buttonLogin = document.querySelector('.buttonContent__login');
var buttonSignin = document.querySelector('.buttonContent__signin');
var registerTemplate = document.querySelector('.registerTemplate');

buttonLogin.addEventListener('click', function () {
    buttonContent.classList.toggle('buttonContent--hide');
    document.getElementsByClassName("login")[0].classList.remove('login--hide');
})

buttonSignin.addEventListener('click', function () {
    buttonContent.classList.toggle('buttonContent--hide');
    document.getElementsByClassName("registerTemplate")[0].classList.remove('registerTemplate--hide');
})

var finishRegister = registerUser('.registerTemplate', function(user) {
    if (user.name && user.surname && user.username && user.password) {
        document.querySelector('.registerTemplate').classList.toggle('registerTemplate--hide');
        document.querySelector('.login').classList.remove('login--hide');
    } else {
        alert("Alerta: eres subnormal");
    }
})

var home = document.querySelector('h1');

home.addEventListener('click', function () {
    location.reload();
})