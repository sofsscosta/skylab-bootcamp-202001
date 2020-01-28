// var form = document.querySelector("form");

// var container = document.createElement("div");




// form.addEventListener("submit", function (event) {
//     event.preventDefault();
//     var child = container.lastElementChild;
//     while (child) {
//         container.removeChild(child);
//         child = container.lastElementChild;
//     }

//     var ul = document.createElement("ul");

//     container.appendChild(ul);


//     var query = this.query.value;

//     googl(query, function (results) {

//         results.forEach(function (result) {
//             var li = document.createElement("li");
//             var h3 = document.createElement("h3");
//             var p = document.createElement("p");

//             var title = document.createTextNode(result.title);
//             var description = document.createTextNode(result.description);

//             h3.appendChild(title);
//             p.appendChild(description)

//             ul.appendChild(li).appendChild(h3).appendChild(p);

//         });

//     });

//     form.insertAdjacentElement('afterend', ul)
// });

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

var login = createLogin('.login', function (username, password) {

    var user = users.filter(function (user) {
        return user.username === username && user.password === password;
    })

    if (user.length === 1) {
        search.classList.toggle('search--hide');
        login.classList.toggle('login--hide');
    } else alert('you cannot get in :P');
});

function createUser(name, surname, username, password) {
    if (name && surname && username && password) {
        var newUser = {
            name: name,
            surname: surname,
            username: username,
            password: password
        }
        users.push(newUser);
        return newUser;
    }
    alert('You must complete all the fields');

    return false;
}


var register = createRegister('.register', function (name, surname, username, password) {

    var newUser = createUser(name, surname, username, password);
    if (newUser) {
        register.classList.toggle('register--hide');
        login.classList.toggle('login--hide');

    }

});

toggleForm('.login__link', '.register', '.login');
toggleForm('.register__link', '.register', '.login');
toggleForm('.logout__link', '.search', '.login')
