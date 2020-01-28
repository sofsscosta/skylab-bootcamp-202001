var users = []; // ej: user => { name, surname, username, password }
var search = createSearch('.search', function (query) {
    googl(query, function (results) {
        createResults('.results', results);
    });
});
var login = createLogin('.login', function(username, password) {
    var user = users.filter(function(element){
        return element.username === username && element.password === password;
    });
    if (user.length === 1) {
        search.classList.toggle('search--hide');
        login.classList.toggle('login--hide');
    } else alert('you cannot get in :P');
});
var register = createRegiter('.register', function(name,surname,username,password){
    var user = {};
    user.name = name;
    user.surname = surname;
    user.username = username;
    user.password = password;
    users.push(user);
    register.classList.toggle('register--hide');
    login.classList.toggle('login--hide');
});