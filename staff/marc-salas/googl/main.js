var user = [];

var reg = createRegister('.register', function(name,surName,userName,password){
    var person = {}
    person.name = name;
    person.userName = userName;
    person.surName = surName;
    person.password = password;
    if (person.name.length > 0 && person.surName.length > 0 && person.userName.length > 0 && person.password.length > 0 ){
        user.push(person);
        register.classList.toggle('register--hide');
        login.classList.toggle('login--hide');
    }else {
        alert('Completa todos los campos!')
    };

});

var login = createLogin('.login', function(username, password) {
    if (username === 'pepito' && password === '123') {
        search.classList.toggle('search--hide');
        login.classList.toggle('login--hide');
    } else alert('you cannot get in :P');
});




var from = document.querySelector('form');

from.addEventListener('submit', function(event){
    event.preventDefault();

    var query = this.query.value;
    
    var ul = document.createElement('ul');
    googl(query, function(results){
        for (var i =0; i < results.length; i++){
            var result = results[i];
            var li = document.createElement('li');
            var h3 = document.createElement('h3');
            var p = document.createElement('p');
            p.innerHTML = result.description;
            h3.innerHTML = result.title;
            li.append(h3,p);
            ul.append(li)
        }
    });
    var main = document.querySelector('#main');
    main.innerHTML = " ";
    main.append(ul);
});

