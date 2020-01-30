
var _search = createSearch('.search', function(query){
    //debugger
    googl(query,function(results){
        createResults('.list', results );
    });
});

var _register = createRegister('register', function(name,surName,userName,password){
    var person = {
        name : name,
        userName : userName,
        surName : surName,
        password : password
    }
    if (person.name.length > 0 && person.surName.length > 0 && person.userName.length > 0 && person.password.length > 0 ){
        user.push(person);
        _register.toggle();
        login.toggle();
    }else {
        alert('Completa todos los campos!')
    };

}, function(){
    _register.toggle();
    login.toggle();
});

var login = createLogin('login', function(username, password) {
    var user = users.find(function(user){
        return username === user.username;
    });
    if (user && user.password === password){
        login.toggle();
        _search.classList.toggle('search--hide');
        return 0;
    } 
    
}, function(){
    login.toggle();
    _register.toggle();

});



