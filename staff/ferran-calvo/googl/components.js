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
    return list;
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

function createRegister(selector, callback){
    var registerForm = document.querySelector(selector);
    // var name = registerForm.name;
    // var surname = registerForm.surname;
    // var username = registerForm.username;
    // var password = registerForm.password;
    registerForm.addEventListener('submit', function(e){
        e.preventDefault();
        // name=name.value;
        // username=this.username.value;
        // surname=surname.value;
        // password=this.password.value;
        var user= {
            name: this.name.value,
            surname: this.surname.value,
            username: this.username.value,
            password: this.password.value
            
        }
        users.push(user)
        callback();
    
    })
    return registerForm;
}

