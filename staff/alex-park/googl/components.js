function createSearch(selector, callback) {
    var search = document.querySelector(selector);

    // search.onsubmit = function (event) {
    search.addEventListener('submit', function (event) {
        event.preventDefault();

        var query = this.query.value;

        callback(query);
        // };
    });

    return search;
}

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

function registerUser(selector, callback) {
    var register = document.querySelector(selector);

    register.addEventListener('submit', function(event) {
        event.preventDefault();

        var user = {};

        user.name = this.name.value;
        user.surname = this.surname.value;
        user.username = this.username.value;
        user.password = this.password.value;

        users.push(user);

        callback(user);
    }); 

    return register;
}




// function home () {
//     document.querySelector('.buttonContent').classList.remove('buttonContent--hide');
//     document.querySelector('.login').setAttribute('class', 'login--hide');
//     document.querySelector('.registerTemplate').setAttribute('class', 'registerTemplate--hide');
//     document.querySelector('.search').setAttribute('class', 'search--hide');
// }

// function gohome() {
//     window.location.href="../googl/template.html"
// }